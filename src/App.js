import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import LandingPage from "./containers/LandingPage";
import Login from "./containers/Login";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route exact path='/login' component={Login} />
          <Route exact path='/' component={LandingPage} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
