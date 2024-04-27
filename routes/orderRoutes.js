const router = require("express").Router();
const {
  addOrder,
  getAllOrders,
  getSingleOrder,
  deleteOrder,
} = require("../controllers/orderController");
const verifyToken = require("../middleware/verifyToken");

router.post("/create-order", addOrder);
router.get("/all-orders", verifyToken, getAllOrders);
router.get("/single/:id", verifyToken, getSingleOrder);
router.delete("/delete/:id", verifyToken, deleteOrder);

module.exports = router;
