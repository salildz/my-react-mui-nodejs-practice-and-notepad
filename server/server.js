const express = require('express');
const app = express();

app.get("/api", (req, res) => {
    res.json({ users: ["Salih", "Salih2", "Salih3 ", "Salih4", "Salih5"] });
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});