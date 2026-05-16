import { useState } from "react";
import MenuList from "../../component/Menus/MenuList";
import Navbar from "../../component/Navbar/Navbar";
import Sidebar from "../../component/Sidebar/Sidebar";
import { Box } from "@mui/material";

export default function MenuListPage(){

   

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
<MenuList/>
</Box>



</Box>


</>


)}