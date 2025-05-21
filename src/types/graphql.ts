// src/types/graphql.ts
export interface Course {
  id: string;
  title: string;
  thumbnail: string;
  description?: string;
}

export interface GetCoursesData {
  getCourses: Course[];
}

export interface GetCourseData {
  getCourse: Course;
}

export interface GetCourseVars {
  id: string;
}