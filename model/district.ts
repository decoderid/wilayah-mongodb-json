import { PaginateModel, model } from 'mongoose';
import schema, { IDistrict } from '#schema/District'

export default model<IDistrict, PaginateModel<IDistrict>>('District', schema);
