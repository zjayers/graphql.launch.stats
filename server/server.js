const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./graphql/schema");
const cors = require("cors");

// Init the Express Server
const app = express();
const PORT = process.env.PORT || 5000;

// Initiate Cors For The Server
app.use(cors());

// Setup GraphQL Route on Express Server
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

// Listen on the specified port for HTTP traffic
app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`);
});
