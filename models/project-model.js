const mongoose = require('mongoose');

const { Schema } = mongoose;

const User = require('./user-model');

const projectSchema = new Schema({
  title: String,
  description: String,
  tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }],
  owner: { type: Schema.Types.ObjectId, ref: 'User' }
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
