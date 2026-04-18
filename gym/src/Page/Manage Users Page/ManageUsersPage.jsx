import { useState } from "react";
import MenuList from "../../Menus/MenuList";
import Navbar from "../../Navbar/Navbar";
import Sidebar from "../../Sidebar/Sidebar";
import { Box } from "@mui/material";
import ManageUsers from "../../Users/ManageUsers";

export default function ManageUsersPage(){

    const [open , setOpen] = useState(true)
     const toggleSidebar=()=>{
        
                setOpen(!open)
        
            }

return(
<>



<Box 
sx={{
    display : "flex",
    flexDirection : "row",
    minHeight : "100vh",
    justifyContent : "center",

}}

>

<Sidebar open={open} toggleSidebar={toggleSidebar}
sx={{ mr:"100px"}}/>

<Box sx={{flexGrow : 1}}>
<Navbar/>
<ManageUsers/>
</Box>



</Box>


</>


)}