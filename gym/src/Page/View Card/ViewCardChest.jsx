import { Box, Container, Grid, Typography } from "@mui/material";
import MenuCard from "../../component/Menus/MenuCard";
import { useState } from "react";
import Sidebar from "../../component/Sidebar/Sidebar";
import Navbar from "../../component/Navbar/Navbar";
export default function ViewCardChest() {
    const [open, setOpen] = useState(true);
    const toggleSidebar = () => {
      setOpen(!open);
    };
  const menuList = [
    {
      id: 0,
      name: "Press Plano Hammer",
      image:"https://i.pinimg.com/736x/5a/d5/6d/5ad56d47c0d43c0accea1db38b5fd411.jpg",
      video:"https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/05771201-Lever-Chest-Press_Chest.mp4",
      text: "1. Select the appropriate load on the machine. 2. Adjust the seat height. The handles should be slightly below your lower chest when you sit down. 3. Sit down, grab the handles, bring your shoulders back, and engage your abs. Have your feet flat on the floor. 4. Take a breath and press until your arms extend fully. Exhale. 5. Bend your arms slowly as you breathe in.",
    },

    {
      id: 1,
      name: "Bench Press",
      image:"https://i.pinimg.com/736x/02/ba/52/02ba5265abe66655aa94efb381428680.jpg",
      video:"https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/00251201-Barbell-Bench-Press_Chest.mp4",
      text: "1. Lie on the bench. 2. Extend your arms and grab the bar evenly, having your hands slightly wider than shoulder-width apart. 3. Bring your shoulder blades back and dig them into the bench. 4. Arch your lower back and plant your feet flat on the floor. 5. Take a breath, unrack the bar, and bring it over your chest. 6. Inhale again and lower the barbell to your lower chest, tapping it slightly. 7. Hold for a moment and press the bar until your elbows are straight. Exhale.",
    },

    {
      id: 2,
      name: "Machine Chest Fly",
      image:"https://i.pinimg.com/1200x/6d/99/ed/6d99ed8341629f7fc40eb361725d65dd.jpg",
      video:"https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/05961201-Lever-Seated-Fly_Chest.mp4",
      text: "1. Select the appropriate load and adjust the seat height. The machine’s handles should be at chest level when you sit. 2. Sit down, bring your shoulders back, and reach to the sides to grab the handles. 3. Engage your abs and take a breath. 4. Squeeze your chest and bring your arms in, tapping your knuckles lightly in front of your chest as you breathe out. 5. Bring your arms to your sides, feeling your chest muscles stretch. Breathe in.",
    },

    {
      id: 3,
      name: "Incline Dumbbell Bench Press",
      image:"https://i.pinimg.com/1200x/76/34/7f/76347f216977f703a7c67d2a5ed04c72.jpg",
     video:"https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/03141201-Dumbbell-Incline-Bench-Press_Chest.mp4",
      text: "1. Set the incline of a bench at 45 degrees, grab a pair of dumbbells, and sit down. 2. Place the dumbbells on top of your thighs, and lie back as you kick the weights up and over your torso. 3. Bring the dumbbells to your sides, plant your feet on the floor, retract your shoulders, and take a breath. Keep your elbows somewhat tucked in. 4. Press both dumbbells toward the ceiling, tapping them lightly at the top. Breathe out. 5. Lower the weights to your sides, breathing in on the way down.",
    },

    {
      id: 4,
      name: "Fly",
      image:"https://i.pinimg.com/1200x/b5/f0/d0/b5f0d04d8a7eee08c82aa5ab7b495b13.jpg",
      video:"https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/03081201-Dumbbell-Fly_Chest.mp4",
      text: "1. Grab a pair of light dumbbells and sit on the edge of a flat gym bench. 2. Place the weights on your thighs and lie back, keeping the dumbbells close to your body. 3. Extend your arms and position the dumbbells over your chest with your palms facing one another. 4. Plant your feet on the floor and bring your shoulders back. 5. Take a breath. 6. Lower your arms to your sides until they align with your torso. 7. Bring your arms in, tapping the dumbbells over your chest as you exhale.",
    },

    {
      id: 5,
      name: "Lever Incline Chest Press",
      image:"https://i.pinimg.com/1200x/51/54/ab/5154ab8b8d042cd933c563ed390c4cdc.jpg",
      video:"https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/13001201-Lever-Decline-Chest-Press_Chest-FIX_.mp4",
      text: "1. Load the machine appropriately. 2. Set the seat height for the handles to be just below chest level when you sit down. 3. Sit down and grab the handles. Keep your elbows tucked at your sides. 4. Retract your shoulder blades, plant your feet on the floor, squeeze your abs, and inhale. 5. Press the handles forward and down, fully extending your elbows and exhaling. Pause briefly and squeeze your chest. 6. Slowly bend your arms as you breathe in.",
    },

    {
      id: 6,
      name: "Cable Low Fly",
      image:"https://i.pinimg.com/1200x/0c/99/8b/0c998b47168c028a4ac378e317cf99b9.jpg",
      video:"https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/01791201-Cable-Low-Fly_Chest.mp4",
      text: "1. Select the appropriate load. 2. Set the pulleys in the lowest position and attach handles. 3. Grab both handles one at a time and stand in the middle with your arms to your sides. 4. Stagger your stance, bring your shoulders back, and squeeze your abs. 5. Take a breath and bring your arms up and in, tapping the handles lightly as you squeeze your chest and breathe out. 6. Slowly bring your arms to your sides as you breathe in.",
    },

    {
      id: 7,
      name: "Assisted Chest Dip",
      image:"https://i.pinimg.com/1200x/e7/45/d6/e745d6fcd41963a8a6d36c4b66c009a9.jpg",
     video:"https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/00091201-Assisted-Chest-Dip-(kneeling)_Chest.mp4",
      text: "1. Select the correct weight on the chest dip machine. 2. Grab the pair of handles and place your knees over the pads. 3. Extend your arms, bring your shoulders back, and squeeze your abs. 4. Take a breath and lower yourself by bending your elbows. 5. Descend until your elbows are at roughly 90 degrees, and push yourself back to the top as you exhale.",
    },

    {
      id: 8,
      name: "Bench Press (Dumbbell)",
      image:"https://i.pinimg.com/1200x/f8/a8/1f/f8a81f765a1f5cdd69341f8ea672606c.jpg",
     video:"https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/02891201-Dumbbell-Bench-Press_Chest.mp4",
      text: "1. Grab a pair of dumbbells, sit on a flat gym bench, and place both weights on top of your thighs. 2. Bring your shoulders back, engage your abs, take a breath, and flex your arms. 3. Kick both dumbbells up with your thighs as you lie back. 4. With your arms straight and dumbbells over your chest, dig your shoulder blades into the bench and place your feet flat on the floor. 5. Take another breath and lower both dumbbells to your sides. Keep your elbows somewhat tucked. 6. Lower the weights until your elbows are at torso level. 7. Press both dumbbells to the starting position, bringing them together as you exhale.",
    },

    {
      id: 9,
      name: "Cable Standing Chest Press",
      image:"https://i.pinimg.com/1200x/08/38/26/0838269c9428999234ab5d21b3d99dd0.jpg",
      video:"https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/09201201-Band-Standing-Chest-Press-(female)_Chest_.mp4",
      text: "1. Take an open-ended resistance band with handle attachments. 2. Anchor the band on something sturdy at chest height. A squat rack can work. 3. Face away from the anchor point and grab both handles, raising your arms high and keeping your elbows tucked. 4. Take a couple of steps forward to stretch the band and create some tension. 5. Bring your shoulders back, stagger your stance, engage your midsection, and take a breath. 6. Press the band forward and extend your arms fully as you exhale. 7. Bend your arms, bringing your knuckles to the sides of your chest, as you breathe in.",
    },

    {
      id: 10,
      name: "Decline Bench Press (Smith Machine)",
      image:"https://i.pinimg.com/1200x/36/28/f0/3628f0d60465303b194edf8dd1ab64ba.jpg",
      video:"https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/07531201-Smith-Decline-Bench-Press_Chest.mp4",
      text: "1. Position a decline bench underneath a Smith machine. The bench should be positioned so that the bar is above your lower chest when you lie back. 2. Load the bar appropriately and have it at a height where you can reach it from a lying position. 3. Lie back, grab the bar with a double overhand grip, and retract your shoulders. 4. Unrack the bar by extending your arms. 5. Take a breath and lower the bar to your chest. 6. Press the bar to the top position and exhale. 7. Once finished, rack the bar carefully and stand up.",
    },

    {
      id: 11,
      name: "Push-up",
      image:"https://i.pinimg.com/1200x/f9/1e/25/f91e252ccec48090bf58266cc20b0742.jpg",
      video:"https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/06621201-Push-up-m_Chest.mp4",
      text: "1. Get down on all fours. 2. Extend your body into a push-up position. Have your hands flat on the floor, fingertips rotated slightly out, and shoulder blades retracted. 3. Have your legs straight and your toes supporting your lower body. Your ankles, knees, hips, and shoulders should be in a straight line. 4. Take a breath and lower yourself by bending your elbows. 5. Descend as low as possible––ideally, until your face is an inch or two from the floor. 6. Hold the bottom position for a moment and press yourself back to the top as you exhale.",
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
                    <MenuCard name={Exercise.name} image={Exercise.image} video={Exercise.video}  text={Exercise.text}/>
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

