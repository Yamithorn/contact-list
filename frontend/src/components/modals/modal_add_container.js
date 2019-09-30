import { connect } from "react-redux";
import { createContact } from "../../actions/contact_actions";
import ModalAddForm from "./modal_add_form";

const mapStateToProps = (state) => {

    return {

        errors: state.errors.contacts

    };
};

const mapDispatchToProps = (dispatch) => {

    return {

        createContact: (contactData) => dispatch(createContact(contactData))

    };

};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalAddForm);