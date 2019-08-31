import React from 'react';
import { Router } from 'react-router-dom';
import { hydrate } from 'react-dom';
import { Routes } from './shared/Routes';
import { PageWrapper } from './shared/PageWrapper';
import { browserHistoryInstance } from './browser/utils/history';
import { RemoteComponentContext } from './shared/utils/remote-component-context';
import { pushToHistory } from './browser/utils/history-context';

hydrate(
  <
    Router history={browserHistoryInstance}>
    <RemoteComponentContext.Provider value={{ pushToHistory: pushToHistory(browserHistoryInstance) }}>
      <PageWrapper>
        <Routes />
      </PageWrapper>
    </RemoteComponentContext.Provider>
  </Router>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
