import React, { Component } from "react";

export default class Chat extends Component {
  componentDidMount() {
    const script = document.createElement("script");

    script.src = "https://cdn.pubnub.com/sdk/javascript/pubnub.4.27.4.min.js";
    script.async = true;

    document.body.appendChild(script);
  }
  render() {
    return <div></div>;
  }
}
