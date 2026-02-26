const { Router } = require("express");
const messagesController = require("../controllers/messagesController");

const messagesRouter = Router();
messagesRouter.get("/:id", messagesController.get);

module.exports = messagesRouter;
