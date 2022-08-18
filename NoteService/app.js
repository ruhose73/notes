const express = require("express");
require("dotenv").config();
const sequelize = require("./config/db");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 5100;
const router = require("./routes/routes");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const errorMiddleware = require("./middlewares/errorMiddleware");

const swaggerConfig = {

    definition: {
        openapi: "3.0.0",
        info: {
        title: "Notes",
        version: "1.0.0",
        description: "Сервис заметок",
        },
        servers: [
        {
            url: `${process.env.API_FULL_URL}`
        },
        ],
    },

    apis: ["./docs/*/*.js", "./docs/*.js"],
};

const swaggerSpecs = swaggerJsDoc(swaggerConfig);

const app = express();
app.use(cookieParser());
app.use(cors());
app.use(express.json());

//  http://localhost:5100/docs/user
app.use("/docs/user", swaggerUI.serve, swaggerUI.setup(swaggerSpecs));

//  http://localhost:5100/notes
app.use("/notes", router);

app.use(errorMiddleware);

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () =>
            console.log(`App has been started on port: ${PORT} `)
        );
    } catch (e) {
        console.log("Server error", e.message);
        process.exit(1);
    }
};

start();
