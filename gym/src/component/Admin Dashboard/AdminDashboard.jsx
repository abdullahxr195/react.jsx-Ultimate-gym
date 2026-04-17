import { Box, Typography } from "@mui/material";
import Sidebar from "../Sidebar/Sidebar";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";







export default function AdminDashboard(){
    const [open , setOpen] = useState(false)
    const toggleSidebar=()=>{

        setOpen(!open)

    }

return(
    <>
    <Box
       sx={{
            display:"flex",
            flexDirection:"row",
             minHeight:"100vh",
             justifyContent:"center",



       }}

    >

        <Sidebar open={open} toggleSidebar={toggleSidebar}/>

        <Box sx={{flexGrow:1}}>

        <Typography>hi admin</Typography>
       
            
        </Box>
            {/* <Navbar/> */}
    </Box>
    
    
    
    
    
    
    </>
)






}
