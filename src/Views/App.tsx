import React from 'react';
import Breweries from './Breweries';

const App: React.FC = () => {
  return (
    <div className='container-fluid'>
      <div className="fixed-top">
        <div className="row text-center border-bottom">
          <div className="col-12 title-block pt-2"><h1>Baltimore Breweries</h1></div>
        </div>
      </div>
      <div className='row'>
        <div className="col-sm-12 col-md-3 col-xl-4"></div>
        <div className="col-sm-12 col-md-6 col-xl-4">
          <Breweries city='baltimore'/>
        </div>
        <div className="col-sm-12 col-md-3 col-xl-4"></div>
      </div>
    </div>
  );
}

export default App;
