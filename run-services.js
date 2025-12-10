// run-services.js
const concurrently = require("concurrently");
const services = require("./run-services.json").services;

concurrently(
    services.map(s => ({
        command: s.command,
        name: s.name,
        prefixColor: s.color
    })),
    {
        killOthers: ["failure", "success"],
        restartTries: 0
    }
);
