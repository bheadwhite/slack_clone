import React from "react";
// import { Route } from "react-router-dom";
import { Route, Router } from "react-router-dom";
import ChatBoard from "./components/ChatBoard/ChatBoard.js";
import CreateUser from "./components/CreateUser/CreateUser.js";
import Admin from "./components/Admin/Admin.js";
import Login from "./components/Login/Login.js";
import Callback from "./Callback/Callback";
import Auth from "./Auth/Auth";
import history from "./history";
import UserProvider from "./Contexts/UserProvider.js";
import MessageProvider from "./Contexts/MessageProvider";

const auth = new Auth();


const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
};

export const makeMainRoutes = () => {
  return (
    <Router history={history}>
      <div>
        <MessageProvider>
          <UserProvider>
            <Route exact path="/" render={props => <Login auth={auth} {...props} />} />
            <Route path="/chatboard" render={props => <ChatBoard auth={auth} {...props} />} />
            <Route path="/callback" render={props => { handleAuthentication(props);
                return <Callback {...props} />; }} />
          </UserProvider>
        </MessageProvider>
      </div>
    </Router>
  );
};

// export default (
//   <Router history={history}>
//   <div>
//     <Route exact path="/" render={props => <Login auth={auth} {...props} />} />
//     <Route exact path="/chatboard" render={props => <ChatBoard auth={auth} {...props} />} />
//     <Route exact path="/create-account" render={props => <CreateUser auth={auth} {...props} />} />
//     <Route exact path="/admin" render={props => <Admin auth={auth} {...props} />} />
//   </div>
//   </Router>
// )
