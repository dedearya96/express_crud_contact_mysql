import express from 'express';
import { createContact, deleteContact, getAllContact, getContactById, searchContact, updateContact } from '../controller/ContactController.js';
import { createContactValidator } from '../validator/ContactValidator.js';
const router = express.Router();

router.get('/', function (req, res) {
    res.json({
        code: 200,
    });
});

router.get('/search/:key', searchContact);
router.get('/contact', getAllContact);
router.post('/contact', createContactValidator, createContact);
router.get('/contact/:id', getContactById);
router.put('/contact/:id', createContactValidator, updateContact);
router.delete('/contact/:id', deleteContact);


export default router;