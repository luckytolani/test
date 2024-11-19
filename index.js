const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // Middleware to parse JSON request body

app.post("/api/transaction", (req, res) => {
  const response = {
    originalTransactionId: "23456432453",
    description: "PARTIAL_RECOVERY",
    txnType: "Value",
    responseCode: "P1",
    code: "P1",
    transactionId: "3456787654678",
    transactionDate: "21/04/56",
    status: "P1",
  };
  res.status(200).json(response);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
