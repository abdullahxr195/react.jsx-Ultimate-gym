import { Box, Typography } from "@mui/material";
import Sidebar from "../Sidebar/Sidebar";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import UserDashboard from "../user dashboard/UserDashboard";

export default function AdminDashboard() {
  const [open, setOpen] = useState(false);
  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <>

    
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          minHeight: "100vh",
          justifyContent: "center",
        }}
      >
        

        <Box sx={{ flexGrow: 1 }}>
          
          <UserDashboard/>
        </Box>
      </Box>
    </>
  );
}
