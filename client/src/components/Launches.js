import React, { Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import LaunchItem from "./LaunchItem";
import MissionKey from "./MissionKey";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

const renderLaunchItems = ({ loading, error, data }) => {
  if (loading) return <h4>Loading</h4>;
  if (error) console.log(error);

  return (
    <Fragment>
      {data.launches.map((launch) => (
        <LaunchItem key={launch.flight_number} launch={launch} />
      ))}
    </Fragment>
  );
};

const Launches = () => (
  <Fragment>
    <h1 className="display-4 my-3">Launches</h1>
    <MissionKey />
    <Query query={LAUNCHES_QUERY}>{renderLaunchItems}</Query>
  </Fragment>
);

export default Launches;
