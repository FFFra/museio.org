import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '300px',
  height: '100px',
  position: 'relative'
};

class GoogleMaps extends Component {
  render() {
    return (
      <div style={{ height: '100px' }}>
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: `${this.props.lat}`, lng: `${this.props.lng}` }}
        >
          <Marker position={{ lat: `${this.props.lat}`, lng: `${this.props.lng}` }} />
        </Map>
        <div>
          <img src={this.props.image} alt="" />
        </div>

      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_KEY
})(GoogleMaps);