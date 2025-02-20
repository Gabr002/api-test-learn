const express = require("express");
const ControllerPeople = require("../controllers/pessoa");
const controller = new ControllerPeople();

const router = express.Router();

router.get('/api/v1/names', controller.GetAll);
router.get('/api/v1/names/:id', controller.GetOne);
router.post('/api/v1/name', controller.Add);
router.put('/api/v1/names/:id', controller.Update);
router.delete('/api/v1/names/:id', controller.Delete);

module.exports = router;