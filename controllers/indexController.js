const messages = require("../db/messages");
const formatTime = require("../utils/formatTime");
module.exports = {
    get: (_, res) => {
        res.render("pages/index", { messages });
    },
    getNew: (_, res) => {
        res.render("pages/newMessage");
    },
    postNew: (req, res) => {
        messages.push({
            text: req.body.message,
            user: req.body.name,
            added: formatTime(new Date()),
        });
        res.redirect("/");
    },
};
