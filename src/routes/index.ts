import { Router } from 'express';

import orderRouter from './orders.routes';
import walletRouter from './wallet.routes';

const routes = Router();

routes.use('/order', orderRouter);
routes.use('/wallet', walletRouter);

export default routes;
