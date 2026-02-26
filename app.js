const express = require("express");
const path = require("path");
const app = express();
const indexRouter = require("./routes/indexRouter");
const messagesRouter = require("./routes/messagesRouter");

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/", indexRouter);
app.use("/messages", messagesRouter);

app.use((req, res) => {
    res.render("pages/404");
});

app.use((error, req, res, next) => {
    console.error(error.message);
    res.status(error?.status || 500).send(error?.message || "Something broke!");
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`Listening...`);
});
