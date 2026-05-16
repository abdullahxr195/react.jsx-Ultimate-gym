

import { Box, Container, Grid, Typography } from "@mui/material";
import MenuCard from "../../component/Menus/MenuCard";
import Sidebar from "../../component/Sidebar/Sidebar";
import Navbar from "../../component/Navbar/Navbar";
import { useState } from "react";

export default function ViewCardLegs() {
    const [open, setOpen] = useState(true);
    const toggleSidebar = () => {
      setOpen(!open);
    };
  const menuList = [
    {
      id: 0,
      name: "Lever Leg Extension",
      image:"https://i.pinimg.com/1200x/cb/d6/72/cbd672eec0d13134ddd70697881aa97d.jpg",
      video:"https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/05851201-Lever-Leg-Extension_Thighs.mp4",
      text: "1. Select the appropriate load. 2. Adjust the pad to be against your lower legs, just above your feet when seated. 3. Sit down, grab the handles by your sides, place your lower shins against the pad, and retract your shoulders. 4. Take a breath and straighten your legs by engaging your quadriceps. 5. Lift the weight until your knees straighten, and breathe out. 6. Hold for a moment and bend your knees slowly as you breathe in.",
    },

    {
      id: 1,
      name: "Sled 45° Leg Wide Press",
      image:"https://i.pinimg.com/736x/e0/52/59/e05259675f0a51b47e34832f11658b23.jpg",
      video:"https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/07391201-Sled-45-Leg-Press_Hips.mp4",
      text: "1. Add the appropriate weight to the leg press machine and sit down. 2. Lift your legs and plant your feet flat on the platform. Have your feet in a comfortable position with your toes pointing slightly out. 3. Grab the handles to your sides, bring your shoulders back, and engage your abs. 4. Press the platform and straighten your legs while rotating the handles to remove the safety pins. 5. Take another breath and lower the platform by bending your knees. 6. Hold the bottom position for a moment and press the platform away as you exhale. 7. Once finished, straighten your legs, rotate the handles to put the safety pins on, and rest.",
    },

    {
      id: 2,
      name: "Full Squat",
      image:"https://i.pinimg.com/1200x/d9/1c/3a/d91c3ab18a7673bc33d37caac1a669bd.jpg",
      video:"https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/00431201-Barbell-Full-Squat_Thighs.mp4",
      text: "1. Position a barbell behind your neck and place it on your upper back muscles. 2. Grab the bar evenly for support. 3. Bring your shoulders back and position your feet in a comfortable stance with your toes pointing slightly out. 4. Engage your abs and take a breath. 5. Squat down and keep your heels in contact with the floor. 6. Descend as much as your mobility allows, hold for a moment, and press through your heels to move up. 7. Exhale near the top.",
    },

    {
      id: 3,
      name: "Seated Leg Curl (Machine)",
      image:"https://i.pinimg.com/1200x/4e/59/98/4e59984a2531c4a3a575956fc9d6b6e0.jpg",
      video:"https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/05991201-Lever-Seated-Leg-Curl_Thighs.mp4",
      text: "1. Select the appropriate load. 2. Adjust the pad position. It should be against your Achilles' heels as you sit down. 3. Sit down, position the back of your lower legs against the pad, and grab the handles at your sides. 4. Bring your shoulders back, engage your abs, and inhale. 5. Bend your knees by contracting your hamstrings and breathe out. 6. Hold for a moment and slowly extend your knees as you breathe in.",
    },

    {
      id: 4,
      name: "Straight Leg Deadlift",
      image:"https://i.pinimg.com/1200x/a7/3a/24/a73a2401417634984dff476926bb1412.jpg",
      video:"https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/01161201-Barbell-Straight-Leg-Deadlift_Thighs.mp4",
      text: "1. Stand in front of a loaded barbell. 2. Position your feet underneath and have your shins a couple of inches from the bar. 3. Lean forward by hinging at the hips. 4. Grab the bar with a double overhand grip (palms facing back). 5. Bring your shoulders back and engage your abs. Keep your legs straight. 6. Take a breath and pull the bar in a straight vertical line while pushing through your heels. 7. Squeeze your glutes at the top and exhale. 8. Slowly lower the bar in the same straight line and breathe in on the way down or before initiating the next rep.",
    },

    {
      id: 5,
      name: "Lever Lying Leg Curl",
      image:"https://i.pinimg.com/736x/d1/55/f9/d155f92fd94575111b610d1a0bbff45a.jpg",
      video:"https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/05861201-Lever-Lying-Leg-Curl_Thighs.mp4",
      text: "1. Select the appropriate load and adjust the pad to be over your Achilles tendon (above the heel) when you lie down. 2. Lie down, grab the handles, and place the back of your lower legs against the pad. 3. Take a breath and engage your hamstrings to curl your legs, lifting the weight. 4. Curl until your lower legs are almost vertical and exhale at the top. 5. Hold for a moment and extend your knees slowly as you inhale.",
    },

    {
      id: 6,
      name: "Single Leg Romanian Deadlift (Barbell)",
      image:"https://i.pinimg.com/1200x/23/64/d0/2364d0ae4daab71a664a9aa8e393d5df.jpg",
      video:"https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/17561201-Barbell-Single-Leg-Deadlift_Hips_.mp4",
      text: "1. Grab a barbell with a double overhand grip (palms facing back). Your hands should be shoulder-width apart. 2. Stand tall with your feet close, back straight, shoulders back, and abs engaged. 3. Take a breath and lean forward by hinging at the hip. Simultaneously raise your right foot off the floor, bringing the right leg back for balance. 4. Lean forward until you feel a stretch in your left hamstring. Lower the barbell in a straight line, keeping it close to your body. 5. Straighten your body and bring your right leg forward as you exhale. 6. Take another breath and repeat. 7. Once finished training one side, do the same number of reps by raising your left foot and extending the leg back.",
    },

    {
      id: 7,
      name: "Hip Thrust",
      image:"https://i.pinimg.com/736x/00/c6/9f/00c69f716bf3d49a4d5e2fb99c2a89e4.jpg",
      video:"https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/10601201-Barbell-Hip-Thrust_Hips-FIX_.mp4",
      text: "1. Sit on the floor and position a loaded barbell over your hips. 2. Place your upper back against the edge of a flat gym bench. 3. Bend your knees and plant your feet flat on the floor. 4. Place your hands over the barbell and grab it firmly. 5. Engage your abs and take a breath. 6. Thrust the barbell toward the ceiling by squeezing your buttocks and pushing through your heels. Exhale at the top. 7. Lower your hips to the floor and breathe in.",
    },

    {
      id: 8,
      name: "Dumbbell Lunge",
      image:"https://i.pinimg.com/736x/ad/fd/58/adfd5843a204ab3edc730f621c9f0a9f.jpg",
      video:"https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/03361201-Dumbbell-Lunge_Hips.mp4",
      text: "1. Grab a pair of dumbbells, hold them to your sides, and stand tall. 2. Bring your shoulders back, engage your abs, and have your feet in a comfortable stance. 3. Take a breath and lunge forward, plating one foot in front of your body. 4. Immediately sink into a lunge and descend until your front thigh is almost parallel to the floor. Your back knee should be an inch or two from the floor. 5. Press through your front heel to extend your leg and bring it back to the starting position as you exhale. 6. Take another breath and lunge again, bringing your opposite leg forward. 7. Keep alternating.",
    },

    {
      id: 9,
      name: "Smith Calf Raise",
      image:"https://i.pinimg.com/736x/dc/13/34/dc1334f5e61f6e13a4f17709228062a5.jpg",
      video:"https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/11641201-Smith-Calf-Raise-(version-2)_Calves.mp4",
      text: "1. Set the bar at the appropriate height, where you can unrack it as you fully extend your knees. 2. Add the appropriate weight and position a calf raise block under the bar. 3. Position your trapezius against the bar, grab it with both hands, and place the balls of your feet on the platform. 4. Engage your entire body and straighten your knees to unrack the bar. 5. Inhale and slowly lower yourself by allowing your ankles to flex. Keep your knees extended. 6. Pause briefly at the bottom and push through the balls of your feet to extend your ankles. Squeeze your calves and pause briefly as you exhale.",
    },

    {
      id: 10,
      name: "Lever Seated Calf Raise",
      image:"https://i.pinimg.com/736x/29/4d/c0/294dc0c7bf22bbf7ebb2cc9ed866856e.jpg",
      video:"https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/05941201-Lever-Seated-Calf-Raise-(plate-loaded).mp4",
      text: "1. Load the machine, sit down, and adjust the pad. Your thighs should fit snugly, allowing you to unrack the weight by extending your ankles. 2. Position your thighs against the pad and grab the handles firmly. 3. Take a breath and unrack the weight by flexing your calves. 4. Put the safety bar to the side and flex your ankles to lower the weight until you feel a stretch in your calves. 5. Press through the balls of your feet and flex your calves, exhaling near the top.",
    },

    {
      id: 11,
      name: "Lever Seated Squat Calf Raise on Leg Press Machine",
      image:"https://i.pinimg.com/736x/09/a1/a3/09a1a35143ab3abb27d65787eb31f335.jpg",
      video:"https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/07381201-Sled-45-Calf-Press_Calves.mp4",
      text: "1. Load a leg press machine and sit down. 2. Raise your legs and place the balls of your feet at the edge of the footplate. 3. Bring your shoulders back and grab the handles by your sides. 4. Extend your knees to unrack the weight. 5. Flex your ankles to press the platform away from yourself and hold for a moment as you breathe out. 6. Allow your ankles to bend and stretch your calves as you breathe in. 7. Once finished, turn the handles you’re holding to secure the weight.",
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












