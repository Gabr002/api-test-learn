const express = require("express");
const routers = require("./src/routes/pessoa");

const app = express();

app.use(express.json());

app.use(routers);

app.listen(3000, () => {
    console.log("service run in port 3000");
});