const coursesPage = () => {
    return (
      <main style={{ padding: "1rem" }}>
        <h2>Enrolled Courses</h2>
        <div style={{ display: "flex", gap: "1rem" }}>
          <div className="course-tile">
            <img src="/images/course1.jpg" alt="Web Dev" width="200" />
            <p>Course Name: Web Development</p>
            <p>Course Code: WD381</p>
            <a href="/attempt-quiz">Attempt Quiz</a>
          </div>
          <div className="course-tile">
            <img src="/images/course1.jpg" alt="Data Structures" width="200" />
            <p>Course Name: Data Structures</p>
            <p>Course Code: DS371</p>
            <a href="/attempt-quiz">Attempt Quiz</a>
          </div>
          <div className="course-tile">
            <img src="/images/course1.jpg" alt="DBMS" width="200" />
            <p>Course Name: DBMS</p>
            <p>Course Code: DB346</p>
            <a href="/attempt-quiz">Attempt Quiz</a>
          </div>
        </div>
      </main>
    ); 
  };
  
  export default coursesPage;
  