const { Router } = require("express");
const indexController = require("../controllers/indexController");

const indexRouter = Router();
indexRouter.get("/", indexController.get);
indexRouter.get("/new", indexController.getNew);
indexRouter.post("/new", indexController.postNew);

module.exports = indexRouter;
