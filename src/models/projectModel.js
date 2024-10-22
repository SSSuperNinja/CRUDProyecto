const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: {type: String, require: true},
    desc: {type: String, require: true},
    dateStart: {type: Date, require: true},
    dateEnd: {type: Date, require: true},
    estatus: {type: String, require: true},
    budget: {type: Number, require: true}
    
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;