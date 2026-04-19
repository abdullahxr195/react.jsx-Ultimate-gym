import { Typography } from "@mui/material";
import { UserContext } from "../User page/UserContext.jsx";
import { useContext, useState } from "react";
import Sidebar from "../../component/Sidebar/Sidebar.jsx";
import Navbar from "../../component/Navbar/Navbar.jsx";

export default function UserDashboard() {
  const [open, setOpen] = useState(false);
  const toggleSidebar = () => {
    setOpen(!open);
  };

  const { currentUser } = useContext(UserContext);
  console.log(currentUser);

  return (
    <>
      <Navbar />

      <Typography variant="h2">hi,{currentUser?.name}</Typography>
      <Sidebar open={open} toggleSidebar={toggleSidebar} />
    </>
  );
}
