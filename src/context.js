import React, { Component } from 'react';
import Client from './Contentful';


const ArtContext = React.createContext();

class ArtProvider extends Component {
  state = {
    stories: [],
    featured: [],

  };

  getData = async () => {
    try {
      let response = await Client.getEntries({
        // content_type: 'art'
      });
      let stories = this.formatData(response.items);
      // console.log(stories);
      let featured = stories.filter(story => story.featured === true);
      this.setState({
        stories, featured
      });
      return stories
    } catch (error) {
      console.log(error);
    }
  }


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
  }

  render() {
    return (
      <ArtContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </ArtContext.Provider>
    )
  }
}

const ArtConsumer = ArtContext.Consumer;

export { ArtProvider, ArtConsumer, ArtContext };
