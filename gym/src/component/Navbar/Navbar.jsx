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
          
          <Button onClick={() => navigate("/about-Page")} sx={{backgroundColor:"FireBrick", color:"AliceBlue"}}>About</Button>
          
          {currentUser ? (
            <>
              {" "}
              <Button variant="contained" onClick={logout} sx={{backgroundColor:"Brown"}}>
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
