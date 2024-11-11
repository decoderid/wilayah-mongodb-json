import { Document, Schema } from 'mongoose'
import paginate from 'mongoose-paginate-v2'

export interface IRegency extends Document {
    province_id: Schema.Types.ObjectId
    name: string
}

const schema = new Schema<IRegency>({
    province_id: {
        type: Schema.Types.ObjectId,
        ref: 'Province',
        required: true
    },
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
