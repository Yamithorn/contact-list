import { RECEIVE_CONTACT_ERRORS } from "../actions/contact_actions";

const ContactErrorsReducer = (oldState = [], action) => {

    Object.freeze(oldState);

    let newState = Object.assign([], action.errors);

    switch (action.type) {

        case RECEIVE_CONTACT_ERRORS:
            return newState;

        default:
            return oldState;
    }

};

export default ContactErrorsReducer;