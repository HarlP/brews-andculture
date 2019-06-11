/**
 * Construct breweries list
 * Api call for openbrewerydb to retreive data
 * @author Harl Piety
 * @param city string
 */

import React from "react";
import Brewery from "./Brewery";
import Button from "react-bootstrap/Button";
import {BreweryArray} from "./Interface/BreweryArray";

interface BreweriesProps {
  city: string;
 } 

interface BreweriesState {
  breweries: [];
  breweryId: number;
  breweryName: string;
  loading: boolean;
  error: any;
  modalShow: boolean;
}

export default class Breweries extends React.Component<BreweriesProps, BreweriesState> {
  
  constructor(props: any) {
    super(props);
    this.state = {
      breweries: [],
      breweryId: 0,
      breweryName: 'default',
      loading: true,
      error: null,
      modalShow: false
    };
  }

  componentDidMount() {
    fetch(`https://api.openbrewerydb.org/breweries?by_city=${this.props.city}`)
      .then(respose => respose.json())
      .then(breweries => {
        this.setState({ breweries, loading: false });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  }

  // handle state update for brewery class
  
  handleBreweryClick(breweryId: number, breweryName: string){
    this.setState({breweryId: breweryId});
    this.setState({breweryName: breweryName});
    this.setState({ modalShow: true});
  }

  render() {
    const { loading, breweries, error } = this.state;
    let modalClose = () => this.setState({ modalShow: false });

    if (loading) return <div>loading</div>;

    if (error) return <div>Error</div>;

    if (breweries.length >= 1) {
     return <div className="main">
                {breweries.map((brewery: BreweryArray) =>  
                        <div className="col-12 py-3 brewery" key={brewery.id}>
                          <div className="border-bottom border-primary"><h5>{brewery.name}</h5></div>
                          <div className="row pt-2">
                            <div className="col-5">Type: {brewery.brewery_type}</div>
                            <div className="col-7">
                              <div>Address:</div>
                              <div>{brewery.street}</div>
                              <div>{brewery.city}, {brewery.state}</div>
                              <div>{brewery.postal_code}</div>
                            </div>
                          </div>
                          <div className="row bottom">
                            <div className="col-9">
                              <a href={brewery.website_url} target="_blank">{brewery.website_url}</a>
                            </div>
                            <div className="col-3 text-center"> 
                              <Button
                                variant="primary"
                                onClick={() => this.handleBreweryClick(brewery.id,brewery.name)}
                              >
                                Details
                              </Button>
                            </div> 
                          </div> 
                        </div>)
                }
                <Brewery
                  show={this.state.modalShow}
                  onHide={modalClose}
                  breweryId = {this.state.breweryId}
                  breweryName = {this.state.breweryName}
                  breweries = {this.state.breweries}
                />
            </div>

    }

    return <div>No breweries</div>;
  }
}