// CourseList.tsx
'use client';

import { useQuery } from "@apollo/client";
import { GET_COURSES } from "@/graphql/queries";
import { GetCoursesData } from "@/types/graphql";
import CourseCard from "./CourseCard";

export default function CourseList() {
  const { loading, error, data } = useQuery<GetCoursesData>(GET_COURSES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data?.getCourses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
        />
      ))}
    </div>
  );
}