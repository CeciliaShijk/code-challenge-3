const Transaction = require('../models/transaction.js');


// Add Transaction
async function addTransaction(req, res) {
    const {symbol, sourceAmount, targetAmount, fee} = req.body;
    const createAt = new Date();
    // add transaction
    const result = await Transaction.addTransaction(symbol, sourceAmount, targetAmount, fee,createAt);
    // return registration message
    return res.status(200).json({ message: 'Successfully Record Transaction',result:result});
}

// Get  Transaction
async function getTransaction(req, res) {
    const transactions = await Transaction.getTransaction();
    return res.status(200).json({ transactions:transactions});
}

module.exports = { addTransaction,getTransaction};