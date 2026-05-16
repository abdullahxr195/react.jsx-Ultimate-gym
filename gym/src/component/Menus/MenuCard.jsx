import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Modal,
  Typography,
} from "@mui/material";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

export default function MenuCard({ image, name ,video ,text}) {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => setOpen(false);
    
 
  

  return (
    <>
      <Box
        sx={{
          display: "flex",
          
          justifyContent: "center",
          alignItems: "center",
          padding: 2,
          marginLeft: "8vh",
        }}
      >
        <Card
          sx={{
          backgroundColor:"#222222",
          
            maxWidth: "55vh",
            borderRadius: 3,
            boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "translateY(-5px)",
            },
          }}
        >
          <CardMedia
            image={image}
            component="img"
            alt="Athlete working out in a modern gym"
            height="150%"
            height="400px"
            objectFit="contain"
            title="Gym Workout"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ fontWeight: "bold",color:"#ffb909"}}
              
              
            >
              {name}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ lineHeight: 1.6 ,color:"#ff4103",  fontSize:15,}}
            >
              {text}
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "space-between", padding: 2 }}>
             <Button onClick={handleOpen}
            size="medium"
            variant="contained"
            color="error"
            sx={{
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: (theme) => theme.palette.secondary.dark,
              },
            }}
          >
            View Plans
          </Button>
           
          </CardActions>
        </Card>
      </Box>

      <Modal open={open} onClose={handleClose} >
        <Box sx={{ width: "100vh", margin: "100px auto" , backgroundColor:"#ffffff", height:"50vh"}}>
          
          <CardMedia
             component="video"
            src={video} 
           controls autoPlay
            alt="Athlete working out in a modern gym"
            height="200"
            title="Gym Workout"
          />
          <Typography variant="h3" sx={{textAlign:"center" , mt:10 , color:"#000000" ,backgroundColor:"GoldenRod"}}>{name}</Typography>
          
        </Box>
      </Modal>
    </>



  );
}
