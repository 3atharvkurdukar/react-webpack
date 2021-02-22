import React, { Component } from "react";
import Pizza from "./containers/Pizza";
import Users from "./containers/Users";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/">Pizza</Link>
          <Link to="/users">Users</Link>
        </div>
        <div>
          <Route path="/" exact component={Pizza} />
          <Route path="/users" exact component={Users} />
        </div>
      </div>
    );
  }
}

export default App;
