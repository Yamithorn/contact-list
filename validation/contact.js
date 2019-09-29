const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateContactInput(data) {

    let errors = {};

    data.firstName = validText(data.firstName) ? data.firstName : "";
    data.lastName = validText(data.lastName) ? data.lastName : "";
    data.phoneNumber = validText(data.phoneNumber) ? data.phoneNumber : "";

    if (Validator.isEmpty(data.firstName)) {
        errors.firstName = "First name is required";
    }

    if (Validator.isEmpty(data.lastName)) {
        errors.lastName = "Last name is required";
    }

    if (Validator.isEmpty(data.phoneNumber)) {
        errors.phoneNumber = "Phone number is required";
    }

    if (!Validator.isMobilePhone(data.phoneNumber, "any", { strictMode: true })) {
        errors.phoneNumber = "Phone number is invalid";
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
};