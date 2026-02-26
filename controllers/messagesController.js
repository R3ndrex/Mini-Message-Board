const messages = require("../db/messages");
module.exports = {
    get: (req, res) => {
        const message = messages.find(
            (message) => message.id === req.params.id,
        );
        res.render("pages/messageInfo", { message });
    },
};
