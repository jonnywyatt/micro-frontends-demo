import React from 'react';
import { ServerStyleSheet } from 'styled-components';
import { renderToString } from 'react-dom/server';
import { Overview } from '../shared/Overview';

export const renderAppMarkupAndStyles = () => {
  const sheet = new ServerStyleSheet();
  let html;
  let styles;
  try {
    html = renderToString(sheet.collectStyles(
      <Overview />
    ));
    styles = sheet.getStyleTags();
  } catch (error) {
    console.error(error)
  } finally {
    sheet.seal()
  }
  return {
    html,
    styles,
    scriptUrls: ['http://localhost:3002/Overview.js']
  }
};
