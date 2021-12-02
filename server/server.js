const express = require("express");
const app = express();
const PORT = 8080;
const cors = require("cors");
const inventoryRouter = require("./routes/inventory/index");
const warehousesRouter = require("./routes/warehouses/index");

app.use(express.json());
app.use(cors());
app.use("/", warehousesRouter);
app.use("/", inventoryRouter);

app.use(express.static("public"));

app.listen(PORT, () => {
    console.log(`Express server listening on ${PORT} :-) !`);
});
