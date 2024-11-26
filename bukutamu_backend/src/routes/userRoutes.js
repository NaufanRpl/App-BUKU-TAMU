const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authJWt = require("../middleware/authMiddleware");

// router.post("/users",(req, res) => {
//     console.log("halo")
//     res.send("User ini di pos")
// })
// router.get("/users",(req, res) => {
//     console.log("halo")
//     res.send("User ini di get")
// })
// router.get("/users:id",(req, res) => {
//     console.log("halo")
//     res.send("User ini get by id")
// })
// router.delete("/users:id",(req, res) => {
//     console.log("halo")
//     res.send("User delete by id")
// })
router.post("/users", userController.storeUser);
router.get("/users", authJWt, userController.index);
router.delete("/users/:id", authJWt, userController.destroyUser);
router.get("/users/:id", authJWt, userController.showUser);
router.put("/users/:id", authJWt, userController.updateUser);
router.post("/login", userController.login);
router.post("/logout", authJWt, userController.logout);

module.exports = router;
