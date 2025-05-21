// mocks/courseMocks.ts
import { GET_COURSES, GET_COURSE } from '@/graphql/queries';

export const mocks = [
  {
    request: {
      query: GET_COURSES,
    },
    result: {
      data: {
        getCourses: [
          { id: '1', title: 'React Basics', thumbnail: 'https://via.placeholder.com/150' },
          { id: '2', title: 'Next.js Deep Dive', thumbnail: 'https://via.placeholder.com/150' },
          { id: '3', title: 'GraphQL for Beginners', thumbnail: 'https://via.placeholder.com/150' },
        ],
      },
    },
  },
  {
    request: {
      query: GET_COURSE,
      variables: { id: '1' },
    },
    result: {
      data: {
        getCourse: {
          id: '1',
          title: 'React Basics',
          thumbnail: 'https://via.placeholder.com/150',
          description: 'Learn React fundamentals in this beginner course.',
        },
      },
    },
  },
  {
    request: {
      query: GET_COURSE,
      variables: { id: '2' },
    },
    result: {
      data: {
        getCourse: {
          id: '2',
          title: 'Next.js Deep Dive',
          thumbnail: 'https://via.placeholder.com/150',
          description: 'Explore advanced Next.js features.',
        },
      },
    },
  },
  {
    request: {
      query: GET_COURSE,
      variables: { id: '3' },
    },
    result: {
      data: {
        getCourse: {
          id: '3',
          title: 'GraphQL for Beginners',
          thumbnail: 'https://via.placeholder.com/150',
          description: 'Start your GraphQL journey here.',
        },
      },
    },
  },
];