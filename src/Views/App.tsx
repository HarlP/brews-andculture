import React from 'react';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PageData from '../Controllers/PageData';
//import Pagenator from '../Controllers/Pagenator';
import '../Content/App.scss';

const App: React.FC = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
          <PageData />
        </div>
        <div className="col-lg-4"></div>
      </div>
    </div>
  );
}

export default App;
