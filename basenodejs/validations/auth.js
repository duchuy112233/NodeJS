import Joi from "joi";

const registerValidator = Joi.object({
  username: Joi.string().min(3).max(10).required().messages({
    "any.required": "Thiếu Username ",
    "string.min": "Username ít nhất 3 ký tự",
  }),
  email: Joi.string().email().messages({
    "string.email": "Không đúng định dạng Email",
  }),
  password: Joi.string(),
  avatar: Joi.string(),
  role: Joi.string(),
}).options({
  abortEarly: false,
});

const loginValidator = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
}).options({
  abortEarly: false,
});

export { registerValidator, loginValidator };