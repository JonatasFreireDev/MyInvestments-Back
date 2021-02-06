import Stock from './Stock';

// interface StockWallet {
//     stock: Stock;
// }

// interface WalletDTO {
//     user: string;
//     stocks: Stock[];
// }

class Wallet {
    user: string;

    stocks: Stock[];

    constructor(stock: Omit<Stock, 'user'>) {
        this.user = 'salve';
        this.stocks.push(stock);
    }

    // constructor({ ticker, amount, price }: Omit<WalletDTO, 'user'>) {
    //     this.user = 'salve';
    //     this.ticker = ticker;
    //     this.amount = amount;
    //     this.price = price;
    // }
}

export default Wallet;
