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
import { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

export default function UserDashboardPage({id ,image, name, text ,quantity}) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [userQuantity , setUserQuantity] = useState(0) 

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const increaseQuantity = () => {

    setUserQuantity(userQuantity + 1)

  }

  const decreaseQuantity =() => {
    if(userQuantity > 1){
    setUserQuantity(userQuantity - 1)
    }
  }

  const item ={
 id,
 name,
 quantity


  }
  
  
  const{addToCart} = useContext(CartContext);


const addQuantity = () => {
  setUserQuantity((q) => q + 1)
  addToCart({ item ,userQuantity})

  }
  return (
    <>
    
    
      <Box
        sx={{
          minWidth: "55vh",
          justifyContent: "center",
          alignItems: "center",
          padding: 2,
          marginLeft: "8vh",
        }}
      >
        <Card
          sx={{
            backgroundColor: "#222222",
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
              sx={{ fontWeight: "bold", color: "white" }}
            >
              {name}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ lineHeight: 1.6, color: "white" }}
            >
              {text}
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "space-between", padding: 2 }}>
            {/* <Button
              onClick={handleOpen}
              size="medium"
              variant="contained"
              color="warning"
              sx={{
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: (theme) => theme.palette.secondary.dark,
                },
              }}
            >
              Order
            </Button> */}
          </CardActions>
        </Card>
{/* 
        <Modal open={open} onClose={handleClose}>
          <Box
            sx={{
              width: "100vh",
              margin: "100px auto",
              backgroundColor: "#ffffff",
              height: "50vh",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                textAlign: "center",
                mt: 10,
                color: "#000000",
                backgroundColor: "GoldenRod",
              }}
            >
              {name}

            </Typography>

            <Typography variant="h4"> {userQuantity}</Typography>
              <Button sx={{fontSize:"10vh", backgroundColor:"DarkGoldenRod",marginRight:"100px", width:"100px", margin:"180px",height:"90px"}} onClick={()=>addToCart(item,userQuantity)}>+</Button>
              <Button sx={{fontSize:"3vh", backgroundColor:"Darkorange", marginTop:"118px"}} onClick={handleClose}>Done</Button>
              <Button sx={{fontSize:"10vh",backgroundColor:"DarkGoldenRod", marginRight:"100px" ,width:"100px", height:"90px"}} >-</Button>
             <CardMedia
             component="img"
            src={image} 
           controls autoPlay
            alt="Athlete working out in a modern gym"
            height="200"
            title="Gym Workout"
          /> 
          </Box>
        </Modal>
         */}
      </Box>
    </>
  );
}
