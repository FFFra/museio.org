import React, { Component } from 'react';
import Client from './Contentful';


const ArtContext = React.createContext();

class ArtProvider extends Component {
  state = {
    stories: [],
    title: [],
    image: []
  };

  getData = async () => {
    try {
      let response = await Client.getEntries({
        // content_type: 'art'
      });
      let stories = this.formatData(response.items);

      //formatar data
      //extratir o contenful
      //montar os componentes

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

      if (contentType === 'art') {
        let artId = item.sys.id
        let artTitle = item.fields.title
        let artImages = item.fields.photo.fields.file.url
        if (item.fields.featured) {

        }
      }


      if (contentType === 'piece') {

        if (item.fields.featured) {

        }
      }
    })
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
