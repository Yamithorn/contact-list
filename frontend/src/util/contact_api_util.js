import axios from "axios";

export const getContact = (id) => {
    return axios.get(`/api/contacts/${id}`);
};

export const getAllContacts = () => {
    return axios.get("api/contacts");
};

export const addContact = (contactData) => {
    return axios.post("api/contacts/add", contactData);
};

export const editContact = (id) => {
    return axios.put(`api/contacts/edit/${id}`);
};

export const deleteContact = (id) => {
    return axios.delete(`api/contacts/delete/${id}`);
};

