import React from "react";
import { Route } from 'react-router-dom';
import { Switch } from "react-router-dom";

import FrontPage from "./main/front_page";

const App = () => {
    // debugger;
    return <div>
        <Switch>
            <Route exact path="/" component={FrontPage}></Route>
            {/* <Route exact path="/add" component={}></Route>
            <Route exact path="/edit" component={}></Route>
            <Route exact path="/remove" component={}></Route> */}
        </Switch>
    </div>
};

export default App;