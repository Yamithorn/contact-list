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

            for (let i = 0; i < action.contacts.data.length; i++) {
                const contact = action.contacts.data[i];
                newState[contact._id] = contact;
            }

            return newState;

        case RECEIVE_CONTACT:

            newState[action.contact.data._id] = action.contact.data;

            return newState;

        case DELETE_CONTACT:

            delete newState[action.id.data];
            return newState;

        default:

            return oldState;
    }

};

export default contactsReducer;