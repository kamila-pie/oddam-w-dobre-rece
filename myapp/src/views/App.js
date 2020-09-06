import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./Home";
import Form from "./Form";
import HomeLogin from "../components/HomeMain/HomeLogin";
import HomeRegister from "../components/HomeMain/HomeRegister";
import {Logout} from "./Logout";
import Login from "./Login";


const App = () => {
  return (
      <BrowserRouter>
            <Switch>
              <Route exact path={'/'} component={Home}/>
              <Route path={'/logowanie'} component={Login}/>
              <Route path="/oddaj-rzeczy" component={Form} />
              <Route path={'/rejestracja'} component={HomeRegister}/>
              <Route path="/wylogowano" component={Logout}/>
            </Switch>
      </BrowserRouter>
  );
}

export default App;
