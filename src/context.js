import React, { Component } from 'react';

const ArtContext = React.createContext();

class ArtProvider extends Component {
  state = {
    title: [],
    image: []
  };

  //getData{}


  componentDidMount() {
    //tarefa seguinte: estruturar os dados e dormir cedo
    //formatar data
    //extratir o contenful
    //montar os componentes
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
