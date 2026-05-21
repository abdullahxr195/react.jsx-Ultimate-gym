import { useContext, useState } from "react";
import { UserContext } from "../User page/UserContext";
import { Box, Button, Container, TextField, Typography } from "@mui/material";

export default function Login() {
  const { login } = useContext(UserContext);
  const [formData, setFormData] = useState({
   
    email: "",
    password: "",
  });

  const handleSubmit = () => {
    login(formData);
  };

  return (
    <>
      <Container>
        

        <Box sx={{ display:"flex" , marginRight:"250px" ,padding:3 }}>
          <Box sx={{backgroundColor:"Black", width:"90vh" ,height:"70vh", marginRight:"5vh",marginTop:"80px",borderRadius:10,marginLeft:"260px",padding:5 }}>
            <Typography sx={{fontSize:70 , color:"Darkorange" }}>Login</Typography>
          <TextField sx={{display:"flex", backgroundColor:"white",marginLeft:"30px",borderRadius:2}}
            label="Email :"
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }

            
          />

          <TextField sx={{display:"flex" ,marginTop:"30px",backgroundColor:"white",marginLeft:"30px",borderRadius:2}}
            label="Password :"
            type="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
              
          <Button onClick={handleSubmit} variant="contained" type="submit" sx={{marginTop:"80px" ,width:"40vh", height:"10vh" ,borderRadius:10,backgroundColor:"Darkorange",marginLeft:"20px"}}>
            Login
          </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}
