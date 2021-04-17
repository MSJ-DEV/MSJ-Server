


const app = require("./server/index");
const port = app.get("port");



app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
