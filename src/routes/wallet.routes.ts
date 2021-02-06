import { Router } from 'express';

import Wallet from '../models/Wallet';
import WalletRepository from '../repositories/WalletRepository';

const walletRouter = Router();
const walletRepository = new WalletRepository();

walletRouter.get('/', (request, response) => {
    const wallet = walletRepository.all();

    return response.json(wallet);
});

export default walletRouter;
