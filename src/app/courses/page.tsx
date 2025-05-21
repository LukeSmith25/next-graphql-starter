// app/courses/page.tsx
import CourseList from "./CourseList";

export default function CoursePage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Available Courses</h1>
      <CourseList />
    </div>
  );
}