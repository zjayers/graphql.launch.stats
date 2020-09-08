const { RocketType } = require("../types/rocket-type");
const { GraphQLInt } = require("graphql");
const axios = require("axios");

module.exports.getSingleRocket = {
  type: RocketType,
  args: {
    rocket_id: { type: GraphQLInt },
  },
  resolve: async (parent, args) => {
    const { rocket_id } = args;
    const { data } = await axios.get(
      `https://api.spacexdata.com/v3/rockets/${rocket_id}`
    );
    return data;
  },
};
