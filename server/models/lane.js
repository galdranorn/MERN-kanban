import mongoose from 'mongoose';
const Schema = mongoose.Schema;
mongoose.plugin(schema => { schema.options.usePushEach = true; });

function populateNotes(next) {
  this.populate('notes');
  next();
}

const laneSchema = new Schema({
  name: { type: 'String', required: true },
  notes: [{ type: Schema.ObjectId, ref: 'Note', required: true }],
  id: { type: 'String', required: true, unique: true },
});

laneSchema.pre('find', populateNotes);
laneSchema.pre('findOne', populateNotes);

export default mongoose.model('Lane', laneSchema);
