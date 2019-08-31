import React from 'react';
import { RemoteComponentLoader } from './RemoteComponentLoader';

export class Main extends React.Component {
  render () {
    return <div>
      <p>In the parent app, <code>{`<RemoteComponentLoader componentName='Overview' />`}</code> will be replaced by the 'Overview' component:</p>
      <RemoteComponentLoader componentName='Overview' />
    </div>
  }
}
