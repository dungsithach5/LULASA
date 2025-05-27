const { Contact } = require('../models');
exports.getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.findAll();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching contacts', error });
    }
};

exports.getContactById = async (req, res) => {
    try {
        const contact = await Contact.findByPk(req.params.id);
        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.status(200).json(contact);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching contact', error });
    }
};

exports.createContact = async (req, res) => {
    try {
        const newContact = await Contact.create(req.body);
        res.status(201).json(newContact);
    } catch (error) {
        res.status(400).json({ message: 'Error creating contact', error });
    }
};

exports.updateContact = async (req, res) => {
    try {
        const [updatedRows] = await Contact.update(req.body, {
            where: { id: req.params.id }
        });

        if (updatedRows === 0) {
            return res.status(404).json({ message: 'Contact not found' });
        }

        const updatedContact = await Contact.findByPk(req.params.id);
        res.status(200).json(updatedContact);
    } catch (error) {
        res.status(400).json({ message: 'Error updating contact', error });
    }
};

exports.deleteContact = async (req, res) => {
    try {
        const deletedRows = await Contact.destroy({
            where: { id: req.params.id }
        });

        if (deletedRows === 0) {
            return res.status(404).json({ message: 'Contact not found' });
        }

        res.status(200).json({ message: 'Contact deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting contact', error });
    }
};