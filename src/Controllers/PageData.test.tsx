import React from "react";
import ReactDOM from 'react-dom';
import PageData from './PageData';

it('renders without crashing', async () => {
    const div = document.createElement('div');
    await ReactDOM.render(<PageData />, div);
    await console.log(div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
/*
it("Brewers return expected", async function () {
    const response = await new PageData;
    await console.log(response);
    expect(response).toBe(Text);
  });*/