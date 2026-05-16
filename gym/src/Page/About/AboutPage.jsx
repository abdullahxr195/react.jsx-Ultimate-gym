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
            <Typography variant="h1" sx={{color:"#ff8c00"}}>Ultimate Gym</Typography>
  
            <Container sx={{ py: 8 }}>
              <Typography sx={{ color: "red" }}>
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
          essential for achieving the best results and preventing injuries. For
          this reason, we provide detailed instructions and explanations for
          different types of exercises, including strength training, cardio
          workouts, stretching exercises, warm-up routines, and flexibility
          training. Each exercise is presented with clear guidance on the
          correct posture, movement, and breathing techniques to ensure safe and
          effective training. Our platform also offers customized workout
          programs suitable for different fitness levels and goals. Whether
          users want to lose weight, build muscle, improve endurance, or
          maintain a healthy lifestyle, they can find training plans and helpful
          fitness tips that support their progress. We also provide information
          about healthy nutrition, workout schedules, recovery techniques, and
          motivation strategies to encourage users to stay committed to their
          fitness journey. The Sports Club website is designed with a modern and
          user-friendly interface that allows visitors to navigate easily
          through different sections. The responsive design ensures a smooth
          browsing experience on smartphones, tablets, and desktop devices,
          making it easy for users to access products, workout tutorials, and
          fitness resources anytime and anywhere. Our mission is to create a
          supportive fitness community that inspires people to live healthier
          and more active lives. We believe that sports are not only about
          physical strength but also about building confidence, discipline, and
          a positive mindset. Through our website, we strive to spread awareness
          about the importance of fitness and provide reliable resources that
          help users improve both their physical and mental well-being. Join our
          Sports Club today and start your journey toward a healthier, stronger,
          and more energetic lifestyle. Discover premium sports products,
          professional workout guidance, and everything you need to achieve your
          fitness goals in one complete platform.
        </Typography>
            </Container>
          </Box>
        </Box>
      </>
    );
}
