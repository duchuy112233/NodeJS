import Joi from "joi";

const Create = Joi.object({
    title:Joi.string().required(),
    price:Joi.number().required(),
    note:Joi.string().required(),
    img:Joi.string().required(),
})
const Update = Joi.object({
    title:Joi.string().required(),
    price:Joi.number().required(),
    note:Joi.string().required(),
    img:Joi.string().required(),
})

export {Create,Update}