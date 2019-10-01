import React, { Component } from "react";
import { throws } from "assert";

export default class ContactBox extends Component {

    constructor(props) {
        super(props);

        this.state = this.props.contact;

        this.modalView = this.modalView.bind(this);
        this.modalEdit = this.modalEdit.bind(this);
        this.outsideClick = this.outsideClick.bind(this);
        this.editContact = this.editContact.bind(this);
        this.deleteContact = this.deleteContact.bind(this);
    }

    componentDidMount() {

        const id = this.props.id;
        const section = document.getElementsByClassName("contact-section")[id];

        function mouseEnter() {

            const element = document.getElementById(id);
            element.style.display = "flex";

        }

        function mouseLeave() {

            const element = document.getElementById(id);
            element.style.display = "none";

        }

        section.addEventListener("mouseover", mouseEnter);
        section.addEventListener("mouseleave", mouseLeave);
    }

    update(field) {

        return (e) => this.setState({
            [field]: e.currentTarget.value
        });

    }

    outsideClick() {

        window.addEventListener("click", click);
        const modal = document.getElementById("view");

        function click(e) {

            if (e.target === modal) {

                const parent = modal.parentNode;
                if (parent) {
                    parent.removeChild(modal);
                }
            }
        }
    }

    removeModal() {

        const modal = document.getElementsByClassName("modal")[0];
        modal.style.display = "none";

    }

    modalView() {

        let section;
        let that;

        function click(e) {

            if ((e.target === section) && (document.getElementsByClassName("modal").length < 2)) {

                const modalViewContainer = document.createElement("div");
                modalViewContainer.id = "view";
                modalViewContainer.classList.add("modal");
                modalViewContainer.onclick = that.outsideClick;
                modalViewContainer.style.display = "flex";

                const modalView = document.createElement("div");
                modalView.classList.add("view-modal");
                modalViewContainer.appendChild(modalView);

                const contactContainer = document.createElement("div");
                contactContainer.classList.add("contact-container");
                modalView.appendChild(contactContainer);

                const name = document.createElement("div");
                name.classList.add("name");
                name.innerText = "Name: " + that.props.contact.firstName + " " + that.props.contact.lastName;
                contactContainer.append(name);

                const phoneNumber = document.createElement("div");
                phoneNumber.classList.add("phone-number");
                phoneNumber.innerText = "Phone Number: " + that.props.contact.phoneNumber;
                contactContainer.append(phoneNumber);

                const email = document.createElement("div");
                email.classList.add("email");
                email.innerText = "Email: " + that.props.contact.email;
                contactContainer.append(email);

                document.querySelector(".whole-page").appendChild(modalViewContainer);
            }
        }

        if (document.getElementsByClassName("modal").length === 1) {

            window.addEventListener("click", click);
            const id = this.props.id;
            section = document.getElementsByClassName("contact-section")[id];
            that = this;
        }
    }

    modalEdit() {

        let button;
        let that;

        function click(e) {

            if ((e.target === button) && (document.getElementsByClassName("modal").length < 2)) {

                const modal = document.getElementsByClassName("modal")[0];
                modal.style.display = "flex";

                const firstName = document.getElementsByClassName("text-input-a")[0].children[0];
                firstName.value = that.state.firstName;
                firstName.onChange = that.update("firstName");

                const lastName = document.getElementsByClassName("text-input-a")[1].children[0];
                lastName.value = that.state.lastName;
                lastName.onChange = that.update("lastName");

                const phoneNumber = document.getElementsByClassName("text-input-b")[0].children[1];
                phoneNumber.value = that.state.phoneNumber;
                phoneNumber.onChange = that.update("phoneNumber");

                const email = document.getElementsByClassName("text-input-b")[1].children[1];
                email.value = that.state.email;
                email.onChange = that.update("email");
            }
        }

        if (document.getElementsByClassName("modal").length === 1) {

            window.addEventListener("click", click);
            const id = this.props.id;
            button = document.getElementsByClassName("edit-button")[id];
            that = this;

        }
    }

    editContact() {

        window.addEventListener("click", click);
        const button = document.getElementsByClassName("edit-button")[0];
        const update = this.props.edit;
        const id = this.props.contact._id;

        function click(e) {
            if (e.target.className === button.className) {
                update(id);
            }
        }

    }

    deleteContact() {

        window.addEventListener("click", click);
        const button = document.getElementsByClassName("delete-button")[0];
        const remove = this.props.delete;
        const id = this.props.contact._id;

        function click(e) {
            if (e.target.className === button.className) {
                remove(id);
            }
        }

    }

    render() {

        return (

            <div className="contact-section" onClick={this.modalView}>

                <div className="contact">

                    <div className="contact-name">

                        {this.props.contact.firstName}
                        &nbsp;
                        {this.props.contact.lastName}

                    </div>

                    <div className="contact-email">

                        {this.props.contact.email}

                    </div>

                </div>

                <div id={this.props.id} className="feature-buttons">

                    <div id={this.props.id} className="edit-button" onClick={this.modalEdit}>
                        &#9998;
                    </div>

                    <div className="delete-button" onClick={this.deleteContact}>
                        &times;
                    </div>

                </div>

            </div>

        )
    }
}