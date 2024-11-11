import { PaginateModel, model } from 'mongoose';
import schema, { IProvince } from '#schema/Province'

export default model<IProvince, PaginateModel<IProvince>>('Province', schema);
