import express from 'express';
import { routeHandler } from './route-handler';

const app = express();
app
  .disable('x-powered-by')
  .use('/static', express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('*', routeHandler);

export default app;
