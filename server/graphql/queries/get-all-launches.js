const { LaunchType } = require("../types/launch-type");
const { GraphQLList } = require("graphql");
const axios = require("axios");

module.exports.getAllLaunches = {
  type: GraphQLList(LaunchType),
  resolve: async (parent, args) => {
    const { data } = await axios.get("https://api.spacexdata.com/v3/launches");
    return data;
  },
};
