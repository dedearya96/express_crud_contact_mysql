import { deleteContactServices, fetchAllContact, fetchContactById, storeContact, updateContactService, searchContactServices } from "../services/ContactService.js";
import { validationResult} from 'express-validator';

export const searchContact = async (req, res) => {
    try {
        const data = await searchContactServices(req.params.key);
        return res.status(200).json(data);
    } catch (err) {
        return res.status(500).json({
            message: 'Intenal Server Error' + err.message
        });
    }
}

export const getAllContact = async (req, res) => {

    try {
        await fetchAllContact().then(function (result) {
            return res.status(200).json(result);
        }).catch(function (err) {
            return res.status(400).json({
                'success': false,
                'message': 'Failed fetch data'
            });
        });

    } catch (err) {
        return res.status(500).json({
            message: 'Intenal Server Error' + err.message
        });
    }
}

export const getContactById = async (req, res) => {
    try {
        const data = await fetchContactById(req.params.id);
        if (data) return res.status(200).json(data);
        return res.status(400).json({ message: 'data not found' });
    } catch (err) {
        return res.status(500).json({
            message: 'Intenal Server Error' + err.message
        });
    }
}

export const createContact = async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(422).json({ error: error.array() });
    }
    try {
        await storeContact(req.body).then(function (result) {
            return res.status(201).json(result);
        }).catch(function (err) {
            return res.status(400).json({
                'status': false,
                'message': err.message
            });
        });
    } catch (err) {
        return res.status(500).json({
            message: 'Intenal Server Error' + err.message
        });
    }
}

export const updateContact = async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(422).json({ error: error.array() });
    }
    try {
        const data = await fetchContactById(req.params.id);
        if (!data) return res.status(400).json('Data not found');
        await updateContactService(req.body, req.params.id);
        return res.status(201).json('Update successfully');
    } catch (err) {
        return res.status(500).json({
            message: 'Intenal Server Error' + err.message
        });
    }
}

export const deleteContact = async (req, res) => {
    try {
        const data = await fetchContactById(req.params.id);
        if (!data) return res.status(400).json('Data not found');
        await deleteContactServices(req.params.id);
        return res.status(201).json('Delete successfully');
    } catch (err) {
        return res.status(500).json({
            message: 'Intenal Server Error' + err.message
        });
    }
}