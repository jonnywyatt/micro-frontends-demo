import React from 'react';
import { loadScript } from './utils/load-script';
import { RemoteComponentContext } from './utils/remote-component-context';
import { remoteComponentPlaceholder } from './utils/remote-component-placeholder';
import { fetchRemoteComponent } from './utils/fetch-remote-component';

export class RemoteComponentLoader extends React.Component {
  static contextType = RemoteComponentContext;

  static getDerivedStateFromProps(props) {
    return {
      loaded: Boolean(typeof window !== 'undefined' && window[props.componentName])
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    }
  }
  componentDidMount () {
    this.fetchData();
  }

  componentDidUpdate() {
    this.fetchData();
  }

  fetchData = () => {
    const { componentName } = this.props;
    if (!window[componentName]) {
      fetchRemoteComponent(componentName)
        .then(({data, scriptUrls}) => {
          window[`${componentName}Data`] = data;
          return Promise.all(scriptUrls.map(scriptUrl => loadScript({ scriptUrl })))
        })
        .then(() => this.setState({ loaded: true }))
        .catch(() => this.setState({ error: true }));
    }
  };

  render(){
    const { componentName } = this.props;
    if (this.context.addComponent) {
      this.context.addComponent(componentName);
      return remoteComponentPlaceholder(componentName);
    }
    if (this.state.error) {
      return <p>An error occurred loading component {componentName}.</p>
    }
    if (!this.state.loaded) {
      return <p>Loading...</p>
    }
    const componentProps = {
      pushToHistory: this.context.pushToHistory,
      ...window[`${componentName}Data`] || {}
    };
    return React.createElement(window[componentName][componentName], componentProps);
  }
}
