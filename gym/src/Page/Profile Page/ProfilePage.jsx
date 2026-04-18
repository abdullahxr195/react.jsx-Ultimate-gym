import { useState } from "react";
import MenuList from "../../component/Menus/MenuList.jsx";
import Navbar from "../../component/Navbar/Navbar.jsx";
import Sidebar from "../../component/Sidebar/Sidebar.jsx";
import { Box } from "@mui/material";
import profile from '../../component/Profile Component/Profile.jsx'


export default function ProfilePage(){

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

<Profile/> 
</Box>



</Box>


</>


)}