import Joi from "joi";

const carValidator = Joi.object({
    brand: Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base': 'Only letters up to 20 characters' // кастомний месидж
    }),
    price: Joi.number().min(0).max(1000000).required().messages({
        'number.min': 'min 0' // кастомний месидж
    }),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required()
})

export {carValidator}