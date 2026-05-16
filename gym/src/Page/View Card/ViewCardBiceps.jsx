import { Box, Container, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MenuCard from "../../component/Menus/MenuCard";
import Navbar from "../../component/Navbar/Navbar";
import Sidebar from "../../component/Sidebar/Sidebar";
import { useState } from "react";
export default function ViewCardBiceps() {
  const [open, setOpen] = useState(true);
  const toggleSidebar = () => {
    setOpen(!open);
  };
  const navigate = useNavigate();
  const menuList = [
    {
      id: 0,
      name: "Hammer Curl",
      image:"https://i.pinimg.com/1200x/68/74/d3/6874d3d3bdcb3c885e3f52b385959f4a.jpg",
      video: "https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/03121201-Dumbbell-Hammer-Curl-(version-2)_Upper-Arms.mp4",
      text: "1. Grab a pair of dumbbells and stand tall. 2. Position your arms to your sides with your wrists neutral (palms facing your body). 3. Bring your shoulders back and take a breath. 4. Curl both dumbbells simultaneously, lifting them until your wrists are slightly higher than your elbows. Exhale. 5. Extend your arms fully as you breathe in.",
    },

    {
      id: 1,
      name: "Alternate Biceps Curl",
      image:"https://i.pinimg.com/1200x/c0/4e/bd/c04ebd15d65cb2889d7a4f9f7152e870.jpg",
      video:"https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/02941201-Dumbbell-Biceps-Curl_Upper-Arms.mp4",
      text: "1. Grab a pair of dumbbells and stand tall with your feet in a comfortable stance and shoulders retracted. 2. Have your wrists pointing forward and your arms extended. 3. Take a breath and curl both dumbbells simultaneously. Lift the weights until your wrists are slightly higher than your elbows and exhale. 4. Extend your arms slowly and breathe in on the way down.",
    },

    {
      id: 2,
      name: "Seated Incline Curl (Dumbbell)",
      image:"https://i.pinimg.com/1200x/b4/30/64/b43064d9ad9f42493dbcf37e653ab87c.jpg",
      video:"https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/03151201-Dumbbell-Incline-Biceps-Curl_Upper-Arms.mp4",
      text: "1. Adjust a gym bench at an incline of 65 to 75 degrees. 2. Grab a pair of dumbbells and sit down. 3. Have your arms to your sides with your palms facing one another. 4. Bring your shoulders back, engage your abs, and take a breath. 5. Curl both dumbbells, rotating your wrists out, and exhale. Lift the weights until your wrists are slightly higher than your elbows. Your palms should face the ceiling at the top position. 6. Extend your arms slowly and breathe in.",
    },

    {
      id: 3,
      name: "Lever Preacher Curl",
      image:"https://i.pinimg.com/1200x/b6/ea/17/b6ea17377640b9bb77068888388b5d0a.jpg",
      video:"https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/05921201-Lever-Preacher-Curl_Upper-Arms.mp4",
      text: "1. Select the appropriate load. 2. Adjust the seat’s height. You should be able to put your triceps against the pad while seated. 3. Sit down, extend your arms, and grab the handles. 4. Engage your abs and take a breath. 5. Bend your arms to lift the weight until your forearms are almost upright. Exhale at the top. 6. Slowly extend your arms as you breathe in.",
    },

    {
      id: 4,
      name: "Bicep Curl (Barbell)",
      image:"https://i.pinimg.com/736x/d8/bf/85/d8bf853b961b999ebe8318a80dd8ea25.jpg",
      video:"https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/00311201-Barbell-Curl_Upper-Arms.mp4",
      text: "1. Pick the bar up and hold it with a grip slightly wider than your hips. Your arms should be straight, with your palms facing forward. 2. Straighten your back, bring your chest out, take a breath, and curl the barbell, exhaling at the top. Don’t use body swinging and momentum to lift the bar; only your bicep strength. 3. Lower the bar slowly as you breathe in, extending your arms and stretching your biceps. 4. Repeat.",
    },

    {
      id: 5,
      name: "Biceps Curl",
      image:"https://i.pinimg.com/1200x/a3/ee/87/a3ee87bd489f2c3144bf8b22b3cce047.jpg",
      video:"https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/10321201-Lever-Alternate-Biceps-Curl_Upper-Arms_.mp4",
      text: "1. Select the correct load on the machine and adjust your seat’s height. 2. Sit down and grab the handles by your sides. 3. Bring your shoulders back, engage your abs, and take a breath. 4. Bend one arm to lift the handle. Curl until your hand is slightly higher than your elbow, and breathe out. 5. Extend your arm slowly as you breathe in. 6. Bend your opposite arm in the same way. 7. Keep alternating until you finish the set.",
    },

    {
      id: 6,
      name: "Cable One Arm Biceps Curl",
      image:"https://i.pinimg.com/1200x/85/70/7a/85707a06a7a7448b46010c39d2b4de06.jpg",
      video:"https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/48381201-Cable-Unilateral-Bicep-Curl_Upper-Arms_.mp4",
      text: "1. Set the pulleys at around mid-thigh height, attach handles, and select the load. 2. Grab the handles one by one and stand so the pulleys are behind you. 3. Take a couple of steps forward to lift the weights off their stacks and allow the weight to pull your elbows behind your torso. 4. With your chest out, lean your torso slightly forward and stagger your stance (one foot forward, the other one back). 5. Breathe in, engage your abs, and curl until your wrists are at elbow level. Squeeze your biceps and exhale. 6. Slowly extend your arms, allowing the handles to travel behind your body, and breathe in. 7. Repeat.",
    },

    {
      id: 7,
      name: "Concentration Curl",
      image:"https://i.pinimg.com/1200x/89/df/1c/89df1cbf6d280d9aea898cbc6a43b396.jpg",
      video:"https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/02971201-Dumbbell-Concentration-Curl_Upper-Arms.mp4",
      text: "1. Take a light dumbbell and sit on a flat gym bench. 2. Spread your legs wide and place the dumbbell between your legs. 3. Reach down and grab the weight with your right hand. 4. Lift the weight off the floor and place the right tricep (upper arm) against your inner leg. 5. Keep your chest out and body stable, take a breath, and straighten your arm. 6. Curl the dumbbell until your wrist is higher than your elbow. Keep your upper arm in the same position against your inner leg. Squeeze your muscle at the top as you breathe out. 7. Lower the dumbbell slowly and extend your elbow entirely as you breathe in. 8. Once finished, do the same number of reps for your other arm.",
    },

    {
      id: 8,
      name: "Dumbbell Reverse Spider Curl",
      image:"https://i.pinimg.com/736x/20/e2/7b/20e27b64fadf79ae83c878601df60ffd.jpg",
      video:"https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/03741201-Dumbbell-Prone-Incline-Curl_Upper-Arms.mp4",
      text: "1. Set a gym bench at a 45 to 60-degree incline. 2. Grab a pair of dumbbells and sit on the bench with your chest and stomach against the back support. Your arms should hang down with your palms facing forward. 3. Take a deep breath and curl both dumbbells, not moving your elbows forward. Exhale at the top. 4. Extend your arms as you breathe in.",
    },

    {
      id: 9,
      name: "Cable Rope Hammer Preacher Curl",
      image:"https://i.pinimg.com/736x/e8/3c/ce/e83cce9c24c5aae079805442ea804f60.jpg",
      video:"https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/04021201-Dumbbell-Seated-Preacher-Curl_Upper-Arms.mp4",
      text: "1. Set the height of the preacher bench seat. You should be able to comfortably place the back of your upper arms against the pad. 2. Grab a pair of dumbbells and sit down. 3. Place your arms on the pad, bend your elbows, and have your wrists facing your body. 4. Engage your abs and take a breath. 5. Lower the dumbbells until your arms are straight. 6. Curl the weights to the top position, stopping when your forearms are almost upright. Breathe out.",
    },

    {
      id: 10,
      name: "EZ Bar Biceps Curl",
      image:"https://i.pinimg.com/1200x/b4/72/44/b472440e68a373d4ef110262bddfe98e.jpg",
      video:"https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/04471201-EZ-Barbell-Curl_Upper-Arms.mp4",
      text: "1. Load an EZ (curved) bar and grab it with an even underhand grip (palms facing forward). 2. Stand tall with your feet in a comfortable stance, knees bent slightly, and shoulders retracted. 3. Take a breath and lift the bar by engaging your biceps. 4. Move the weight up until your wrists are slightly higher than your elbows and breathe out. 5. Pause for a moment and extend your arms as you breathe in.",
    },

    {
      id: 11,
      name: "Overhead Curl (Cable)",
      image:"https://i.pinimg.com/736x/df/fd/32/dffd32384f487ef04f573fa5221f1419.jpg",
      video:"https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/16361201-Cable-Overhead-Curl_Upper-Arms.mp4",
      text: "1. Set the pulleys of a double cable machine in the highest position. 2. Select the appropriate weight on both stacks and attach handles to the pulleys. 3. Grab the two handles and stand in the middle of the cable machine with your arms straight and to your sides. 4. Bring your shoulders back and engage your abs. 5. Simultaneously bend your arms, bringing the handles to the sides of your head as you breathe out. 6. Slowly extend your arms as you inhale.",
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
