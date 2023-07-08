const express = require("express");
const router = express.Router();
const transactionController = require("../controller/transactionController");


// $route GET transaction/getTransaction
// @access public
router.get("/getTransaction",transactionController.getTransaction);

// $route POST transaction/addTransaction
// @access public
router.post("/addTransaction",transactionController.addTransaction);

module.exports = router;