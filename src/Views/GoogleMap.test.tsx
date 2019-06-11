import React from 'react';
import ReactDOM from 'react-dom';
import GoogleMap from './GoogleMap';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GoogleMap lat="40.27" lng="76.88" text="Test text" />, div);
  ReactDOM.unmountComponentAtNode(div);
});