import { PaginateModel, model } from 'mongoose';
import schema, { IRegency } from '#schema/Regency'

export default model<IRegency, PaginateModel<IRegency>>('Regency', schema);
