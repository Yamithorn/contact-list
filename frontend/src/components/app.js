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
        </Switch>
    </div>
};

export default App;