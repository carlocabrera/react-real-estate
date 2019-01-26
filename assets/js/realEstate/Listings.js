import React, { Component } from "react";

export default class Listings extends Component {
  constructor() {
    super();
    this.state = {
      name: "Carlo"
    };
  }

  render() {
    return <section className="Listings">Listings</section>;
  }
}
