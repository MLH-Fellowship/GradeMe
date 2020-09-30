import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as firebase from "firebase/app";
import { initialize } from "./firebase";
import { signInWithGoogle } from "./firebase/auth";

import Home from "./components/Home";
import Calculator from "./components/Calculator";

const App = () => {
  const [user, setUser] = useState<firebase.User | null>(null);
  const routeProps: any = { setUser, user };
  let initialized = useRef(false);

  useEffect(() => {
    initialized.current = true;
    initialize();
  }, []);

  if (initialized.current) {
    signInWithGoogle(false);
  }

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" render={(props: any) => <Home {...routeProps} />} />
        <Route path="/calculator" render={(props: any) => <Calculator {...routeProps} />} />
      </Switch>
    </Router>
  );
};

export default App;
