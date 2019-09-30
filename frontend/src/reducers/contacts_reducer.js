import {
    RECEIVE_ALL_CONTACTS,
    RECEIVE_CONTACT,
    DELETE_CONTACT
} from "../actions/contact_actions";

const contactsReducer = (oldState = {}, action) => {

    Object.freeze(oldState);

    let newState = Object.assign({}, oldState);

    switch (action.type) {

        case RECEIVE_ALL_CONTACTS:

            newState = Object.assign({}, oldState, action.contacts.data);
            return newState;

        case RECEIVE_CONTACT:

            const newIndex = Math.max(...Object.keys(newState)) + 1;
            newState[newIndex] = action.contact.data;

            return newState;

        case DELETE_CONTACT:

            delete newState[action.id.data];
            return newState;

        default:

            return oldState;
    }

};

export default contactsReducer;