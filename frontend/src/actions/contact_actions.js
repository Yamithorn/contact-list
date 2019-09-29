import * as APIUtil from "../util/contact_api_util";

export const RECEIVE_ALL_CONTACTS = "RECEIVE_ALL_CONTACTS";
export const RECEIVE_CONTACT = "RECEIVE_CONTACT";
export const DELETE_CONTACT = "DELETE_CONTACT";
export const RECEIVE_CONTACT_ERRORS = "RECEIVE_CONTACT_ERRORS";

// Actions
export const receiveAllContacts = (contacts) => {

    return {

        type: RECEIVE_ALL_CONTACTS,
        contacts: contacts

    };

};

export const receiveContact = (contact) => {

    return {

        type: RECEIVE_CONTACT,
        contact: contact

    };

};

export const removeContact = (id) => {

    return {

        type: DELETE_CONTACT,
        id: id

    };

};

export const receiveContactErrors = (errors) => {

    return {

        type: RECEIVE_CONTACT_ERRORS,
        errors: errors

    };

};

// Action Thunk Creators 
export const fetchAllContacts = () => async (dispatch) => {

    try {

        const contacts = await APIUtil.getAllContacts();
        dispatch(receiveAllContacts(contacts));

    } catch (errors) {

        dispatch(receiveContactErrors(errors.response.data));

    }

};

export const fetchContact = (id) => async (dispatch) => {

    try {

        const contact = await APIUtil.getContact(id);
        dispatch(receiveAllContacts(contact));

    } catch (errors) {

        dispatch(receiveContactErrors(errors.response.data));

    }

};

export const createContact = (contactData) => async (dispatch) => {

    try {

        const contact = await APIUtil.addContact(contactData);
        dispatch(receiveContact(contact));

    } catch (errors) {

        dispatch(receiveContactErrors(errors.response.data));

    }

};

export const updateContact = (id) => async (dispatch) => {

    try {

        const contact = await APIUtil.editContact(id);
        dispatch(receiveContact(contact));

    } catch (errors) {

        dispatch(receiveContactErrors(errors.response.data));

    }

};

export const deleteContact = (id) => async (dispatch) => {

    try {

        const deletedContactId = await APIUtil.deleteContact(id);
        dispatch(removeContact(deletedContactId));

    } catch (errors) {

        dispatch(receiveContactErrors(errors.response.data));

    }

};