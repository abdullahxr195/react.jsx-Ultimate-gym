

import { Box, Container, Grid, Typography } from "@mui/material";
import MenuCard from "../../component/Menus/MenuCard";
import Sidebar from "../../component/Sidebar/Sidebar";
import Navbar from "../../component/Navbar/Navbar";
import { useState } from "react";

export default function ViewCardNeck() {
    const [open, setOpen] = useState(true);
    const toggleSidebar = () => {
      setOpen(!open);
    };
  const menuList = [
    {
      id: 0,
      name: "Lying Neck Flexion",
      image:"https://my.lyfta.app/_next/image?url=https%3A%2F%2Fapilyfta.com%2Fstatic%2FGymvisualPNG%2F10431101-Weighted-Lying-Neck-Flexion_neck_small.png&w=1200&q=75"
    },

    {
      id: 1,
      name: "Lying Neck Extension",
      image:"https://my.lyfta.app/_next/image?url=https%3A%2F%2Fapilyfta.com%2Fstatic%2FGymvisualPNG%2F10421101-Weighted-Lying-Neck-Extension_neck_small.png&w=1200&q=75"
    },

    {
      id: 2,
      name: "Forward Flexion Neck Stretch",
      image:"https://my.lyfta.app/_next/image?url=https%3A%2F%2Fapilyfta.com%2Fstatic%2FGymvisualPNG%2F18361101-Forward-Flexion-Neck-Stretch_Neck_small.png&w=1200&q=75"
    },

    {
      id: 3,
      name: "Side Neck Stretch",
      image:"https://my.lyfta.app/_next/image?url=https%3A%2F%2Fapilyfta.com%2Fstatic%2FGymvisualPNG%2F07131101-Side-Neck-Stretch_Neck_small.png&w=1200&q=75"
    },

    {
      id: 4,
      name: "Weighted Side Lying Side Neck Raise",
      image:"https://my.lyfta.app/_next/image?url=https%3A%2F%2Fapilyfta.com%2Fstatic%2FGymvisualPNG%2F44301101-Weighted-Side-Lying-Side-Neck-Raise_Neck_small.png&w=1200&q=75"
    },

    {
      id: 5,
      name: "Seated Neck Extension",
      image:"https://my.lyfta.app/_next/image?url=https%3A%2F%2Fapilyfta.com%2Fstatic%2FGymvisualPNG%2F08481101-Weighted-Seated-Neck-Extension-(with-head-harness)_Neck_small.png&w=1200&q=75"
    },

    {
      id: 6,
      name: "Weighted Lying Neck Head Twist",
      image:"https://my.lyfta.app/_next/image?url=https%3A%2F%2Fapilyfta.com%2Fstatic%2FGymvisualPNG%2F44321101-Weighted-Lying-Neck-Head-Twist_Neck_small.png&w=1200&q=75"
    },

    {
      id: 7,
      name: "Lying Side Lifting Head",
      image:"https://my.lyfta.app/_next/image?url=https%3A%2F%2Fapilyfta.com%2Fstatic%2FGymvisualPNG%2F08381101-Weighted-Lying-Side-Lifting-Head-(with-head-harness)_Neck_small.png&w=1200&q=75"
    },

    {
      id: 8,
      name: "Neck Flexor And Rotational Stretch",
      image:"https://my.lyfta.app/_next/image?url=https%3A%2F%2Fapilyfta.com%2Fstatic%2FGymvisualPNG%2F18401101-Neck-Flexor-And-Rotational-Stretch_Neck_small.png&w=1200&q=75"
    },

    {
      id: 9,
      name: "Lever Neck Extension",
      image:"https://my.lyfta.app/_next/image?url=https%3A%2F%2Fapilyfta.com%2Fstatic%2FGymvisualPNG%2F22821101-Lever-Neck-Extension-(plate-loaded)_Neck_small.png&w=1200&q=75"
    },

    {
      id: 10,
      name: "Lever Neck Left Side Flexion",
      image:"https://my.lyfta.app/_next/image?url=https%3A%2F%2Fapilyfta.com%2Fstatic%2FGymvisualPNG%2F22831101-Lever-Neck-Left-Side-Flexion-(plate-loaded)_Neck_small.png&w=1200&q=75"
    },

    {
      id: 11,
      name: "Cable Seated Neck Extension",
      image:"https://my.lyfta.app/_next/image?url=https%3A%2F%2Fapilyfta.com%2Fstatic%2FGymvisualPNG%2F24111101-Cable-Seated-Neck-Extension-(with-head-harness)_Neck_small.png&w=1200&q=75"
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
  );
}












