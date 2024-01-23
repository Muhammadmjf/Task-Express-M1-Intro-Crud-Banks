const { model, Schema } = require("mongoose");

const StudentSchema = new Schema(
  {
    name: { type: String, required: true },
    grade: { type: String, default: 100 },
    image: String,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Student", StudentSchema);
