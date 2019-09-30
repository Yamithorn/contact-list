import { connect } from "react-redux";
import { fetchAllContacts } from "../../actions/contact_actions";
import FrontPage from "./front_page";

const mapStateToProps = (state) => {

    const contacts = Object.keys(state.contacts).map((id) => state.contacts[id]);

    return {

        contacts: contacts

    };
};

const mapDispatchToProps = (dispatch) => {

    return {

        fetchAllContacts: () => dispatch(fetchAllContacts())

    };

};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FrontPage);