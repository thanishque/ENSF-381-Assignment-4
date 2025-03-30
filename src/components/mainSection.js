import { useEffect, useState } from "react";
import courses from "../data/courses";
import testimonials from "../data/testimonials";

const getRandomItems = (arr, count) => [...arr].sort(() => 0.5 - Math.random()).slice(0, count);

const mainSection = () => {
  const [featured, setFeatured] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setFeatured(getRandomItems(courses, 3));
    setReviews(getRandomItems(testimonials, 2));
  }, []);

  return (
    <main className="desc" style={{ padding: "1rem" }}>
      <section id="about">
        <h2>About LMS</h2>
        <p>
          The Learning Management System (LMS) helps students and instructors manage courses,
          quizzes, and track performance efficiently.
        </p>
        <ul>
          <li>Enroll in courses</li>
          <li>Attempt quizzes</li>
          <li>View leaderboards</li>
        </ul>
      </section>

      <section>
        <h2>Featured Courses</h2>
        <div style={{ display: "flex", gap: "1rem" }}>
          {featured.map(course => (
            <div key={course.id} className="course-tile" style={{ border: "1px solid #ccc", padding: "1rem" }}>
              <img src={require(`../${course.image}`)} alt={course.name} width="200" />
              <h3>{course.name}</h3>
              <p>{course.description}</p>
              <p><strong>Instructor:</strong> {course.instructor}</p>
              <p><strong>Duration:</strong> {course.duration}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Student Testimonials</h2>
        {reviews.map((t, i) => (
          <div key={i} style={{ marginBottom: "1rem" }}>
            <strong>{t.studentName}</strong> ({t.courseName})
            <p>{t.review}</p>
            <p>{'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}</p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default mainSection;
