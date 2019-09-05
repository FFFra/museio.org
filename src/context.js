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
        content_type: 'art'
      });
      // console.log(response.items);
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
      let id = item.sys.id
      let title = item.fields.title
      let images = item.fields.photo.fields.file.url
      console.log(title);

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
