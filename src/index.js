const express = require('express');
const userRoutes = require("./routes/users");
require('dotenv').config();

const app = express();
const port = process.env.PORT || 9000;

// routes
app.get('/', (req, res) => {
  res.send('Hola desarrollador');
});

app.use(express.json());
app.use("/api",userRoutes);

const mongoose = require('mongoose');
// mongodb connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Conectado a la base de datos atlas'))
  .catch((error) => console.error(error));
app.listen(port, () => console.log('server listening on port', port));
