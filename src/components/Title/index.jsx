import React, { Component } from 'react';
import './index.css'

export default class Title extends Component {
  render() {
    const { title = '' } = this.props;
    return <h2 className="h2-text">This is a demo for {title} webpack!!!!</h2>;
  }
}
