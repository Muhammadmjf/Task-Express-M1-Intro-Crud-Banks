const express = require("express");
const {
  updateaccountsById,
  getAllaccounts,
  getaccountsByID,
  createaccounts,
  deleteaccountsByID,
} = require("./controllers");

const router = express.Router();

router.put("/:id", updateaccountsById);
router.get("/", getAllaccounts);
router.get(":id", getaccountsByID);
router.post("/", createaccounts);
router.delete("/:id", deleteaccountsByID);

module.exports = router;
