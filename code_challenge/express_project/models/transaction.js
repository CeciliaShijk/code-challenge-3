const pool = require('../server');


// user model
const Transaction = {

    async getTransaction() {
        const [rows, fields] = await pool.query('SELECT * FROM transaction');
        return rows;
    },


    async addTransaction(symbol, sourceAmount, targetAmount, fee,createAt) {
        const result = await pool.query('INSERT INTO transaction (symbol, sourceAmount, targetAmount, fee, createdAt) VALUES (?,?,?,?,?)', [symbol, sourceAmount, targetAmount, fee,createAt]);
        return result;
    },

}

module.exports = Transaction;