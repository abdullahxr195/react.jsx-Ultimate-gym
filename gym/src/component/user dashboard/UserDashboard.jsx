import { Box, Container, Grid, Typography } from "@mui/material";
import { UserContext } from "../User page/UserContext.jsx";
import { useContext, useState } from "react";
import Sidebar from "../../component/Sidebar/Sidebar.jsx";
import Navbar from "../../component/Navbar/Navbar.jsx";
import MenuCard from "../Menus/MenuCard.jsx";
import UserDashboardPage from "../../Page/User/UserDashboardPage.jsx";


export default function UserDashboard() {
  const [open, setOpen] = useState(false);
  const toggleSidebar = () => {
    setOpen(!open);
  };

  const { currentUser } = useContext(UserContext);
  console.log(currentUser);



  const menuList = [
    {
      id: 0,
      name: "15$",
      image:"https://i.pinimg.com/736x/68/fe/8d/68fe8d9c3e5f967750be00f321664640.jpg"
    },

    {
      id: 1,
      name: "5$",
      image:"https://i.pinimg.com/1200x/3c/41/6a/3c416a826a432a3713d9363d5f1df06c.jpg"
    },

    {
      id: 2,
      name: "12$",
      image:"https://i.pinimg.com/1200x/de/d0/e0/ded0e076c0ea5a2a1e90b076c98ed534.jpg"
    },

    {
      id: 3,
      name: "8$",
      image:"https://i.pinimg.com/1200x/58/03/74/580374e44960c06acdd712ea454958ad.jpg"
    },

    {
      id: 4,
      name: "10$",
      image:"https://i.pinimg.com/1200x/c6/96/ab/c696ab62555c20da7988d427205d5c79.jpg"
    },

    {
      id: 5,
      name: "30$",
      image:"https://i.pinimg.com/736x/50/c7/1b/50c71bbed784b69dd6e490344085f40f.jpg"
    },

    {
      id: 6,
      name: "20$",
      image:"https://i.pinimg.com/736x/e9/e4/db/e9e4db0fdbe43fc8e1b16016977d97aa.jpg"
    },

    {
      id: 7,
      name: "7$",
      image:"https://i.pinimg.com/736x/91/e1/b7/91e1b7ac2797d7299029056fe01ffc9b.jpg"
    },

    {
      id: 8,
      name: "13$",
      image:"https://i.pinimg.com/736x/4b/37/87/4b3787703d58a820e9e3f255799a58f1.jpg"
    },

    {
      id: 9,
      name: "10$",
      image:"https://i.pinimg.com/736x/c8/23/08/c82308a3c055b8922ddd930b2169a352.jpg"
    },

    {
      id: 10,
      name: "4$",
      image:"https://i.pinimg.com/736x/e5/50/73/e55073b82a7cb4452c7d43e821603257.jpg"
    },

    {
      id: 11,
      name: "12$",
      image:"https://i.pinimg.com/736x/f0/45/f0/f045f077afce89e380593449cde05581.jpg"
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
                    <UserDashboardPage name={Exercise.name} image={Exercise.image} />
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
