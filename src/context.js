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
    location: [],
    data: [],
    loading: true
  };



  getData = async () => {
    try {
      let response = await Client.getEntries({
        // content_type: 'art'
        limit: 1000,
      });
      let data = response.items
      let stories = this.formatStoriesData(response.items);
      let location = this.formatLocationData(stories);
      let featured = stories.filter(story => story.featured === true);
      let city = stories.filter(city => city.contentType === 'city');
      let museum = stories.filter(museum => museum.contentType === 'museum');
      let piece = stories.filter(piece => piece.contentType === 'piece');
      this.setState({
        stories, featured, city, museum, piece, location, data
      });

      return stories

    } catch (error) {
      console.log(error);
    }
  };


  componentDidMount() {
    this.getData()
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.data.length > 0 && this.state.data.length === 0) {
      this.setState({
        loading: false
      })
    }

    return true
  }

  formatStoriesData(items) {

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

  formatLocationData(items) {
    let data = items.filter(data => data.contentType === 'location');
    // console.log(data);

    let tempLocation = data.map(data => {
      let museum = data.museum.fields
      let museumSlug = museum.slug
      let museumName = museum.name
      let address = museum.address
      let museumPhoto = museum.image.fields.file.url;
      let coordinate = museum.location

      let tempStories = data.stories.map(item => {
        let path = item.fields
        let storiePhoto = path.photo.fields.file.url
        let id = item.sys.id
        let duration = path.duration
        let title = path.title

        let location = { ...item.fields, storiePhoto, museumPhoto, duration, title, museumSlug, museumName, address, id, coordinate }

        return location;
      })
      return tempStories
    })
    return tempLocation;
  };
  /*
  
  
  get museums
  
  get museum/ID
   get all content = name, total
  
   get one content = name, address, surname, dfdsf, dsf, sdf
  
  
  */






  getStoriesDetails = (slug) => {
    let tempStories = [...this.state.stories]
    const storie = tempStories.find(storie => {

      if (((storie || {}).slug || "").indexOf("claude") > -1) {

        console.log({ slug, storie: storie.slug })
      }
      return storie.slug === slug
    })
    return storie
  }

  getStoriesPerMuseum = (slug) => {
    let tempLocation = [...this.state.location]
    let filteredLocation = tempLocation.flat().filter(item => item.museumSlug === slug)

    return filteredLocation
  }

  render() {
    return (
      this.state.loading ? "Loading ..." :
        <ArtContext.Provider value={{ ...this.state, getStoriesDetails: this.getStoriesDetails, getStoriesPerMuseum: this.getStoriesPerMuseum }}>
          {this.props.children}
        </ArtContext.Provider>
    )
  };
};

const ArtConsumer = ArtContext.Consumer;

export { ArtProvider, ArtConsumer, ArtContext };
