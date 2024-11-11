import { Document, Schema } from 'mongoose'
import paginate from 'mongoose-paginate-v2'

export interface IVillage extends Document {
    district_id: Schema.Types.ObjectId
    name: string
}

const schema = new Schema<IVillage>({
    district_id: {
        type: Schema.Types.ObjectId,
        ref: 'District',
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
