const express = require("express");
const router = express.Router();
const Contact = require("../../models/Contact");

// Validations
const validateContactInput = require("../../validation/contact");

router.get("/test", (req, res) => res.json({ msg: "This is the contacts route" }));

// View all contacts
router.get("/", async (req, res) => {

    try {
        // Find all the contacts available and sort them by their first names
        const contacts = await Contact
            .find()
            .sort({ firstName: 1 });

        if (contacts) {

            res
                .status(200)
                .json(contacts);

        } else {

            res.status(404);

        }

    } catch (error) {

        res
            .status(400)
            .json(contact);

    }

});

// View single contact
router.get("/:id", async (req, res) => {

    const id = req.params.id;

    try {
        // Find a single contact using the params id available in the request
        const contact = await Contact.findOne({ _id: id });

        if (contact) {

            res
                .status(200)
                .json(contact);

        } else {

            res.status(404);

        }

    } catch (error) {

        res
            .status(400)
            .json(contact);

    }

});

// Add a new contact
router.post("/add", async (req, res) => {

    const { errors, isValid } = validateContactInput(req.body);

    // Validate whether the contact form has all the required and correct information
    if (!isValid) {

        res
            .status(400)
            .json(errors);

    }

    try {
        // Once the contact is pushed in the request, check to see if a contact exist by that phone number already
        const contactPhoneNumber = await Contact.findOne({ phoneNumber: req.body.phoneNumber });

        if (contactPhoneNumber) {

            res
                .status(409)
                .json({ phoneNumber: "Phone number already exists" });

        } else {

            res.status(204);

        }

    } catch (error) {

        res
            .status(400)
            .json(error);
    }

    // The contact does not exist within our database so we go ahead and create a new one
    const newContact = new Contact({

        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber

    });

    try {

        const contact = await newContact.save();

        res
            .status(201)
            .json(contact);


    } catch (error) {

        res
            .status(400)
            .json(error);

    }

});

// Update a previously created contact
router.put("/edit/:id", async (req, res) => {

    const { errors, isValid } = validateContactInput(req.body);

    // Validate whether the contact form has all the required and correct information when it is being edited
    if (!isValid) {

        res
            .status(400)
            .json(errors);

    }

    const id = req.params.id;

    const updatedContact = new Contact({

        _id: id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber

    });

    try {
        // Key of new was added so the new contact was returned after being updated
        const contact = await Contact.findOneAndUpdate({ _id: id }, updatedContact, { new: true });

        if (contact) {

            res
                .status(202)
                .json(contact);

        } else {

            res.status(404);

        }

    } catch (error) {

        res
            .status(400)
            .json(error);

    }

});

// Delete a contact
router.delete("/remove/:id", async (req, res) => {

    const id = req.params.id;

    try {
        // Find a single contact using the params id available in the request for it to then be deleted
        const contact = await Contact.findOneAndDelete({ _id: id });

        if (contact) {

            res
                .status(200)
                .json(contact);

        } else {

            res.status(404);

        }

    } catch (error) {

        res
            .status(400)
            .json(error);

    }

});

module.exports = router;