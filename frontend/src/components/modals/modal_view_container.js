import { connect } from "react-redux";
import { fetchContact } from "../../actions/contact_actions";
import ModalForm from "./modal_form";

const mapStateToProps = (state) => {

    return {

        contact: state.contact,
        errors: state.errors.contacts

    };
};

const mapDispatchToProps = (dispatch) => {

    return {

        fetchContact: (id) => dispatch(fetchContact(id))

    };

};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalForm);