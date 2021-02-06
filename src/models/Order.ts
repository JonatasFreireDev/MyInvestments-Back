import { v4 as uuid } from 'uuid';

interface OrderDTO {
    type: string;
    date: string | Date;
    ticker: string;
    price: number;
    amount: number;
    status: boolean;
}

class Order {
    id: string;

    type: string;

    date: string | Date;

    ticker: string;

    price: number;

    amount: number;

    status: boolean;

    constructor({
        type,
        date,
        ticker,
        price,
        amount,
        status,
    }: Omit<OrderDTO, 'id'>) {
        this.id = uuid();
        this.type = type;
        this.date = date;
        this.ticker = ticker;
        this.price = price;
        this.amount = amount;
        this.status = status;
    }
}

export default Order;
