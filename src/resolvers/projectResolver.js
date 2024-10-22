const projectService = require('../services/projectService');

const resolvers = {
    Query: {
        projects: () => {
            return projectService.getAllProjects();
        }
    },
    Mutation: {
        createProject: (_, { title,desc,dateStart,dateEnd,estatus,budget }) =>{
            return projectService.createProject(title,desc,dateStart,dateEnd,estatus,budget);
        },
        updateProject: (_, { _id, title,desc,dateStart,dateEnd,estatus,budget }) => {
            return projectService.updateProject(_id, completed);  
        },
        deleteProject: (_, { _id }) => {
            return projectService.deleteProject(_id);
        }
    }
};

module.exports = resolvers;