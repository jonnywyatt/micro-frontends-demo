import React from 'react';

export const RemoteComponentContext = React.createContext();

export const addComponent = componentsToFetch => componentName => {
  if (!componentsToFetch.includes(componentName)) {
    componentsToFetch.push(componentName);
  }
};
