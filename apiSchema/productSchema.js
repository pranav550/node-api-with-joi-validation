const Joi = require('@hapi/joi');

module.exports.createProductSchemma = Joi.object().keys({
    name:Joi.string().required(),
    price:Joi.number().required(),
    brand:Joi.string().required()
})