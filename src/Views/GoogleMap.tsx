import React from 'react';
import GoogleMapReact from 'google-map-react';

interface MapProps {
  lat: string;
  lng: string;
  text: string;
 }

export default class GoogleMap extends React.Component<MapProps> {
  handleApiLoaded = (map: any, maps: any, mapCenter: any, label: string) => {
    return new maps.Marker({
      position: mapCenter,
      map: map,
      label: {
        text: label,
        fontFamily: "Apple Color Emoji",
        color: "#ffffff"
      }
    });
  };
  render() {
      let mapCenter = {lat: parseFloat(this.props.lat), lng: parseFloat(this.props.lng)}
    return (
      <div style={{ height: '20rem', width: '100%' }}>
        <GoogleMapReact
          //bootstrapURLKeys={{ key: your_url_key }}
          defaultCenter={mapCenter}
          defaultZoom={13}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => this.handleApiLoaded(map, maps, mapCenter, this.props.text)}
        />
      </div>
    );
  }
}
 