const formatTime = require("../ulits/formatTime");
const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: formatTime(new Date()),
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: formatTime(new Date()),
    },
];
module.exports = messages;
