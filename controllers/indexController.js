const messages = require("../db/messages");
const formatTime = require("../utils/formatTime");
const ValidationError = require("../errors/ValidationError");
module.exports = {
    get: (_, res) => {
        res.render("pages/index", { messages });
    },
    getNew: (_, res) => {
        res.render("pages/newMessage");
    },
    postNew: (req, res) => {
        if (req.body?.message && req.body?.name) {
            messages.push({
                text: req.body.message,
                user: req.body.name,
                added: formatTime(new Date()),
                id: crypto.randomUUID(),
            });
            res.redirect("/");
        } else {
            throw new ValidationError("All fields must be filled out");
        }
    },
};
