
type Transaction = {
    apply : (amount:number) => number ;
};

interface Wallet  {
    balance: number;
    transactions : Array<Transaction>;
};

function applyTransactions (wallet:Wallet):number {
    const {balance, transactions} = wallet;

    let newBalance = balance;

    try {
        for (const item of transactions) {

            const newValue = item.apply(newBalance);
            newBalance = newValue;
        }
        return newBalance;
    }catch (e){
        return balance;
    }

};


export { Wallet, applyTransactions };

