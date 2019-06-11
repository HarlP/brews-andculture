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
                        <div className="main" key={brewery.id}>
                          <div className="top-section">
                            <div className="row">
                              <div className="col-5">Type: {brewery.brewery_type}</div>
                              <div className="col-7">
                                <div>Address:</div>
                                <div>{brewery.street}</div>
                                <div>{brewery.city}, {brewery.state}</div>
                                <div>{brewery.postal_code}</div>
                              </div>
                            </div>
                            <div className="row bottom">
                              <div className="col-5">Phone: 
                              {brewery.phone ? 
                                  <span> {brewery.phone}</span> : 
                                  <span> not available</span>
                              }
                              </div>
                              <div className="col-7">
                                <a href={brewery.website_url} target="_blank">{brewery.website_url}</a>
                              </div>
                              
                            </div>
                          </div>
                          {brewery.latitude ? 
                            <div className='map-container' ><GoogleMap lat= {brewery.latitude} lng = {brewery.longitude} text = {brewery.name} /></div> : 
                            <div className='map-container bg-secondary text-center' ><div className="p-top">No map, latitude and longitude are not available</div></div>
                          }
                        </div>
                )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    }
  }