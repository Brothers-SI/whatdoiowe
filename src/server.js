if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

const app = require('./app')
const port = process.env.SERVER_PORT;

app.listen(port, () => {
  console.log(`Express server is listening on ${port}`);
});
