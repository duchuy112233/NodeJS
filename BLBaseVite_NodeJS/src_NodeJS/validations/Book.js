import Joi from "joi";

const createBookValidator = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  image: Joi.string().required(),
  price: Joi.number().required(),

});
const updateBookValidator = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  image: Joi.string().required(),
  price: Joi.number().required(),
 
});

export { createBookValidator,updateBookValidator };
