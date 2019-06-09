import React from 'react';
import GoogleMapReact from 'google-map-react';
 
export default class GoogleMap extends React.Component<any, any> {
  render() {
      let mapCenter = {lat: parseFloat(this.props.lat), lng: parseFloat(this.props.lng)}
      console.log(mapCenter);
    return (
      <div style={{ height: '300px', width: '100%' }}>
        <GoogleMapReact
          //bootstrapURLKeys={{ key: your_url_key }}
          defaultCenter={mapCenter}
          defaultZoom={11}
          yesIWantToUseGoogleMapApiInternals
        >
          <div style={{
                color: 'white', 
                background: 'grey',
                padding: '15px 10px',
                display: 'inline-flex',
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '100%',
                transform: 'translate(-50%, -50%)'
            }}>
                {this.props.text}
          </div>
        </GoogleMapReact>
      </div>
    );
  }
}
 