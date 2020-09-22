const app = require("express")();
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");

mongoose
  .connect(`mongodb://localhost:27017/playlist`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((_) => console.log("connected to DB"))
  .catch((err) => console.log({ err }));

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => console.log("Server listening on port 4000"));
