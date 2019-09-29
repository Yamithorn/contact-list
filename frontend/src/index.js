import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";

document.addEventListener("DOMContentLoaded", () => {

    let store = configureStore({});

    // Render our root component and pass in the store as a prop
    const root = document.getElementById("root");

    // debugger;

    ReactDOM.render(<Root store={store} />, root);
});