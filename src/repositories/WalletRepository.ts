import Wallet from '../models/Wallet';

interface Stock {
    ticker: string;
    amount: number;
    price?: number;
}

class WalletRepository {
    private stocks: Stock[];

    constructor() {
        this.stocks = [];
    }

    public all(): Stock[] {
        return this.stocks;
    }

    public addInWallet({ ticker, amount, price }: Stock): Stock {
        const stock = new Wallet({ ticker, amount, price });

        this.stocks.push(stock);

        return stock;
    }

    // public removeFromWallet({ ticker, amount }: Stock): Stock {
    //     const newTest = this.stock.map(stock => {
    //         stock.ticker === ticker ? (stock.amount -= amount) : any;
    //     });

    //     return stock;
    // }
}

export default WalletRepository;
