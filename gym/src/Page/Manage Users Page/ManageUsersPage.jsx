import { useState } from "react";
import { Box } from "@mui/material";
import MenuList from "../../component/Menus/MenuList.jsx";
import Navbar from "../../component/Navbar/Navbar.jsx";
import Sidebar from "../../component/Sidebar/Sidebar.jsx";
import ManageUsers from "../../component/Users/ManageUsers.jsx";

export default function ManageUsersPage() {
  const [open, setOpen] = useState(true);
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
          justifyContent: "space-between",
        }}
      >
        <Sidebar
          open={open}
          toggleSidebar={toggleSidebar}
          sx={{  flexGrow:1}}
        />

        <Box sx={{ flexGrow: 1 }}>
          <Navbar />
          <ManageUsers />
        </Box>
      </Box>
    </>
  );
}
