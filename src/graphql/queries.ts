// graphql/queries.ts
import { gql } from '@apollo/client';

export const GET_COURSES = gql`
  query GetCourses {
    getCourses {
      id
      title
      thumbnail
    }
  }
`;

export const GET_COURSE = gql`
  query GetCourse($id: ID!) {
    getCourse(id: $id) {
      id
      title
      thumbnail
      description
    }
  }
`;