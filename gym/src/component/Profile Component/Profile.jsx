import { useContext, useState } from "react";
import { UserContext } from "../User page/UserContext";
import { Box, Button, Card, Typography } from "@mui/material";

export default function(){
 const{currentUser} = useContext(UserContext);
 const [showPassword , setShowPassword] = useState(false)
return(<>

<Box>

<Card>

<Typography>User Name : {currentUser?.name}</Typography>
<Typography>User Email : {currentUser?.email}</Typography>

<Box>

<Typography>User Password : {showPassword ?currentUser ?.password :"************"}</Typography>

</Box>


<Button onClick={( )  => setShowPassword(!showPassword)}>{showPassword ? "Hide password" : "Show password"} </Button>


</Card>

</Box>




</>)



}