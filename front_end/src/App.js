import React, { Component } from "react";
import "./App.css";
import "./components/ChatBoard/Chatboard.css";
import routes from "./routes.js";
import ApolloClient from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";
import gql from "graphql-tag";

// Context stuff
import { UserProvider, UserContext } from "./Contexts/UserProvider";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

//SAMPLE ON HOW APOLLO/GRAPHQL WORKS FROM FRONT END > BACK

//GRAPHQL - STEP 1 DEFINE A QUERY (Or Mutation)
const GET_USERS = gql`
  {
    allUsers {
      id
      first_name
    }
  }
`;

// GRAPHQL - STEP 2 Compose a Query Component displaying return JSX with data
const Users = ({ onUserSelected }) => (
  // GRAPHQL - pop in your QUERY
  <Query query={GET_USERS}>
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;

      return (
        <select name="user" onChange={onUserSelected}>
          {data.allUsers.map(user => (
            <option key={user.id} value={user.first_name}>
              {user.first_name}
            </option>
          ))}
        </select>
      );
    }}
  </Query>
);

class App extends Component {
  state = {
    selectedUser: null
  };
  onUserSelected = ({ target }) => {
    this.setState(() => ({ selectedUser: target.value }));
  };
  render() {
    return (
      <UserProvider>
        <ApolloProvider client={client}>
          <div className="App">
            <h1>Future Slack Clone</h1>
            {/* GRAPHQL - insert the query componet where you want the jsx rendered on your page */}
            <Users onUserSelected={this.onUserSelected} />
            {routes}
          </div>
        </ApolloProvider>
      </UserProvider>
    );
  }
}

export default App;
