// CourseCard.tsx
import Link from "next/link";

export default function CourseCard({ course }: { course: never }) {
  return (
    <Link
      className="bg-gray-100 border-2 border-gray-200 p-4 rounded-md"
      href={`/courses/${course.id}`}
    >
      <img
        src={course.thumbnail}
        alt={course.title}
        className="w-full h-40 object-cover rounded-md mb-3"
      />
      <h2 className="text-lg font-bold">{course.title}</h2>
    </Link>
  );
}