

import { Box, Container, Grid, Typography } from "@mui/material";
import MenuCard from "../../component/Menus/MenuCard";
import Navbar from "../../component/Navbar/Navbar";
import Sidebar from "../../component/Sidebar/Sidebar";
import { useState } from "react";

export default function ViewCardForearms() {
    const [open, setOpen] = useState(true);
      const toggleSidebar = () => {
        setOpen(!open);
      };
  const menuList = [
    {
      id: 0,
      name: "One arm Wrist Curl",
      image:"https://my.lyfta.app/_next/image?url=https%3A%2F%2Fapilyfta.com%2Fstatic%2FGymvisualPNG%2F03641101-Dumbbell-One-arm-Wrist-Curl_Forearm-SFIX_small.png&w=1200&q=75",
       video:"",
      text: "",
    },

    {
      id: 1,
      name: "Wrist Curl",
      image:"https://my.lyfta.app/_next/image?url=https%3A%2F%2Fapilyfta.com%2Fstatic%2FGymvisualPNG%2F01251101-Barbell-Wrist-Curl-II_Forearms_small.png&w=1200&q=75",
       video:"",
      text: "",
    },

    {
      id: 2,
      name: "Cable Standing Reverse Grip Curl",
      image:"https://my.lyfta.app/_next/image?url=https%3A%2F%2Fapilyfta.com%2Fstatic%2FGymvisualPNG%2F29541101-Cable-Standing-Reverse-Grip-Curl-(Straight-bar)_Forearms_small.png&w=1200&q=75",
       video:"",
      text: "",
    },

    {
      id: 3,
      name: "Behind Back Finger Curl",
      image:"https://my.lyfta.app/_next/image?url=https%3A%2F%2Fapilyfta.com%2Fstatic%2FGymvisualPNG%2F16101101-Barbell-Behind-Back-Finger-Curl_Forearms_small.png&w=1200&q=75",
       video:"",
      text: "",
    },

    {
      id: 4,
      name: "Wrist Roller",
      image:"https://my.lyfta.app/_next/image?url=https%3A%2F%2Fapilyfta.com%2Fstatic%2FGymvisualPNG%2F08591101-Wrist-Roller_Forearms_small.png&w=1200&q=75",
       video:"",
      text: "",
    },

    {
      id: 5,
      name: "Cable Reverse One Arm Curl",
      image:"https://my.lyfta.app/_next/image?url=https%3A%2F%2Fapilyfta.com%2Fstatic%2FGymvisualPNG%2F14131101-Cable-Reverse-One-Arm-Curl_Forearms_small.png&w=1200&q=75",
       video:"",
      text: "",
    },

    {
      id: 6,
      name: "Over Bench One Arm Neutral Wrist Curl",
      image:"https://my.lyfta.app/_next/image?url=https%3A%2F%2Fapilyfta.com%2Fstatic%2FGymvisualPNG%2F03661101-Dumbbell-Over-Bench-One-Arm--Neutral-Wrist-Curl_Forearms_small.png&w=1200&q=75",
       video:"",
      text: "",
    },

    {
      id: 7,
      name: "Lever Gripper Hands",
      image:"https://my.lyfta.app/_next/image?url=https%3A%2F%2Fapilyfta.com%2Fstatic%2FGymvisualPNG%2F22881101-Lever-Gripper-Hands-(plate-loaded)_Hands_small.png&w=1200&q=75",
       video:"",
      text: "",
    },

    {
      id: 8,
      name: "EZ Bar Seated Wrist Curl",
      image:"https://my.lyfta.app/_next/image?url=https%3A%2F%2Fapilyfta.com%2Fstatic%2FGymvisualPNG%2F55791101-EZ-Bar-Seated-Wrist-Curl_Forearms-FIX_small.png&w=1200&q=75",
       video:"",
      text: "",
    },

    {
      id: 9,
      name: "Cable Hammer Curl",
      image:"https://my.lyfta.app/_next/image?url=https%3A%2F%2Fapilyfta.com%2Fstatic%2FGymvisualPNG%2F01651101-Cable-Hammer-Curl-(with-rope)-m_Forearms_small.png&w=1200&q=75",
       video:"",
      text: "",
    },

    {
      id: 10,
      name: "EZ Barbell Reverse Grip Curl",
      image:"https://my.lyfta.app/_next/image?url=https%3A%2F%2Fapilyfta.com%2Fstatic%2FGymvisualPNG%2F04511101-EZ-Barbell-Reverse-Grip-Curl_Forearms_small.png&w=1200&q=75",
       video:"",
      text: "",
    },

    {
      id: 11,
      name: "Reverse Curl",
      image:"https://my.lyfta.app/_next/image?url=https%3A%2F%2Fapilyfta.com%2Fstatic%2FGymvisualPNG%2F00801101-Barbell-Reverse-Curl_Forearm_small.png&w=1200&q=75",
       video:"",
      text: "",
    },
  ];

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

          <Container sx={{ py: 8 }}>
            <Typography variant="h1"></Typography>
            <Grid container spacing={6}>
              {menuList.map((Exercise) => {
                return (
                  <Grid item key={Exercise.id}>
                    <MenuCard name={Exercise.name} image={Exercise.image} />
                  </Grid>
                );
              })}
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );}












