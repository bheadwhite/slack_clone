import React, { Component } from "react";
import Axios from "axios";

//first we will make a new context
const MyContext = React.createContext();

//then create a provider component
class MessageProvider extends Component {
  // The provider is where you will keep your state
  // and methods that your component needs access to
  state = {
    message: [],
    age: 100,
    cool: true,
    growAyearOlder: () => this.setState({ age: this.state.age + 1 })
  };

  render() {
    return (
      <MyContext.Provider
        // when setting a value, it will usually consist
        // of an object that contains state from the provider
        // and any methods you want to send
        value={{ state: this.state }}>
        {
          /*
          the props.children below is what makes all
          the children of the App component able to access stuff
         */
          this.props.children
        }
      </MyContext.Provider>
    );
  }
}

//
//
//
//
//
//
//

// Family component
const Family = props => (
  <div>
    <Person />
  </div>
);

//
//
//
//
//
//
//

// Person component
class Person extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          // this is just a render function
          // React.Fragment renders a blank tag!
          // I used it instead of a div
          <div>
            <p>age {context.state.age}</p>
            <button onClick={context.state.growAyearOlder}>add a year</button>
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}

//
//
//
//
//
//
//

// Main App component
class App extends Component {
  render() {
    return (
      // You wrap the main app div with the my MyProvder
      // which will allow any child of that component
      // to access the context using a <MyContext.Consumer>
      // Its what allows you to CONSUME the shtuff you need from the context
      // pssst.... its in the Person component
      <MyProvider>
        <div>
          <p>Context</p>
          <Family />
        </div>
      </MyProvider>
    );
  }
}

export default App;
