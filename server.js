//const http = require("http");
const express = require("express");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const routes404 = require("./routes/404");

const app = express();
app.use(shopRoutes);
app.use(adminRoutes);

app.use(routes404);
// app.use((req, res, next) => {
//   console.log(`Received ${req.method} request to ${req.url}`);
//   next(); // Pass control to the next middleware function
// });
// app.use((req, res, next) => {
//   res.status(404).send("<html><p>Page Not Found</p></html>"); //in chaning send has to be the last one!!
// });
app.listen(3000);
