import { Sequelize, where } from "sequelize";
import ContactModel from "../model/ContactModel.js"

export const searchContactServices = (key) => {
    const Op = Sequelize.Op;
    return ContactModel.findAll({
        where: {
            name: {
                [Op.like]: '%' + key + '%'
            }
        }
    })
}

export const fetchAllContact = () => {
    return ContactModel.findAll();
}

export const fetchContactById = (id) => {
    return ContactModel.findByPk(id);
}

export const storeContact = (req) => {
    return ContactModel.create({
        name: req.name,
        email: req.email,
        phone: req.phone
    });
}

export const updateContactService = (req, id) => {
    return ContactModel.update({
        name: req.name,
        email: req.email,
        phone: req.phone
    }, {
        where: { id: id },

    });
}

export const deleteContactServices = (id) => {
    return ContactModel.destroy({
        where: { id: id },
    })
}