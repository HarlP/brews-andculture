import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import GoogleMap from "./GoogleMap";

export default class Brewery extends React.Component<any, any> {
    render() {
      let breweries = this.props.breweries
      return (
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton/>
          <Modal.Body>
          {breweries && breweries
          .filter((brewery: { id: number; }) =>  brewery.id === this.props.breweryId)
          .map((brewery: { id: number; name: string; latitude: number; longitude: number; }) =>  
                        <div key={brewery.id}>
                            <div>{brewery.name}</div>
                            {brewery.latitude ? 
                                <div style={{width: '100%', height: '400px'}}><GoogleMap lat= {brewery.latitude} lng = {brewery.longitude} text = {brewery.name} /></div> : 
                                <div>No Location Available</div>
                            }
                        </div>)
                }
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    }
  }