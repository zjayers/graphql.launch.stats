const { GraphQLObjectType, GraphQLSchema } = require("graphql");
const { getAllRockets } = require("./queries/get-all-rockets");
const { getSingleRocket } = require("./queries/get-single-rocket");
const { getSingleLaunch } = require("./queries/get-single-launch");
const { getAllLaunches } = require("./queries/get-all-launches");

// -------- Root Query -------- //
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    launches: getAllLaunches,
    launch: getSingleLaunch,
    rockets: getAllRockets,
    rocket: getSingleRocket,
  },
});

// Export the Schema Module
module.exports = new GraphQLSchema({
  query: RootQuery,
});
