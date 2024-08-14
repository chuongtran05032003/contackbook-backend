const express = require("express");
const contacts = require("../controllers/contact.comtroller");

const router = express.Router();

router.route('/')
    .get(contacts.findAll)
    .post(contacts.create)
    .delete(contacts.deleteAll);

router.route('/favorite')
    .get(contacts.findAllFavorite);

router.route('/:id')
    .get(contacts.findOne)
    .post(contacts.create)
    .delete(contacts.delete);

module.exports = router;

