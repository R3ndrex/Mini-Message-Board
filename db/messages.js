const formatTime = require("../utils/formatTime");
const messages = [
    {
        id: crypto.randomUUID(),
        text: "Hi there!",
        user: "Amando",
        added: formatTime(new Date()),
    },
    {
        id: crypto.randomUUID(),
        text: "Hello World!",
        user: "Charles",
        added: formatTime(new Date()),
    },
];
module.exports = messages;
