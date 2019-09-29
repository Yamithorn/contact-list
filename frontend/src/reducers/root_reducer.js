import { combineReducers } from "redux";
import contactsReducer from "./contacts_reducer";
import errorsReducer from "./errors_reducer";

const rootReducer = combineReducers({

    contacts: contactsReducer,
    errors: errorsReducer

});

export default rootReducer;