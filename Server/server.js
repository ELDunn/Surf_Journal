const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const apiRouter = require ('./api')




app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// serve index.html

// app.use("/api", (req, res) => {
//   res.json({ message: "Hello from server!" });
// });

app.use("/api", apiRouter);

app.use((req, res) => {
  res.status(404).json({ error: 'Not found' })
})

// start server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;