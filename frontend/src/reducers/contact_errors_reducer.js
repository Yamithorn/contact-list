import { RECEIVE_CONTACT_ERRORS } from "../actions/contact_actions";

const ContactErrorsReducer = (oldState = [], action) => {

    Object.freeze(oldState);

    switch (action.type) {

        case RECEIVE_CONTACT_ERRORS:
            return action.errors;

        default:
            return oldState;
    }

};

export default ContactErrorsReducer;