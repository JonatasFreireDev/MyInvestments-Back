import { Router } from 'express';
import { parseISO } from 'date-fns';

import WalletRepository from '../repositories/WalletRepository';

import Order from '../models/Order';
import OrderRepository from '../repositories/OrderRepository';

const ordersRouter = Router();
const orderRepository = new OrderRepository();

const walletRepository = new WalletRepository();

ordersRouter.post('/', (request, response) => {
    const { type, date, ticker, price, amount, status }: Order = request.body;

    const dateIso = parseISO(date);

    const order = orderRepository.create({
        type,
        date: dateIso,
        ticker,
        price,
        amount,
        status,
    });

    if (type === 'buy') {
        walletRepository.addInWallet({ ticker, amount, price });
    }

    return response.json(order);
});

ordersRouter.get('/', (request, response) => {
    const orders = orderRepository.all();

    return response.json(orders);
});

export default ordersRouter;
