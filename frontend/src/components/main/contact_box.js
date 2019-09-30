import React, { Component } from "react";

export default class ContactBox extends Component {

    render() {

        return (
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

        )
    }
}
