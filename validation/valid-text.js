module.exports = function validText(str) {
    return typeof str === "string" && str.length > 0;
};