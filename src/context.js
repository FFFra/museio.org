import React, { Component } from 'react';
import Client from './Contentful';


const ArtContext = React.createContext();

class ArtProvider extends Component {
  state = {
    stories: [],
    featured: [],
    location: [],
    museum: [],
    piece: []
  };

  getData = async () => {
    try {
      let response = await Client.getEntries({
        // content_type: 'art'
        limit: 900,
      });
      let stories = this.formatData(response.items);
      let featured = stories.filter(story => story.featured === true);
      let location = stories.filter(location => location.contentType === 'location');
      let museum = stories.filter(museum => museum.contentType === 'museum');
      let piece = stories.filter(piece => piece.contentType === 'piece');
      this.setState({
        stories, featured, location, museum, piece
      });
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
      let images = artImages ? item.fields.photo.fields.file.url : false;
      let stories = { ...item.fields, id, photo: images, contentType: contentType, featured, audio }

      return stories;

    })
    return tempItems;
  };

  render() {
    return (
      <ArtContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </ArtContext.Provider>
    )
  };
};

const ArtConsumer = ArtContext.Consumer;

export { ArtProvider, ArtConsumer, ArtContext };
