const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const user = require("./models/user");
const userRoutes = require("./routes/userRoutes");
const bukutamu = require("./models/bukutamu");
const bukutamuRouter = require("./routes/bukutamuRouter");

// const app = express();
// const port = 3000;
// app.use(cors())
// app.use(bodyParser.json());

// app.listen(port, () => {
//     console.log(`jalan di port ${port}`);
// });

const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.json());
app.use("/api", userRoutes);
app.use("/api", bukutamuRouter);

user.createUserTable();
bukutamu.createBukutamuTable();
app.listen(port, () => {
  console.log(`jalan di port 3000+${port}`);
});
