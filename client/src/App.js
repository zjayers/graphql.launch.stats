import "./App.css";
import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from "./logo.png";
import Launches from "./components/Launches";
import LaunchDetail from "./components/LaunchDetail";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
});

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <div className="container">
        <img className="spacex-logo" src={logo} alt="SpaceX" />
        <Route exact path="/" component={Launches} />
        <Route exact path="/launch/:flight_number" component={LaunchDetail} />
      </div>
    </Router>
  </ApolloProvider>
);

export default App;
