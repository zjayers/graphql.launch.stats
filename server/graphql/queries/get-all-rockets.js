const { RocketType } = require("../types/rocket-type");
const { GraphQLList } = require("graphql");
const axios = require("axios");

module.exports.getAllRockets = {
  type: GraphQLList(RocketType),
  resolve: async (parent, args) => {
    const { data } = await axios.get("https://api.spacexdata.com/v3/rockets");
    return data;
  },
};
