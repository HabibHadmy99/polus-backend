const functions = require("firebase-functions");
const express = require("express");
const app = express();
const userRouter = require("./api/controllers/user_controller");
const itemRouter = require("./api/controllers/user_controller");
const orderRouter = require("./api/controllers/user_controller");

app.use(express.json());
app.use("/user", userRouter);
app.use("/item", itemRouter);
app.use("/order", orderRouter);

exports.api = functions.https.onRequest(app);

exports.functionsTimeOut = functions.runWith({timeoutSeconds: 300,});

