import React from "react";

export default class Breweries extends React.Component<any, any> {
    constructor(props: any) {
      super(props);
    }

    render() {
          return this.props.breweries.map((brewery: { id: number; name: string; }) =>  
            <div key={brewery.id} data-id={brewery.id}>{brewery.name}</div>
          );

      }
}