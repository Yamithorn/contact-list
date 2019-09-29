import { combineReducers } from "redux";
import contactErrorsReducer from "./contact_errors_reducer";

const errorsReducer = combineReducers({

    contacts: contactErrorsReducer

});

export default errorsReducer;