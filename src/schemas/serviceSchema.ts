import joi from 'joi';
import { CreateJob } from '../protocols/types';

const regex =/^((R)\$(\s)?(\d{1,3}(\.\d{3})*,\d{2}))/

export const serviceSchema = joi.object<CreateJob>({
    descrition: joi.string().required().trim(),
    price: joi.string().pattern(regex).allow("").required(),
})