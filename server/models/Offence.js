import { Schema, model } from "mongoose";

const OffenceSchema = new Schema({
   name: { type: String, required: true },
   section: { type: String, required: true },
   act: { type: String, required: true },
   penalty: { type: String, required: true },
   isBailable: { type: Boolean, required: true },
});

const Offence = model('Offence', OffenceSchema);
export default Offence;