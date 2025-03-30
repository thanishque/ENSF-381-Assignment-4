import { Link } from "react-router-dom";

const header = () => {
  return (
    <header className="header" style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      <img src="/images/logo.jpg" alt="LMS Logo" style={{ width: "80px" }} />
      <h1>LMS - Learning Management System</h1>
      <nav style={{ marginLeft: "auto", display: "flex", gap: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
};

export default header;
