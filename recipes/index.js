const server = require("./server.js");

const port = 4006;

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
