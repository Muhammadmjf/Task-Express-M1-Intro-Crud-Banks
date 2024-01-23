const { model, Schema } = require("mongoose");

const AccountsSchema = new Schema({
  username: String,
  funds: Number,
});

model.exports = model("Accounts", AccountsSchema);
