import { renderDocument } from './document';
import { renderAppMarkupAndStyles } from './render-app-and-styles';

export const routeHandler = async (req, res) => {
  try {
    const app = await renderAppMarkupAndStyles({ location: req.url });
    const document = renderDocument(app);
    res.status(200).send(document);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};
