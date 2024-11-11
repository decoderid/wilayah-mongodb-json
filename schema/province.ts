import { Document, Schema } from 'mongoose'
import paginate from 'mongoose-paginate-v2'

export interface IProvince extends Document {
    name: string
}

const schema = new Schema<IProvince>({
    name: {
        type: String,
        required: true
    }
}, {
    versionKey: false,
    timestamps: true
});

schema.set('toJSON', {
    virtuals: true,
    transform: (doc, ret) => {
        ret.id = ret._id
        delete ret._id
    }
})

schema.plugin(paginate)

export default schema
