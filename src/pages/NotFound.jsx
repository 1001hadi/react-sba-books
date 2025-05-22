import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div style={{ width: "960px", textAlign: "center", marginTop: "50px" }}>
      <h2 style={{ color: "#588157" }}>Error 404 - Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>{" "}
      <button
        onClick={() => navigate("/")}
        style={{
          background: "red",
          fontSize: "1.4rem",
          padding: "10px 20px",
          cursor: "pointer",
          marginTop: "20px",
        }}
      >
        Go back to Home page!
      </button>
    </div>
  );
};

export default NotFound;
