import React from 'react';

export class Overview extends React.Component {

  render() {
    return (
      <div>
        <h1>Overview</h1>
        <p>This remote component was fetched from <a href="http://localhost:3002/Overview" target="_blank">http://localhost:3002/Overview</a></p>
        <p>The parent app gets the host from <code>./src/remote-components-list.js</code> then adds the component name as the path.</p>
        <p>The remote component receives a prop called <code>pushToHistory</code> and can call it to do client-side navigation to any route that the parent app knows about.</p>
        <a href="/things-to-do" onClick={this.props.pushToHistory}>Example link</a>
      </div>
    );
  }
}
