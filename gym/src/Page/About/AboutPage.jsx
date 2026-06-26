import { Box, Container, Grid, Typography } from "@mui/material";
import Navbar from "../../component/Navbar/Navbar";
import Sidebar from "../../component/Sidebar/Sidebar";
import { useState } from "react";
export default function AboutPage(){
    const [open, setOpen] = useState(true);
  const toggleSidebar = () => {
    setOpen(!open);
  };

   return (
      <>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            minHeight: "100vh",
            justifyContent: "center",
          }}
        >
          <Sidebar
            open={open}
            toggleSidebar={toggleSidebar}
            sx={{ mr: "100px" }}
          />
  
          <Box sx={{ flexGrow: 1 }}>
            <Navbar />
           <Typography variant="h1" sx={{color:"#222222"}}>Ultimate Gym</Typography><hr/>
            <Container sx={{ py: 8 }}>
              <ul> 
                <li>
               <Typography sx={{color:"#fdfdfd"}}>
          Welcome to our Sports Club website, your ultimate destination for
          fitness, health, and an active lifestyle. Our platform is designed to
          provide a complete sports experience for everyone who is passionate
          about improving their physical fitness, maintaining a healthy routine,
          and achieving their personal goals. Whether you are a beginner
          starting your fitness journey or a professional athlete looking to
          enhance your performance, our website offers everything you need in
          one place. Our website features a wide variety of high-quality sports
          products that are carefully selected to meet the needs of different
          sports and fitness activities. Visitors can explore a large collection
          of sportswear, running shoes, gym accessories, fitness equipment,
          training tools, and many other athletic products designed for comfort,
          durability, and performance. We aim to provide products that combine
          modern design with excellent quality to help users perform their
          workouts with confidence and comfort. In addition to sports products,
          the website includes a dedicated section for workout guidance and
          fitness education. We believe that performing exercises correctly is
          essential for achieving the best results and preventing injuries.
        </Typography>
          </li>
        </ul>

            </Container>
          </Box>
        </Box>
      </>
    );
}
