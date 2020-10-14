import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <h1>Amazon CLONE</h1>
        <Switch>
          <Route path="/checkout">
            <h1>checkout</h1>
          </Route>
          <Route path="/login">
            <h1>login</h1>
          </Route>
          <Route patch="/">
            <h1>Homme page!</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
