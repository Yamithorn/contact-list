import React, { Component } from "react";
import "./modal.css";

export default class modalAddForm extends Component {

    constructor(props) {
        super(props);

        this.state = {

            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: ""

        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.removeModal = this.removeModal.bind(this);
    }

    handleSubmit(e) {

        e.preventDefault();

        this.props.createContact(this.state);
        this.removeModal();

        this.setState({
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: ""
        });
    }

    update(field) {

        return (e) => this.setState({
            [field]: e.currentTarget.value
        });

    }

    removeModal() {

        const modal = document.getElementsByClassName("modal")[0];
        modal.style.display = "none";

    }

    outsideClick() {

        window.addEventListener("click", click);
        const modal = document.getElementsByClassName("modal")[0];

        function click(e) {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        }
    }

    render() {
        return (

            <div className="modal" onClick={this.outsideClick}>

                <div className="add-modal">

                    <div className="contact-form-container">

                        <form className="contact-form" onSubmit={this.handleSubmit}>

                            <div className="top-of-contact-form">

                                <div className="cancel-button" onClick={this.removeModal}>Cancel</div>
                                <input className="save-button" type="submit" value="Save" />

                            </div>

                            <div className="first-half">
                                <div className="profile-picture">
                                    <div className="add-photo">Add Photo</div>
                                    {/* <input className="profile-picture-input" type="file" /> */}
                                </div>

                                <div className="inner-first-half">

                                    <div className="text-input-a">

                                        <input type="text"
                                            value={this.state.firstName}
                                            onChange={this.update("firstName")}
                                            placeholder="First Name"
                                        />

                                    </div>

                                    <div className="text-input-a">

                                        <input type="text"
                                            value={this.state.lastName}
                                            onChange={this.update("lastName")}
                                            placeholder="Last Name"
                                        />

                                    </div>

                                </div>

                            </div>

                            <div className="second-half">

                                <div className="text-input-b">

                                    <div className="text-header">phone:</div>

                                    <input type="text"
                                        value={this.state.phoneNumber}
                                        onChange={this.update("phoneNumber")}
                                        placeholder="+1 917 000 0000"
                                    />

                                </div>

                                <div className="text-input-b">

                                    <div className="text-header">e-mail:</div>

                                    <input type="text"
                                        value={this.state.email}
                                        onChange={this.update("email")}
                                        placeholder="example@gmail.com"
                                    />

                                </div>

                            </div>

                        </form>

                    </div>

                </div>

            </div>
        )
    }
}
