const { gql } = require('apollo-server');

const typeDefs = gql`
    type Project {
        _id: ID!
        title: String!
        desc: String!
        dateStart: String!
        dateEnd: String!
        estatus: String!
        budget: Int!
    }

    type Query {
        projects: [Project]!
    }

    type Mutation {
        createProject(title: String!): Project!
        updateProject(_id: ID!): Project!
        deleteProject(_id: ID!): Project!
    }

`;

module.exports = typeDefs;
    