import { Button } from "@mui/material";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../User page/UserContext";
import { useContext } from "react";
export default function Navbar() {
  const navigate = useNavigate();
  const { currentUser, logout } = useContext(UserContext);
  return (
    <>
      <div className="navbar">
        <p className=" logo">Ultimate gym</p>

        <div className="link">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          {currentUser ? (
            <>
              {" "}
              <Button variant="contained" onClick={logout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button variant="contained" onClick={() => navigate("/Register")}>
                Register
              </Button>
              <Button variant="contained" onClick={() => navigate("/Login")}>
                Login
              </Button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
