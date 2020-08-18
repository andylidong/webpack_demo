import React, { Component } from 'react';

export default class Image extends Component {
  render() {
    const { src = '', style, className } = this.props;
    return <img className={className} src={src.default} style={style} />;
  }
}
