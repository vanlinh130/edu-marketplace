const { createTransaction } = require("../models/transactionModel");

const createTransactionSepay = async (req, res) => {
  try {
    const {
      gateway,
      transaction_date, // optional, format ISO hoặc UNIX timestamp
      account_number,
      sub_account,
      amount_in,
      amount_out,
      accumulated,
      code,
      transaction_content,
      reference_number,
      body
    } = req.body;

    // Validation cơ bản
    if (!gateway) {
      return res.status(400).json({ error: 'gateway is required' });
    }

    const newTransaction = await createTransaction({
      gateway,
      transaction_date,
      account_number,
      sub_account,
      amount_in,
      amount_out,
      accumulated,
      code,
      transaction_content,
      reference_number,
      body,
    });

    res.status(201).json(newTransaction);
  } catch (error) {
    console.error('Error creating transaction:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  createTransactionSepay,
};