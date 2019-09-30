import React from "react";
import { Route } from 'react-router-dom';
import { Switch } from "react-router-dom";

import FrontPageContainer from "./main/front_page_container";
import ModalAddContainer from "./modals/modal_add_container";

const App = () => {

    return <div className="whole-page">
        <ModalAddContainer />
        <Switch>
            <Route exact path="/" component={FrontPageContainer}></Route>
            {/* <Route exact path="/add" component={}></Route>
            <Route exact path="/edit" component={}></Route>
            <Route exact path="/remove" component={}></Route> */}
        </Switch>
    </div>
};

export default App;