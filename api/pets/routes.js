const express = require("express");
const {
  updatepetsById,
  getAllpets,
  getpetsByID,
  createpets,
  deletepetsByID,
} = require("./controllers");

const router = express.Router();

router.put("/:id", updatepetsById);
router.get("/", getAllpets);
router.get(":id", getpetsByID);
router.post("/", createpets);
router.delete("/:id", deletepetsByID);

module.exports = router;
