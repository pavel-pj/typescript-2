//https://github.com/stemmlerjs/simple-typescript-starter/tree/master
import { applyTransactions, Wallet } from './djn/wallet';

const wallet: Wallet = {
    balance: 10,
    transactions: [
        {
            apply: (amount: number) => amount + 10,
        },
        {
            apply: () => {
                throw new Error('Error');
            },
        },
        {
            apply: (amount: number) => amount + 30,
        },
    ],
};

console.log(applyTransactions(wallet)) // 1