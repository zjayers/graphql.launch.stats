const { LaunchType } = require("../types/launch-type");
const { GraphQLInt } = require("graphql");
const axios = require("axios");

module.exports.getSingleLaunch = {
  type: LaunchType,
  args: {
    flight_number: { type: GraphQLInt },
  },
  resolve: async (parent, args) => {
    const { flight_number } = args;
    const { data } = await axios.get(
      `https://api.spacexdata.com/v3/launches/${flight_number}`
    );
    return data;
  },
};
