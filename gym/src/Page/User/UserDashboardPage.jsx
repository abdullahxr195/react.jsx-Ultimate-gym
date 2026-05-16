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

export default function UserDashboardPage({ image, name  ,text}) {
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
          
          minWidth:"55vh",
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
              sx={{ fontWeight: "bold", color:"white" }}
            >
              {name}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ lineHeight: 1.6 , color:"white" }}
            >
              {text}
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "space-between", padding: 2 }}>
             <Button onClick={handleOpen}
            size="medium"
            variant="contained"
            color="warning"
            sx={{
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: (theme) => theme.palette.secondary.dark,
              },
            }}
          >
            Order
          </Button>
           
          </CardActions>
        </Card>
      </Box>
    </>



  );
}
