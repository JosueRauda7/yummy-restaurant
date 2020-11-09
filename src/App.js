import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import LandingPage from "./containers/LandingPage";
import Login from "./containers/Login";
import Logout from "./containers/Logout";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLogged(true);
    }
  }, []);
  return (
    <BrowserRouter>
      <Switch>
        <Layout isLog={isLogged}>
          <Route
            exact
            path='/logout'
            render={() => <Logout changeLogged={setIsLogged} />}
          />
          <Route
            exact
            path='/login'
            render={() => <Login isLog={isLogged} changeLogged={setIsLogged} />}
          />
          <Route
            exact
            path='/'
            render={() => <LandingPage isLog={isLogged} />}
          />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
