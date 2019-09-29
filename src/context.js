import React, { Component } from 'react';
import Client from './Contentful';


const ArtContext = React.createContext();

class ArtProvider extends Component {
  state = {
    stories: [],
    featured: [],
    city: [],
    museum: [],
    piece: [],
  };



  getData = async () => {
    try {
      let response = await Client.getEntries({
        // content_type: 'art'
        limit: 900,
      });
      let stories = this.formatData(response.items);
      let featured = stories.filter(story => story.featured === true);
      let city = stories.filter(city => city.contentType === 'city');
      let museum = stories.filter(museum => museum.contentType === 'museum');
      let piece = stories.filter(piece => piece.contentType === 'piece');
      this.setState({
        stories, featured, city, museum, piece
      });
      console.log(this.state.stories);
      return stories
    } catch (error) {
      console.log(error);
    }
  };


  componentDidMount() {
    this.getData()
  }

  formatData(items) {

    let tempItems = items.map(item => {

      let contentType = item.sys.contentType.sys.id
      let featured = item.fields.featured
      let id = item.sys.id
      let audioField = item.fields.audio
      let audio = audioField ? item.fields.audio.fields.file.url : false;
      let artImages = item.fields.photo
      let images = artImages ? item.fields.photo.fields.file.url : 'caralho';
      let stories = { ...item.fields, id, photo: images, contentType: contentType, featured, audio }
      return stories;

    })
    return tempItems;
  };

  getStories = (slug) => {
    let tempStories = [...this.state.stories]
    const storie = tempStories.find(storie => storie.slug === slug)
    return storie
  }

  render() {
    return (
      <ArtContext.Provider value={{ ...this.state, getStories: this.getStories }}>
        {this.props.children}
      </ArtContext.Provider>
    )
  };
};

const ArtConsumer = ArtContext.Consumer;

export { ArtProvider, ArtConsumer, ArtContext };
