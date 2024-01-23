const { model, Schema } = require("mongoose");

const PetsSchema = new Schema({
  name: String,
  color: String,
});

model.exports = model("Pets", PetsSchema);
