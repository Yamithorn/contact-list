import React, { Component } from "react";
import ContactBox from "./contact_box";
import "./main_page.css";

class FrontPage extends Component {

    constructor(props) {

        super(props);

        this.state = {
            contacts: []
        };

        this.addModal = this.addModal.bind(this);
        this.makeContacts = this.makeContacts.bind(this);

    }

    componentDidMount() {

        this.props.fetchAllContacts();

    }

    static getDerivedStateFromProps(nextProps, prevState) {

        if (nextProps.contacts !== prevState.contacts) {

            return ({ contacts: nextProps.contacts });

        }

    }

    addModal() {

        const modal = document.getElementsByClassName("modal")[0];
        modal.style.display = "flex";

    }

    makeContacts() {

        const contacts = this.state.contacts.map((contact) => {

            return (
                <ContactBox
                    key={contact._id}
                    contact={contact} />
            );

        });

        return contacts;

    }

    render() {

        if (this.state.contacts.length === 0) {

            return (<div className="loading">Loading...</div>)

        } else {

            return (
                <div className="front-page">
                    <div className="header">
                        <div className="contacts-header">My Contacts</div>
                        <div className="add-contacts-symbol" onClick={this.addModal}>&#43;</div>
                    </div>
                    <div className="unordered-contacts-list-container">
                        <ul className="unordered-contacts-list">
                            {this.makeContacts()}
                        </ul>
                    </div>
                </div>
            )
        }
    }
}

export default FrontPage;