/* global google */
import React from 'react';
import Map, { GoogleApiWrapper } from 'google-maps-react';

import Nav from '../Nav';

class MapPage extends React.Component {
  
  initMap = () => {
    // MAP OPTIONS
    var options = {
      zoom: 8,
      center: {
        lat: 49.2827,
        lng: 123.1207
      }
    }
    // NEW MAP
    var map = new google.maps.Map(document.getElementById('map'), options)
  }
  
  
  render() {
    return (
      <div>
        <Nav />
        <div className="container-fluid">
         <Map 
          google={this.props.google}
          zoom={12}
          center={{
            lat: '49.246292',
            lng: '-123.116226'	
          }}
        />
        </div>
      </div>
    )
  }
}

// let url = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBa1VlqvMZgWIzTgpezGMSh8ECoUEw8GcY&callback=initMap";

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBa1VlqvMZgWIzTgpezGMSh8ECoUEw8GcY',
}) (MapPage);