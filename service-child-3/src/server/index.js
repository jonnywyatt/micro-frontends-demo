import express from 'express';
const path = require('path');
import { routeHandler } from './route-handler';
import cors from 'cors';

const app = express();
app.use(cors());

app
  .disable('x-powered-by')
  .use(express.static(path.join(process.cwd(), "build/client")))
  .get('/ThingsToDo', routeHandler);

export default app;
