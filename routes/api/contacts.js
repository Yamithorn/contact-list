const express = require("express");
const router = express.Router();
const Contact = require("../../models/Contact");

// Validations
const validateContactInput = require("../../validation/contact");

router.get("/test", (req, res) => res.json({ msg: "This is the contacts route" }));

// View all contacts
router.get("/", async (req, res) => {

    try {

        const contacts = await Contact
            .find()
            .sort({ firstName: 1 });

        return res
            .status(200)
            .json(contacts);

    } catch (error) {

        return res
            .status(400)
            .json(contact);

    }

});

// View single contact
router.get("/:id", async (req, res) => {

    const id = req.params.id;

    try {

        const contact = await Contact.findOne({ _id: id });

        return res
            .status(200)
            .json(contact);

    } catch (error) {

        return res
            .status(400)
            .json(contact);

    }

});

// Add a new contact
router.post("/add", async (req, res) => {

    const { errors, isValid } = validateContactInput(req.body);

    if (!isValid) {

        return res
            .status(400)
            .json(errors);

    }

    try {

        const contactPhoneNumber = await Contact.findOne({ phoneNumber: req.body.phoneNumber });

        if (contactPhoneNumber) {

            return res
                .status(400)
                .json({ phoneNumber: "Phone number already exists" });

        }

    } catch (error) {

        return res
            .status(400)
            .json(error);
    }

    const newContact = new Contact({

        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber

    });

    try {

        const contact = await newContact.save();

        return res
            .status(200)
            .json(contact);


    } catch (error) {

        return res
            .status(400)
            .json(error);

    }

});

// Update a previously created contact
router.put("/update/:id", async (req, res) => {

    const { errors, isValid } = validateContactInput(req.body);

    if (!isValid) {

        return res
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

        const contact = await Contact.findOneAndUpdate({ _id: id }, updatedContact, { new: true });

        return res
            .status(200)
            .json(contact);

    } catch (error) {

        return res
            .status(400)
            .json(error);

    }

});

// Delete a contact
router.delete("/remove/:id", async (req, res) => {

    const id = req.params.id;

    try {

        const contact = await Contact.findOneAndDelete({ _id: id });

        return res
            .status(200)
            .json(contact);

    } catch (error) {

        return res
            .status(400)
            .json(error);

    }

});

module.exports = router;