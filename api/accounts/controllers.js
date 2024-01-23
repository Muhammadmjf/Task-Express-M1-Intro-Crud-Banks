let accounts = require("../../models/Accounts_");

//all accounts
const getAllaccounts = async (req, res) => {
  try {
    const accounts = await accounts_.find();
    return res.json(accounts);
  } catch (error) {
    return res.status(500).json("server error", error);
  }
};
/// one accounts

const getaccountsByID = (req, res) => {
  const id = req.params.id;
  const account = accounts.find((account) => {
    return account.id == id;
  });
  if (!account)
    return res
      .state(404)
      .json({ message: `account with the id ${id},was not found` });
  return res.status(200).json(account);
};

// add new accounts from body//
const createaccounts = (req, res) => {
  accounts.push({
    id: accounts[accounts.length - 1].id + 1,
    username: req.body.username,
    funds: req.body.funds,
  });
  return res.json(accounts);
};
// DElete accounts
const deleteaccountsByID = (req, res) => {
  const id = req.params.id;
  accounts = accounts.filter((account) => {
    return account.id != id;
  });
  return res.status(200).json(accounts);
};
///update accounts
const updateaccountsById = (req, res) => {
  const id = req.params.id;
  const { username, funds } = req.body;
  const account = accounts.find((account) => {
    return account.id == id;
  });
  if (!account)
    return res
      .status(200)
      .json({ msg: ` account with the id:${id}was not found!` });
  account.username = username ? username : account.username;
  account.funds = funds ? funds : account.funds;
};
module.exports = {
  getAllaccounts,
  createaccounts,
  deleteaccountsByID,
  getaccountsByID,
  updateaccountsById,
};
