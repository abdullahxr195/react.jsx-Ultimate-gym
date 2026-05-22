import { Box, Container, Grid, Typography } from "@mui/material";
import MenuCard from "../../component/Menus/MenuCard";
import Sidebar from "../../component/Sidebar/Sidebar";
import Navbar from "../../component/Navbar/Navbar";
import MenuList from "../../component/Menus/MenuList";
import { useState } from "react";
import Footer from "../../component/Footer/footer";
import ProductList from "./ProductList";

export default function Product() {
  const [open, setOpen] = useState(true);
  const toggleSidebar = () => {
    setOpen(!open);
  };

  const menuList = [
    {
      id: 0,
      name: "Creatine",
      image:"https://i.pinimg.com/736x/4d/48/22/4d4822dbc016ccc4eefe1ec173a8c1b6.jpg",
      text: "What is creatine? Creatine is a natural compound found in the body, most of which is stored in the muscles, and helps produce rapid energy during vigorous exercises such as lifting weights and fast running. It is also found in some foods such as meat and fish, and is available as a nutritional supplement, the most famous of which is Creatine Monohydrate.",
        text2:""
    },

    {
      id: 1,
      name: "Protein",
      image:"https://i.pinimg.com/736x/bd/b4/f5/bdb4f59d93a6ac09bdf7f17936c0d662.jpg",
      text: "Protein is an essential nutrient that helps build and repair muscles and supports overall body health. It can be obtained from foods such as meat, eggs, fish, and milk, or from supplements like Whey Protein. Protein is important for athletes and gym users because it helps increase muscle mass and improve recovery after exercise. It is recommended to consume enough protein daily along with proper exercise, healthy food, and enough water.",
       
    },

    {
      id: 2,
      name: "Glutamine",
      image:"https://i.pinimg.com/1200x/6c/51/12/6c5112af0d1725f60e9279ae3467eec9.jpg",
      text: "Glutamine is an amino acid that helps support muscle recovery and reduce fatigue after intense exercise. Bodybuilders use it to aid muscle recovery and support the immune system, especially during vigorous exercise or drying periods. It can be obtained from food such as meat and eggs, or as a nutritional supplement, and is often taken after exercise or before bed.",
    },

    {
      id: 3,
      name: "BCAA (Branched-Chain Amino Acids)",
      image:"https://i.pinimg.com/1200x/31/77/f7/3177f71e2251417c05c2962c4f4c9674.jpg",
      text: "BCAA is a group of essential amino acids consisting of leucine, isoleucine, and valine, and helps support muscle building and reduce muscle fatigue during exercise. Athletes and bodybuilders use them to improve recovery and reduce muscle breakdown, especially during intense exercise or drying periods. It is often taken before, during, or after exercise, and can also be obtained from protein-rich foods such as meat, eggs, and milk products",
    },

    {
      id: 4,
      name: "Caffeine Supplements",
      image:"https://i.pinimg.com/736x/b3/d0/fe/b3d0fec12d9eecd9f5947638f7aa0a8b.jpg",
       text: "Caffeine is a caffeine-containing supplement used to increase energy and concentration and reduce fatigue during exercise. It is used by bodybuilders and athletes to improve physical performance and increase activity and endurance, especially before exercise. It is usually taken about 20 to 40 minutes before exercise, but it should not be overdone because it may cause insomnia, increased heart rate, or stress in some people.",
    },

    {
      id: 5,
      name: "EAA (Essential Amino Acids)",
      image:"https://i.pinimg.com/1200x/db/34/26/db3426ecc66eb876b138a5b0c8abfac6.jpg",
       text: "EAA is a group of essential amino acids that the body needs but cannot produce on its own, so it must be obtained from food or nutritional supplements. It helps build muscle, improve recovery, and reduce muscle breakdown after exercise. Bodybuilders use it to support muscle performance, especially during intense exercise or drying periods, and it can be taken before, during, or after exercise.",
    },

    {
      id: 6,
      name: "Vitamin D3",
      image:"https://i.pinimg.com/736x/45/f9/35/45f935759a0bdd80561c653a466638b0.jpg",
      text: "Vitamin D3 is a supplement that helps the body absorb calcium, strengthens bones and teeth, and supports the immune system and muscle health. Athletes and bodybuilders use it to help improve strength and energy and maintain a healthy body, especially when there is a vitamin D deficiency due to lack of sun exposure. It is usually taken in specific doses according to the body's needs, and it is preferable not to overuse it without consulting a specialist.",
    },

    {
      id: 7,
      name: "L-Carnitine",
      image:"https://i.pinimg.com/1200x/32/d9/2d/32d92d3f54c35748484cb6e57df9afa5.jpg",
      text: "L-Carnitine is a supplement that helps the body transport fat to cells for conversion into energy, so it is often used for drying and burning fat. It is used by athletes and bodybuilders to support energy, improve performance during exercise, and reduce fatigue. It can be taken before exercise, and is best used with diet and regular exercise for best results.",
    },

    {
      id: 8,
      name: "Beta-Alanine",
      image:"https://i.pinimg.com/1200x/69/4f/57/694f571af72cb0b1b77eb875d1d8772f.jpg",
      text: "Beta-Alanine is a nutritional supplement that helps improve muscle endurance and reduce fatigue during high-intensity exercise. It is used by bodybuilders and athletes to increase the ability to perform exercises for a longer period and improve athletic performance. One of its most common side effects is a slight tingling or temporary numbness in the skin after taking it, which is normal for some people.",
    },

    {
      id: 9,
      name: "Omega-3",
      image:"https://i.pinimg.com/1200x/6e/5f/82/6e5f8209de6a2c59c7a940e4ee415e57.jpg",
      text: "Omega-3 Fatty Acids are healthy fats that are good for the heart, brain, and joints, and are found largely in fish oil and fatty fish. They are used by athletes and bodybuilders to support joint health, reduce inflammation, and improve recovery after exercise. It also helps support general health and improve body functions, and is often taken daily with food.",
    },

    {
      id: 10,
      name: "Mass Gainer",
      image:"https://i.pinimg.com/736x/29/06/30/290630a6df65870e6e0ca8d0df61b055.jpg",
      
      text: "Mass Gainer is a high-calorie nutritional supplement that contains protein, carbohydrates, and sometimes fat, and is used to gain weight and build muscle mass. It is used by people who have difficulty eating enough calories or who want to increase their muscle size quickly. It is often taken after exercise or between meals, and is best used in conjunction with resistance training and a proper diet for best results.",
    },

    {
      id: 11,
      name: "Multivitamins",
      image:"https://i.pinimg.com/736x/84/2c/fc/842cfcaf36cba662687023e13890bf64.jpg",
      text: "Multivitamin is a supplement that contains a group of essential vitamins and minerals that the body needs to maintain health and energy and support various body functions. Athletes and bodybuilders use them to help compensate for any nutritional deficiencies, support immunity, and improve overall performance. It is usually taken once daily with food, but it does not replace a healthy and balanced diet.",
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
                    <ProductList
                      name={Exercise.name}
                      image={Exercise.image}
                      text={Exercise.text}
                    />
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
