import { PaginateModel, model } from 'mongoose';
import schema, { IVillage } from '#schema/Village'

export default model<IVillage, PaginateModel<IVillage>>('Village', schema);
