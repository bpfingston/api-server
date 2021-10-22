'use strict';

const express = require('express');
const router = express.Router();
const { food, restaurant } = require('../models');
const modelWare = require('../middleware/model');

const Collection = require('../models/lib/collections');

const modelMap = {
    food: new Collection(food),
    restaurant: new Collection(restaurant),
};

router.use('/:model', modelWare, function (req, res,next){
    const model = modelMap[req.params.model];
    req.model = model;
    next();
});

router.get('/:model/:id', async (req, res, rext)=>{
    const model = req.model;
    const id = req.params.id;
    let oneRecord = await model.read(id);
    res.status(200).send(oneRecord);
});

router.get('/:model', async (req, res, next) => {
    const model = req.model;
    let allRecords = await model.read();
    res.status(200).send(allRecords);
});

router.post('/:model', async (req, res, next) => {
    const model = req.model;
    const json = req.body;
    let newRecord = await model.create(json);
    res.status(201).send(newRecord);
});

router.put('/:model/:id', async (req, res, next) => {
    const model = req.model;
    const id = req.params.id;
    const json = req.body;
    const updatedRecord = await model.update(id, json);
    res.status(200).send(updatedRecord);
});

router.delete('/:model/:id', async (req, res, next) => {
    const model = req.model;
    const id = req.params.id;
    let deletedRecord = await model.delete(id);
    res.status(204).send(deletedRecord);
});

module.exports = router;