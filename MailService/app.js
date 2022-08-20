const express = require("express");
require("dotenv").config();
const cors = require("cors");
const PORT = process.env.PORT || 5200;
const router = require("./routes/routes");

const app = express();
app.use(cors());
app.use(express.json());

//  http://localhost:5200/mail
app.use("/mail", router);

const start = async () => {
    try {
        app.listen(PORT, () =>
            console.log(`App has been started on port: ${PORT} `)
        );
    } catch (e) {
        console.log("Server error", e.message);
        process.exit(1);
    }
};

start();
