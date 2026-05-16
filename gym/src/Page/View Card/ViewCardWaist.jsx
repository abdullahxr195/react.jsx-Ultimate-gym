

import { Box, Container, Grid, Typography } from "@mui/material";
import MenuCard from "../../component/Menus/MenuCard";
import { useState } from "react";
import Sidebar from "../../component/Sidebar/Sidebar";
import Navbar from "../../component/Navbar/Navbar";

export default function ViewCardWaist() {
    const [open, setOpen] = useState(true);
    const toggleSidebar = () => {
      setOpen(!open);
    };
  const menuList = [
    {
      id: 0,
      name: "Crunch",
      image:"https://i.pinimg.com/1200x/91/60/2d/91602dfc2b46eea3530f6915d0f3fc17.jpg",
      video:"https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/02741201-Crunch-Floor-m_waist.mp4",
      text:"1. Lie on the floor, bend your knees, and place your feet flat on the floor. 2. Bring your arms up and place your fingertips behind your head. 3. Engage your abs and take a breath. 4. Crunch by bending your torso, lifting your shoulder blades several inches off the floor. Exhale at the top. 5. Lower yourself slowly and breathe in.",
    },

    {
      id: 1,
      name: "Crunch (Machine)",
      image:"https://i.pinimg.com/1200x/0a/26/e4/0a26e4031b126d32b4261f88473e3ef7.jpg",
      video:"https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/05951201-Lever-Seated-Crunch-(chest-pad).mp4",
      text:"1. Select the appropriate load. 2. Sit down on the machine. Secure your ankles on the bottom pads, have the middle pad against your lower back, and position your chest on the top pad. 3. Grab the handles for support. 4. Take a breath and flex your abs to push the top pad forward. Exhale. 5. Release as you breathe in.",
    },

    {
      id: 2,
      name: "Cable Kneeling Crunch",
      image:"https://i.pinimg.com/1200x/d8/48/4c/d8484c779529e7c469c75b4713a6c7a8.jpg",
      video:"https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/01751201-Cable-Kneeling-Crunch_Waist.mp4",
      text:"1. Grab a rope attachment with both hands and have your thumbs facing up. 2. Kneel, lean forward, and position the rope behind your head. Keep your hands close to your neck. 3. Once in position, engage your midsection. 4. Initiate the crunch by taking a breath and flexing your abs. Focus on crunching your torso instead of simply moving at the hips. 5. Hold for a moment as you exhale. 6. Slowly raise your torso to bring yourself to the starting position as you breathe in.",
    },

    {
      id: 3,
      name: "Front Plank",
      image:"https://i.pinimg.com/1200x/32/c9/33/32c933b1d094e0dcc49140dc823a6552.jpg",
      video:"https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/04631201-Front-Plank-m_waist.mp4",
      text:"1. Get down on the floor. 2. Extend your body. Support your lower body on your toes and your upper body on your forearms. 3. Keep your shoulders neutral and abs engaged. 4. Hold the position for as long as possible, breathing steadily as you do.",
    },

    {
      id: 4,
      name: "Sit Up",
      image:"https://i.pinimg.com/1200x/59/b4/c4/59b4c436c02ddb25511073293bf7f681.jpg",
      video:"https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/00011201-3-4-Sit-up_Waist.mp4",
      text:"1. Place an exercise mat on the floor and lie on it. 2. Bend your knees and plant your feet flat on the floor. 3. Position your hands in front of your face or behind your head. 4. Take a breath and crunch your torso by engaging your abs, lifting your upper body to an upright position. 5. Breathe out at the top position and slowly lower your torso as you breathe in.",
    },

    {
      id: 5,
      name: "Heel Taps",
      image:"https://i.pinimg.com/1200x/d8/17/cc/d817cca5c1d46055bba1e4f72905c6b3.jpg",
      video:"https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/00061201-Alternate-Heel-Touchers_waist.mp4",
      text:"1. Lie on the floor, bend your knees, bring your feet together, and plant them flat. 2. Position your arms to your sides and take a breath. 3. Crunch your torso to the left, tapping your left ankle with your hand. 4. Extend your upper body, take another breath, and crunch to the right. 5. Alternate between left and right until you’re done.",
    },

    {
      id: 6,
      name: "Ab Wheel",
      image:"https://i.pinimg.com/1200x/81/c6/ac/81c6ac9bf4e3de344451a42286cb89be.jpg",
      video:"https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/08571201-Wheel-Rollout_Waist.mp4",
      text:"1. Grab an ab wheel and get down on your knees. 2. Lean forward and place the ab wheel on the floor while holding it firmly with both hands. 3. Engage your abs and take a breath. 4. Roll the ab wheel forward as you extend your body. 5. Move forward as much as your ab strength allows and roll the wheel back to the starting position. Exhale.",
    },

    {
      id: 7,
      name: "Torso Rotation",
      image:"https://i.pinimg.com/736x/57/bf/06/57bf06b852f01fbba9dfad6d03a2091c.jpg",
      video:"https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/100651201-Lever-Torso-Rotation-(male)_Waist_.mp4",
      text:"1. Select the appropriate weight. 2. Adjust the seat height so that you can comfortably place your forearms on the pads at your sides and grab the handles. 3. With your knees bent, position your shins against the bottom pads and push forward to create whole-body rigidity. 4. Breathe in and twist your lower body to the right as you exhale. It should be a fluid motion. 5. Slowly return your lower body to the starting position as you breathe in. 6. Rotate your legs to the left and breathe out again. 7. Continue alternating from left to right, breathing steadily as you do reps.",
    },

    {
      id: 8,
      name: "Hanging Knee Raise",
      image:"https://i.pinimg.com/1200x/21/86/e7/2186e7a33fda75a9ff3f1f2a8eef435a.jpg",
      video:"https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/98191201-Hanging-Knee-Raise-(male)_Waist_.mp4",
      text:"1. Reach up and grab a pull-up bar with an overhand grip (palms facing forward). Your hands should be shoulder-width apart. 2. Bring your legs together, engage your abs, and retract your shoulders. 3. Take a breath and lift your legs, bending your knees. 4. Raise your legs as high as possible in one fluid motion and exhale. 5. Slowly extend your legs as you breathe in. Don’t let your lower back arch.",
    },

    {
      id: 9,
      name: "Bicycle Crunch (male)",
      image:"https://i.pinimg.com/1200x/72/d6/ed/72d6eddff1c306adf6e5c9427b9fa07d.jpg",
      video:"https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/01471201-Bycicle-Twisting-Crunch_Waist.mp4",
      text:"1. Lie on the floor, lift your legs off the ground, and extend them in the air. 2. Place your fingertips behind your head or neck. 3. Take a breath, engage your midsection, and crunch your upper body. 4. Twist your upper body, bringing your right elbow to your left leg. Simultaneously bend your left knee and get it closer to the opposite elbow. 5. Hold for a moment as you breathe out. 6. Extend your body and breathe in. 7. Take your left elbow to your right knee. 8. Keep alternating until you complete the set.",
    },

    {
      id: 10,
      name: "45 Degree Side Bend",
      image:"https://i.pinimg.com/1200x/a3/b2/d7/a3b2d7055eee87e2fc35c989ac59430f.jpg",
      video:"https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/00021201-45-Side-Bend_Waist.mp4",
      text:"1. Stand sideways on a back hyperextension machine. Your right upper thigh should be against the pad, and your feet should be secure. 2. Engage your abs and place your hands behind your head. 3. Take a breath and bend your torso to the right. 4. Squeeze your obliques to bend your torso to the left and exhale. 5. Once finished, rotate your body 180 degrees and do the same number of reps.",
    },

    {
      id: 11,
      name: "Hanging Straight Leg Hip Raise",
      image:"https://i.pinimg.com/736x/64/3b/07/643b075dcfc21b3117f13ff2af4d05d7.jpg",
      video:"https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/29631201-Captains-Chair-Straight-Leg-Raise_Waist-FIX_.mp4",
      text:"1. Position yourself on a captain’s chair. Have your forearms flat against the horizontal pads and grab the handles for support. 2. Bring your feet together and engage your abs to position your lower back against the back support. 3. Take a breath and raise your legs in one fluid motion, going as high as possible. Exhale at the top. 4. Slowly lower your legs to the starting position and keep the tension on your abs. Breathe in on the way down, and don’t let your lower back arch.",
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
                    <MenuCard name={Exercise.name} image={Exercise.image}  video={Exercise.video} text={Exercise.text}/>
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












