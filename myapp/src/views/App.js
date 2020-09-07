import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from "./Home";
import Form from "./Form";
import {Logout} from "./Logout";
import Login from "./Login";
import Register from "./Register";
import {AuthProvider} from "../config/AuthContext";
import PrivateRoute from "../config/PrivateRoute";


const App = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path={'/'} component={Home}/>
                    <Route path={'/logowanie'} component={Login}/>
                    <Route path={'/rejestracja'} component={Register}/>
                    <Route path={'/wylogowano'} component={Logout}/>
                    <PrivateRoute path="/oddaj-rzeczy" component={Form}/>
                </Switch>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
