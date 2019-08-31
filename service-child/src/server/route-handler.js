import { renderAppMarkupAndStyles } from './render-app-and-styles';

export const routeHandler = async (req, res) => {
  const app = await renderAppMarkupAndStyles({ location: req.url });
  res.status(200).send({
    componentName: 'Overview',
    ...app
  });
};
