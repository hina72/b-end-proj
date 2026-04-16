const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to Hina72");
});

app.post("/data", (req, res) => {
    const udata = req.body;
    res.json({
        message: "received",
        received: udata
    });
});

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});
