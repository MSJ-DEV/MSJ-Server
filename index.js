const app = require('./server/index')
const port = app.get('port')
console.log(port)
app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  });
