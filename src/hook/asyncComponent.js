import React, { Component } from 'react';

const asyncComponent = (importComponent) => {
  return class extends Component {
    constructor() {
      super();
      this.state = {
        component: null
      };
    }

    componentDidMount() {
      importComponent()
        .then(cmp => {
          this.setState({ component: cmp.default });
        });
    }

    render() {
      const C = this.state.component;
      if (C) {
        return <C {...this.props} />;
      }
      return null;
    }
  }
};

export default asyncComponent;