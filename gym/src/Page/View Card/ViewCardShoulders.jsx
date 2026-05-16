import { Box, Container, Grid, Typography } from "@mui/material";
import MenuCard from "../../component/Menus/MenuCard";
import Sidebar from "../../component/Sidebar/Sidebar";
import Navbar from "../../component/Navbar/Navbar";
import { useState } from "react";

export default function ViewCardShoulders() {
    const [open, setOpen] = useState(true);
    const toggleSidebar = () => {
      setOpen(!open);
    };
  const menuList = [
    {
      id: 0,
      name: "Upright Row (Cable)",
      image:"https://i.pinimg.com/1200x/a9/a4/d0/a9a4d0ad225cb4302f73c4ee3a01412d.jpg",
      video:"https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/02461201-Cable-Upright-Row_shoulder.mp4",
      text: "1. Set the pulley to the lowest position and attach a straight bar. 2. Select the appropriate weight. 3. Lean forward and grab the bar with an overhand grip (palms facing down). 4. Stand up and step back to lift the weight off its stack. 5. Bring your shoulders back, engage your abs, and put one foot slightly forward for support. 6. Take a breath and row the bar to your upper chest in one fluid motion. Exhale at the top. 7. Slowly extend your arms as you breathe in.",
    },

    {
      id: 1,
      name: "Lever Seated Shoulder Press",
      image:"https://i.pinimg.com/736x/26/a1/5a/26a15a61d21b0654ac6b021f82bc9946.jpg",
      video:"https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/04051201-Dumbbell-Seated-Shoulder-Press_Shoulders.mp4",
      text: "1. Set an adjustable gym bench at a close to 90-degree angle (almost upright back support). 2. Grab a pair of dumbbells and sit down. 3. Place the weights on top of your thighs. 4. Bring your shoulders back, engage your abs, and take a breath. 5. Lift the dumbbells and kick them up with your thighs. 6. Position the weights to your sides. 7. Take another breath and press the dumbbells up and in, tapping them at the top as you exhale. 8. Lower the dumbbells until your elbows are slightly lower than your shoulders, breathing in on the way down.",
    },

    {
      id: 2,
      name: "Seated Shoulder Press (Machine)",
      image:"https://i.pinimg.com/1200x/4e/c8/fb/4ec8fb732cc0e0a8003eee1ffc22b319.jpg",
      video:"https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/14541201-Lever-Seated-Shoulder-Press_Shoulders.mp4",
      text: "1. Select the appropriate load. 2. Sit down and bring your shoulder blades into the back support. 3. Plant your feet flat on the floor. 4. Grab the handles to your sides and keep your palms facing forward. 5. Take a breath and engage your abs. 6. Press the weight straight up until your arms are fully extended. Breathe out at the top. 7. Lower the weight to the starting position and breathe in.",
    },

    {
      id: 3,
      name: "Lateral Raise",
      image:"https://i.pinimg.com/1200x/3d/05/b5/3d05b59f45c6dae7a053b07d52befafb.jpg",
      video:"https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/03341201-Dumbbell-Lateral-Raise_shoulder.mp4",
      text: "1. Grab a pair of light dumbbells and stand tall. 2. Bring your shoulders back, engage your abs, and take a breath. 3. Lift both arms laterally until your elbows and wrists align with your shoulders. Exhale at the top. 4. Lower the dumbbells to your sides as you breathe in.",
    },

    {
      id: 4,
      name: "Front Raise",
      image:"https://i.pinimg.com/1200x/59/e0/f7/59e0f783593222d74640be021e2ab7d4.jpg",
      video:"https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/03101201-Dumbbell-Front-Raise_Shoulders.mp4",
      text: "1. Grab a pair of dumbbells and stand tall. 2. Position the dumbbells in front of your thighs with your palms facing back. 3. Bring your shoulders back and inhale. 4. Raise both dumbbells until they are at shoulder level. Exhale at the top. 5. Lower the dumbbells to your upper thighs as you breathe in.",
    },

    {
      id: 5,
      name: "Cable Standing Face Pull (with rope)",
      image:"https://i.pinimg.com/1200x/1c/57/27/1c57271f8e41797cbce08feb7fb0a1ab.jpg",
      video:"https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/77441201-Cable-Standing-Supinated-Face-Pull-(with-rope)_Sho.mp4",
      text: "1. Select a light load, set the pulley to a high position, and attach a rope. 2. Grab the rope with your thumbs facing the ceiling. 3. Take a step back to lift the weight off its stack, bring your shoulders back, and stagger your stance for extra support. 4. Take a breath and pull the rope to your face, splitting it by bringing your arms to your sides. Breathe out. 5. Extend your arms as you breathe in.",
    },

    {
      id: 6,
      name: "Overhead Press (Barbell)",
      image:"https://i.pinimg.com/1200x/0d/e1/98/0de1986e80eba3c85cf3853c8fc0b8d7.jpg",
      video:"https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/11651201-Barbell-Standing-Military-Press-(without-rack)_Shoulders.mp4",
      text: "1. Position the barbell at collarbone height on a rack or stand. 2. Grab the bar with an overhand grip (palms facing down), keeping your hands roughly shoulder-width apart. 3. Tuck yourself underneath the bar, retract your shoulders, engage your abs, and take a breath. 4. Unrack the barbell and take a couple of steps back. 5. Have your feet hip-width apart and the barbell at upper chest level. 6. Take another breath and press the bar in a straight vertical line, moving your head slightly back. 7. Press until your arms are straight and exhale. 8. Lower the bar in the same straight line until it ends up at neck level. Breathe in on the way down. 9. Once finished, move forward and carefully rack the barbell.",
    },

    {
      id: 7,
      name: "Lever Lateral Raise",
      image:"https://i.pinimg.com/1200x/fe/65/d1/fe65d1f66adf3d93013f23b7b50df15d.jpg",
      video:"https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/05841201-Lever-Lateral-Raise_shoulder.mp4",
      text: "1. Select the appropriate load and adjust the seat’s height. 2. Sit down and bring your shoulders back and into the back support. 3. Grab the handles on your sides and position your forearms flat against the pads. 4. Take a breath and bring your arms to your sides smoothly, going up until your elbows are at shoulder level. Breathe out. 5. Lower your arms to your sides and breathe in.",
    },

    {
      id: 8,
      name: "Rear Delt Reverse Fly (Machine)",
      image:"https://i.pinimg.com/736x/19/f3/b1/19f3b1851c41206eff53b7c93da0769f.jpg",
      video:"https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/06021201-Lever-Seated-Reverse-Fly_Shoulders.mp4",
      text: "1. Select the appropriate load. 2. Adjust the seat height. The handles should be at shoulder level when you're seated. 3. Sit down and grab the handles with your palms facing down. 4. Bring your shoulders back and take a breath. 5. Extend your arms to your sides and back as you breathe out. 6. Bring your arms to the starting position as you breathe in.",
    },

    {
      id: 9,
      name: "Plate Front Raise",
      image:"https://i.pinimg.com/1200x/dd/01/d7/dd01d7f4b5a021849ab0a3e1a7f54c49.jpg",
      video:"https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/08341201-Weighted-Front-Raise_Shoulders.mp4",
      text: "1. Grab a weight plate and position your hands on the sides with your arms straight. 2. Bring your shoulders back, have your feet in a comfortable stance, look forward, and take a breath. 3. Engage your abs and lift the plate in front of your body while keeping your arms straight. Breathe out. 4. Slowly lower the plate to your hips as you breathe in.",
    },

    {
      id: 10,
      name: "Single Arm Lateral Raise (Cable)",
      image:"https://i.pinimg.com/1200x/7a/92/b8/7a92b8bf0c77be117c09a62cc1474f9d.jpg",
      video:"https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/01921201-Cable-One-Arm-Lateral-Raise_Shoulders.mp4",
      text: "1. Select the appropriate load, set the pulley to the lowest position, and attach a handle. 2. Stand with your left side facing the cable attachment and grab the handle with your right hand. 3. Take a lateral step away to lift the weight off its stack and maintain a slight bend in your right arm. 4. Breathe in, engage your abs, and lift your arm to the side until the wrist and elbow align with your shoulder. Exhale at the top. 5. Slowly lower your arm as you breathe in. 6. Once finished training one side, turn your body 180 degrees, grab the handle with your left hand, and repeat.",
    },

    {
      id: 11,
      name: "Cable Front Raise",
      image:"https://i.pinimg.com/1200x/4e/c8/fb/4ec8fb732cc0e0a8003eee1ffc22b319.jpg",
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
                    <MenuCard name={Exercise.name} image={Exercise.image} video={Exercise.video} text={Exercise.text} />
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
