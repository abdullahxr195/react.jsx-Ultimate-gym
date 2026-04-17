import { useContext, useState } from "react"
import { UserContext } from "../User page/UserContext"
import { Box, Button, Container, TextField, Typography } from "@mui/material";

export default function Login(){
    const {login}=useContext(UserContext);
    const [formData , setFormData]=useState({
        name : "",
        email: "",
        password:"",

    })

const handeleSubmit =() => {

login(formData);

}


return(
<>
<Container>
        <Typography>Login</Typography>

        <Box>
          

            <TextField 
            label="Name :" 
            value={formData.name}
            onChange={(e) => setFormData  ({ ...formData , name: e.target.value})} />




            <TextField label="Email :" 
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})} />


            <TextField
             label="Password :"
             type="password"
             value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})} />
           

             
            <Button onClick={handeleSubmit} variant="contained" type="submit">Login</Button>       
        </Box>

      </Container>










</>

)







}