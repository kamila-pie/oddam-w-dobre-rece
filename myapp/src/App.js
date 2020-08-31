import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./components/Home";
import HomeLogin from "./components/HomeLogin";
import HomeRegister from "./components/HomeRegister";


const App = () => {
  return (
      <BrowserRouter>
        <>
            <Switch>
              <Route exact path={'/'} component={Home}/>
              <Route path={'/logowanie'} component={HomeLogin}/>
              <Route path={'/rejestracja'} component={HomeRegister}/>
            </Switch>
        </>
      </BrowserRouter>
  );
}

export default App;
