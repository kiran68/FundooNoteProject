import Joi from '@hapi/joi';

export const newUserValidator = (req, res, next) => {
  const schema = Joi.object({
     firstName: Joi.string().min(4).required(),
     lastName: Joi.string().min(4).required(),
     email: Joi.string().email().required(),
     password: Joi.string().min(5).required()
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    res.status(400).json({
      code: 400,
      message: 'Validation failed',
      error: error.details[0].message,
    })
  } else { 
  next();
  }
};


export const loginUserValidator = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(5).required()
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    res.status(400).json({
      code: 400,
      message: 'Validation failed',
      error: error.details[0].message
    });
  } else {
  next();
  }
};