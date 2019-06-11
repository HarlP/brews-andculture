import React from 'react';
import Breweries from './Breweries';

interface AppState{
  city: string;
}

export default class App extends React.Component<any, AppState> {

  constructor(props: any) {
    super(props);
    this.state = {
      city: 'Baltimore'
    };
  }

  render(){
    return (
      <div className='container-fluid'>
        <div className="fixed-top">
          <div className="row text-center border-bottom">
            <div className="col-12 title-block pt-2"><h1>{this.state.city} Breweries</h1></div>
          </div>
        </div>
        <div className='row'>
          <div className="col-sm-12 col-md-3 col-xl-4"></div>
          <div className="col-sm-12 col-md-6 col-xl-4">
            <Breweries city={this.state.city}/>
          </div>
          <div className="col-sm-12 col-md-3 col-xl-4"></div>
        </div>
      </div>
    );
  }
}


