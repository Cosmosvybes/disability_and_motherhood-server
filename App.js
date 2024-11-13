const express = require("express");
const PORT = process.env.PORT || 1020;
const app = express();
const { urlencoded } = require("body-parser");
const { routes } = require("./routes/Router");
const cors = require("cors");

app.use(express.json());
app.use(urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

app.use("/api", routes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));