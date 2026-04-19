import { Button } from "@mui/material";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../User page/UserContext";
import { useContext } from "react";
export default function Navbar() {
  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);
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
              <Button variant="contained">Logout</Button>
            </>
          ) : (
            <>
              <Button onClick={() => navigate("/Register")} variant="contained">
                Register
              </Button>
              <Button onClick={() => navigate("/Login")} variant="contained">
                Login
              </Button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
