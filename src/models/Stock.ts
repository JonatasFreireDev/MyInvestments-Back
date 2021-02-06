interface StockDTO {
    ticker: string;
    amount: number;
    price: number;
}

class Stock {
    ticker: string;

    amount: number;

    price: number;

    constructor({ price, amount, ticker }: StockDTO) {
        this.ticker = ticker;
        this.amount = amount;
        this.price = price;
    }
}

export default Stock;
