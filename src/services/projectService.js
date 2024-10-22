const Project = require('../models/projectModel');

    module.exports = { 
    getAllProjects: async () => {
        return await Project.find();
    },

    createProject: async (title,desc,dateStart,dateEnd,estatus,budget) => {
        const project = new Project({ title });
        return await project.save();
    },

    updateProject: async (_id, title,desc,dateStart,dateEnd,estatus,budget) => {
        return await Project.findByIdAndUpdate(_id, { title,desc,dateStart,dateEnd,estatus,budget });
    },

    deleteProject: async (_id) => {
        return await Project.findByIdAndDelete(_id);
    }
}
