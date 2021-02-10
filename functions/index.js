const functions = require("firebase-functions");
const express = require("express");
const app = express();
const userRouter = require("./api/controllers/user_controllers");
const itemRouter = require("./api/controllers/item_controllers");
const orderRouter = require("./api/controllers/order_controller");

app.use(express.json());
app.use("/user", userRouter);
app.use("/item", itemRouter);
app.use("/order", orderRouter);

exports.api = functions.https.onRequest(app);
exports.setupdb = functions.https.onRequest(require("./setup_database"));

exports.functionsTimeOut = functions.runWith({timeoutSeconds: 300,});

