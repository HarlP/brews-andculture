import React from "react";
import Brewery from "./Brewery";
import Button from "react-bootstrap/Button";

//startingpoint: https://gist.github.com/dennisja/33bd343d55797ea5095b0ad5d34626dc  

export default class Breweries extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      breweries: [],
      breweryId: 0,
      loading: true,
      error: null,
      modalShow: false
    };
  }

  componentDidMount() {
    fetch(`https://api.openbrewerydb.org/breweries?by_city=baltimore`)
      .then(respose => respose.json())
      .then(breweries => {
        this.setState({ breweries, loading: false });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  }

  handleBreweryClick(breweryId: number){
    console.log(breweryId);
    this.setState({breweryId: breweryId});
    this.setState({ modalShow: true});
  }

  render() {
    const { loading, breweries, error } = this.state;
    let modalClose = () => this.setState({ modalShow: false });

    if (loading) return <div>loading</div>;

    if (error) return <div>Error</div>;

    if (breweries.length >= 1) {
     return <div>
                {breweries.map((brewery: { id: number; name: string; }) =>  
                        <div key={brewery.id}>
                          {brewery.name}
                          <Button
                            variant="primary"
                            onClick={() => this.handleBreweryClick(brewery.id)}
                          >
                            View
                          </Button>
                        </div>)
                }
                <Brewery
                  show={this.state.modalShow}
                  onHide={modalClose}
                  breweryId = {this.state.breweryId}
                  breweries = {this.state.breweries}
                />
            </div>

    }

    return <div>No breweries</div>;
  }
}