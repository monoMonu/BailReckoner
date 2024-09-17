import { Schema, model } from 'mongoose';

const BailApplicationSchema = new Schema({
   prisonerId: { type: String, required: true },
   offences: [{ type: Schema.Types.ObjectId, ref: 'Offence' }],
   imprisonmentDuration: { type: Number, required: true }, // in days
   applicationDate: { type: Date, default: Date.now },
   status: { type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' },
});

const BailApplication = model('BailApplication', BailApplicationSchema);
export default BailApplication;