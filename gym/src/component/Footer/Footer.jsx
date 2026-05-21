import { Box, Container } from "@mui/material";

import { useNavigate } from "react-router-dom";
import "./Footer.css";
export default function Footer() {
  const navigate = useNavigate();
  return (
    <>
    <Box className="footer">
      
        
          <ul>
            <li>
              <a  href="#about us" onClick={() => navigate("/about-Page")}>about us</a>
               
            </li>
          </ul>
          <ul>
            <li>
              <a  href="tel:+962775228877">
                for booking:0775228877
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a  href="#to inquire:0785162660">
                to inquire:0785162660
              </a>
            </li>
          </ul>

          <ul>
            <li>
              <a  href="#email: Ultimate Gym@gmail.com">
                email:Ultimate Gym@gmail.com
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a  href="#complaints">
                complaints
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a  href="#location">
                location
              </a>
            </li>
          </ul>
        
      </Box>
    </>
  );
}
