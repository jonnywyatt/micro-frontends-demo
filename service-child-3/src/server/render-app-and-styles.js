import React from 'react';
import { ServerStyleSheet } from 'styled-components';
import { renderToString } from 'react-dom/server';
import { ThingsToDo } from '../shared/ThingsToDo';

export const renderAppMarkupAndStyles = async () => {
  const sheet = new ServerStyleSheet();
  let html;
  let styles;
  let data;
  try {
    data = await ThingsToDo.getData();
    // The StaticRouter is present ONLY so that React Router won't throw a compile error - any usages of <Link />
    // within this app have to be wrapped in a router. All actual routing is handled by the parent app
    html = renderToString(sheet.collectStyles(
        <ThingsToDo {...data} />
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
    scriptUrls: ['http://localhost:3004/ThingsToDo.js'],
    data
  }
};
