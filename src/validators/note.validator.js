import Joi from '@hapi/joi';

export const noteValidator = (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().min(4).required(),
    description: Joi.string().min(4).required(),
    color: Joi.string().optional(),
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