// const http = require("http");
// const app = require("./app");
// const port = process.env.PORT || 3000;

// const server = http.createServer(app);
// app.get("/", (req, res) => {
//   res.send("API is running...");
// });

// server.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

const http = require("http");
const app = require("./app"); // Import the app (your Express app instance)
const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
