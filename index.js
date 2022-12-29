const express = require("express");
const app = express();
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const { connectDB } = require("./config/db");
const userRoutes = require("./routes/user");
const productRoutes = require("./routes/poduct");

// connectDB();
// middleware
app.use(express.json());
app.use(express.static("content"));
app.use(express.urlencoded({ extended: false }));

// for documentation

require("dotenv").config();

const BASE_URL = process.env.BASE_URL;
const PORT = process.env.PORT;

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Photo/Video Store API",
      version: "1.0.0",
      description:
        "Completed project with file upload, payment gateway, unit testing and swagger docs",
    },
    servers: [
      {
        url: BASE_URL,
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsDoc(options);

// create api
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
app.use("/api/vi/user", userRoutes);
// one more middle ware for upload file
app.use("/api/vi/product", productRoutes);
// start app
app.listen(PORT, () => {
  console.log("server is running.....", PORT);
  connectDB();
});
