const express = require("express");
const path = require("path");
const app = express();
const indexRouter = require("./routes/indexRouter");
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/", indexRouter);

app.use((error, req, res, next) => {
    console.error(error.stack);
    res.status(500).send("Something broke!");
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`Listening...`);
});
