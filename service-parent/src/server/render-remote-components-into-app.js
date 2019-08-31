import { remoteComponentPlaceholder } from '../shared/utils/remote-component-placeholder';

export const renderComponentsIntoApp = ({ renderedApp, renderedComponentsList }) => {
  let appHtml = renderedApp;
  renderedComponentsList.forEach(({componentName, html, styles, data, error}) => {
    appHtml = appHtml.replace(
      remoteComponentPlaceholder(componentName),
      error ? `An error occurred loading component "${componentName}"`
        :
      `
        ${styles}
        ${html}
        <script>window.${componentName}Data = ${JSON.stringify(data)};</script>
      `
    )
  });
  return appHtml;
};
