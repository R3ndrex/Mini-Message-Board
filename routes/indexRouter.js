const { Router } = require("express");
const indexController = require("../controllers/indexController");

const indexRouter = Router();
indexRouter.get("/", indexController.get);
indexRouter
    .route("/new")
    .get(indexController.getNew)
    .post(indexController.postNew);

module.exports = indexRouter;
