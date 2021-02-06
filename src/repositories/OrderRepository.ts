import Order from '../models/Order';

// Data Transfer Object
interface CreateOrderDTO {
    type: string;
    date: string | Date;
    ticker: string;
    price: number;
    amount: number;
    status: boolean;
}

class OrderRepository {
    private orders: Order[];

    constructor() {
        this.orders = [];
    }

    public all(): Order[] {
        return this.orders;
    }

    public create({
        type,
        date,
        ticker,
        price,
        amount,
        status,
    }: CreateOrderDTO): Order {
        const order = new Order({ type, date, ticker, price, amount, status });

        this.orders.push(order);

        return order;
    }
}

export default OrderRepository;
