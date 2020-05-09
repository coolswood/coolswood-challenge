import React, {Component} from "react";
import { Switch, Route } from "react-router-dom";

import List from 'pages/List'
import VendingApparat from 'pages/List/InnerList'

export default () => (
    <Switch>
        <Route exact path="/">
            <List/>
        </Route>
        <Route exact path="/:name">
            <VendingApparat/>
        </Route>
    </Switch>
)