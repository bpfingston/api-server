'use strict';

module.exports = function (req,res,next){
    const model = [req.params.model];

    if (model){
        next();
    } else {
        next('no model found');
    }
};