import { Container, Grid, Typography } from "@mui/material";
import MenuCard from "../MenuCard/MenuCard.jsx";
export default function MenuList() {
  const menuList = [
    {
      id: 1,
      name: "chest",
      image:"https://i.pinimg.com/1200x/75/c1/23/75c123dc30439199362e5801d05375eb.jpg"
    },

    {
      id: 2,
      name: "back",
      image:"https://i.pinimg.com/736x/e5/80/61/e58061c1bb0e7b253523b3e448b00d46.jpg"
    },

    {
      id: 3,
      name: "Biceps",
      image:"https://i.pinimg.com/736x/33/76/15/3376157894be15d51c0646cc3dbe3dac.jpg"
    },

    {
      id: 4,
      name: "Triceps",
      image:"https://i.pinimg.com/1200x/f0/54/58/f054584703c1e0819985c85b5704d657.jpg"
    },

    {
      id: 5,
      name: "Shoulders",
      image:"https://i.pinimg.com/1200x/cf/23/77/cf2377c838ef93a691407a48ef9ce660.jpg"
    },

    {
      id: 6,
      name: "Legs",
      image:"https://i.pinimg.com/736x/f7/63/1a/f7631ae1e74a699f3d245f096375fe77.jpg"
    },

    {
      id: 7,
      name: "Ads",
      image:"https://i.pinimg.com/1200x/81/26/a5/8126a5dbfbc1b7fc65da4aec3cd32412.jpg"
    },

    {
      id: 8,
      name: "forearms",
      image:"https://i.pinimg.com/736x/45/60/01/4560015b441a15962ef7a1d2601e5b89.jpg"
    },

    {
      id: 9,
      name: "Calves",
      image:"https://i.pinimg.com/736x/0f/71/ea/0f71ea61894d62551bac90692fe82424.jpg"
    },

    {
      id: 10,
      name: "Neck",
      image:"https://i.pinimg.com/1200x/b9/ef/75/b9ef754e3bcd21744e30738be6f2caea.jpg"
    },

    {
      id: 11,
      name: "Glutes",
      image:"https://i.pinimg.com/1200x/0e/e2/25/0ee225dadde0096ef9f595cc52300100.jpg"
    },

    {
      id: 12,
      name: "Kardio",
      image:"https://i.pinimg.com/736x/e0/74/fb/e074fbc9d3166158a4a4faa84ccfd13d.jpg"
    },
  ];

  return (
    <>
      <Container sx={{ py: 8 }}>
        <Typography variant="h1">
          
        </Typography>
        <Grid container spacing={6}>
          {menuList.map((Exercise) => {
            return(
              <Grid item key={Exercise.id}>
                <MenuCard name={Exercise.name} image={Exercise.image} />
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </>
  );
}
