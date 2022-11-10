import joi from 'joi';
import { CreateService } from '../utils/typeUtils';

export const serviceSchema = joi.object<CreateService>({
    descrition: joi.string().required().trim(),
    price: joi.string().allow('', null).default('Valor a Negociar'),
})