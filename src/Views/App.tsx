import React from 'react';
import Breweries from './Breweries';

const App: React.FC = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
          <Breweries city='baltimore'/>
        </div>
        <div className="col-lg-4"></div>
      </div>
    </div>
  );
}

export default App;
