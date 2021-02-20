import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import {Rules} from "./components/rules";
import {Login} from "./components/login";
import {UserSettings} from "./components/userSettings";
import {MainGamePage} from "./components/mainGamePage";
import React from "react";
import {store, persistor} from "./store"
import {Provider} from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'

export const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Router>
                    <Switch>
                        <Route path="/" component={Rules} exact={true}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/user_settings" component={UserSettings}/>
                        <Route path="/main_game_page" component={MainGamePage}/>
                        <Redirect to="/"/>
                    </Switch>
                </Router>
            </PersistGate>
        </Provider>
    );
}