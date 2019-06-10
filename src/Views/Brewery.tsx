/** 
 * Create modal for single brewery
 * @author Harl Piety
 * @param breweries array
 * @param breweryId number
 * @param breweryName string
 * @function onHide() hide show modal
 * @param show boolean
 */

import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import GoogleMap from "./GoogleMap";
import {BreweryArray} from "./Interface/BreweryArray"

interface BreweryProps {
 breweries: [];
 breweryId: number;
 breweryName: string;
 onHide(): void;
 show: boolean;
}

export default class Brewery extends React.Component<BreweryProps> {
    render() {
      let breweries = this.props.breweries
      return (
        <Modal
          {...this.props}
          size="lg"
          centered
        >
          <Modal.Header closeButton>
            <h4>{this.props.breweryName}</h4>
          </Modal.Header>
          <Modal.Body>
          {breweries && breweries
          .filter((brewery: BreweryArray) =>  brewery.id === this.props.breweryId)
          .map((brewery: BreweryArray) =>  
                        <div key={brewery.id}>
                            <div>Brewery Type: {brewery.brewery_type}</div>
                            <div>
                              <span>Address:</span>
                              <span>
                                <div>{brewery.street}</div>
                                <div>{brewery.city}, {brewery.state}</div>
                                <div>{brewery.postal_code}</div>
                              </span>
                            </div>
                            <div>
                              <a href={brewery.website_url} target="_blank">{brewery.website_url}</a>
                            </div>
                            <div>Phone: 
                            {brewery.phone ? 
                                <span> {brewery.phone}</span> : 
                                <span> not available</span>
                            }
                            </div>
                            {brewery.latitude ? 
                                <div className='mapContainer' ><GoogleMap lat= {brewery.latitude} lng = {brewery.longitude} text = {brewery.name} /></div> : 
                                <div className='mapContainer' >Latitude and Longitude are not available</div>
                            }
                        </div>
                )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    }
  }