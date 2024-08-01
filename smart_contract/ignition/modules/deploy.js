const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("Transaction", (m) => {
  const transactionContract = m.contract("Transactions", []);
  return {transactionContract };
});