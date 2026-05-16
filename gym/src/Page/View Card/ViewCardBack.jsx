import { Box, Container, Grid, Typography } from "@mui/material";
import MenuCard from "../../component/Menus/MenuCard";
import Sidebar from "../../component/Sidebar/Sidebar";
import Navbar from "../../component/Navbar/Navbar";
import MenuList from "../../component/Menus/MenuList";
import { useState } from "react";

export default function ViewCardBack() {
  const [open, setOpen] = useState(true);
  const toggleSidebar = () => {
    setOpen(!open);
  };

  const menuList = [
    {
      id: 0,
      name: "Lat Pulldown",
      image:
        "https://i.pinimg.com/1200x/4e/6a/27/4e6a27a5cd78d7ed3788dba28c439113.jpg",
      video:
        "https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/01501201-Cable-Bar-Lateral-Pulldown_Back.mp4",
      text: "1.Adjust the knee pad on the machine to be right against your thighs.2.Select a weight you can lift for at least ten smooth reps.3.Grab the bar with your hands slightly wider than shoulder-width apart. Your palms should face forward.4.Sit down and secure your legs underneath the pad.5.With your arms extended, bring your shoulders back and down.6.Take a breath and pull the weight down through your elbows. As you pull, keep your elbows tucked and in line with your torso. Breathe out.7.Hold for a moment and extend your arms fully as you breathe in.",
    },

    {
      id: 1,
      name: "T-bar Row",
      image:
        "https://i.pinimg.com/736x/57/89/71/5789717fb860b33d4d54f3d121b18a9d.jpg",
      video:
        "https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/06061201-Lever-T-bar-Row-(plate-loaded)_Back.mp4",
      text: "1.Add some weight to the T-bar station.2.Step on the platform, lean forward and grab the handles with an overhand grip.3.Retract your shoulder blades, engage your abs, and inhale.4.With your back neutral, push through your heels and extend your hips a bit to lift the weight off the floor.5.Keep your torso almost parallel with the floor and have your arms straight.6.Inhale again and pull the weight until the handles get close to your torso. Breathe out at the top.7.Extend your arms as you breathe in. Don’t set the weight on the floor.",
    },

    {
      id: 2,
      name: "Wide Pull-up",
      image:
        "https://i.pinimg.com/736x/8e/7d/f1/8e7df112acd3b636130537122f0c7246.jpg",
      video:
        "https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/14291201-Wide-Grip-Pull-Up_Back.mp4",
      text: "1. Reach up and grab a pull-up bar with a wide overhand grip (palms facing forward). Your hands should be more than shoulder-width apart but not too wide. 2. Bring your shoulders back, engage your abs, and lift your feet off the floor to suspend yourself in the air. Keep your feet together or bend your knees and interlock your lower legs. 3. Take a breath and pull yourself up in one fluid motion. Go up until your chin is over the bar and hold for a moment as you exhale. 4. Slowly lower yourself and breathe in.",
    },

    {
      id: 3,
      name: "Hyperextension",
      image:
        "https://www.inspireusafoundation.org/wp-content/uploads/2022/05/back-extension-768x768.gif",
      video:
        "https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/18601201-Hyperextension-(VERSION-2)_Hips.mp4",
      text: "1. Set yourself up on a back extension machine. Have your hips and thighs against the pad and your ankles locked on the foot brace. 2. Engage your abs, cross your arms in front of your chest, and take a breath. 3. Lower yourself by bending at the hips and move down until you feel a stretch in your hamstrings and glutes. 4. Engage your buttocks and lower back to raise your torso to the top position, pausing for a moment and exhaling.",
    },

    {
      id: 4,
      name: "dumbbell row",
      image:
        "https://i.pinimg.com/1200x/06/09/a4/0609a423793a6ec7539ce166cc661bb1.jpg",
      video:
        "https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/02921201-Dumbbell-Bent-over-Row_Back.mp4",
      text: "1. Grab a dumbbell. 2. Place your right knee and right hand on a flat gym bench. Keep your left leg and arm straight with the dumbbell in your hand. 3. Bring your shoulders back and engage your abs. 4. Row the dumbbell until your elbow is at torso level and squeeze for a moment as you exhale. 5. Lower the weight while keeping your shoulders in position. Breathe in on the way down. 6. Once finished, grab the dumbbell with the opposite hand, position your left hand and knee on the bench, and repeat.",
    },

    {
      id: 5,
      name: "Dumbbell Shrug",
      image:
        "https://i.pinimg.com/1200x/18/bd/80/18bd804111812c80a86885e778957f21.jpg",
      video:
        "https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/04061201-Dumbbell-Shrug_Back.mp4",
      text: "1. Grab a pair of dumbbells, stand tall, position your arms to your sides, and have your wrists neutral. 2. Bring your shoulders back and engage your abs. 3. Take a breath, shrug your shoulders as high as possible, and squeeze your trapezius muscle at the top. Keep your arms straight. 4. Exhale at the top and lower your shoulder blades to the starting position as you breathe in.",
    },

    {
      id: 6,
      name: "Seated Cable Row - V Grip (Cable)",
      image:
        "https://i.pinimg.com/1200x/73/c4/9a/73c49a297f36321216c9b39b46b17a60.jpg",
      video:
        "https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/26611201-Cable-Seated-Row-with-V-bar_Back.mp4",
      text: "1. Attach a V-handle to a seated row machine and select the appropriate weight. 2. Sit down and grab the handle with both hands. 3. Place your feet on the platform and sit back. Maintain a slight bend in your knees. 4. Retract your shoulder blades and engage your abs. Keep your torso upright, and don't lean too far back. 5. Take a deep breath and pull the handle to your stomach in one fluid motion, pausing briefly and exhaling. 6. Slowly extend your arms as you breathe in.",
    },

    {
      id: 7,
      name: "Cable Straight Arm Pulldown",
      image:
        "https://i.pinimg.com/1200x/46/5e/98/465e98c629fa27038c07aac97a6bc787.jpg",
      video:
        "https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/02371201-Cable-Straight-Arm-Pulldown-(with-rope)_Back.mp4",
      text: "1. Select the appropriate load. 2. Set the pulley to the highest position and attach a rope. 3. Grab both ends of the rope with your hands neutral (facing one another) and straighten your arms. 4. Take a step back, engage your abs, and retract your shoulders. 5. Take a breath and pull the rope to your hips while keeping your arms straight. Breathe out. 6. Slowly bring the rope to the top as you breathe in.",
    },

    {
      id: 8,
      name: "Bent Over Row (Barbell)",
      image:
        "https://i.pinimg.com/1200x/93/d1/2f/93d12f812e010e3b612f910eff30e868.jpg",
      video:
        "https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/30171201-Barbell-Pendlay-Row_Back_.mp4",
      text: "1. Stand in front of a loaded barbell with your feet in a comfortable stance and toes pointing slightly out. 2. Lean forward by hinging at the hip and keep your spine in a neutral position. 3. Grab the barbell with an even overhand grip. 4. Engage your abs and lift the bar several inches off the floor. 5. With your shoulders back and midsection tight, take a breath and row the barbell. 6. Lift the bar until it taps your stomach and hold the position for a moment as you exhale. 7. Lower the bar slowly.",
    },

    {
      id: 9,
      name: "45 degrees Back Extension",
      image:
        "https://i.pinimg.com/1200x/55/52/4a/55524a8afda752ede46389d5dc78b7e8.jpg",
      video:
        "https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/18601201-Hyperextension-(VERSION-2)_Hips.mp4",
      text: "1. Set yourself up on a back extension machine. Have your hips and thighs against the pad and your ankles locked on the foot brace. 2. Engage your abs, cross your arms in front of your chest, and take a breath. 3. Lower yourself by bending at the hips and move down until you feel a stretch in your hamstrings and glutes. 4. Engage your buttocks and lower back to raise your torso to the top position, pausing for a moment and exhaling.",
    },

    {
      id: 10,
      name: "Deadlift (Barbell)",
      image:
        "https://i.pinimg.com/1200x/59/0f/48/590f48f868175b1d9330c71a518774da.jpg",
      video:
        "https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/00321201-Barbell-Deadlift_Hips-FIX.mp4",
      text: "1. Stand in front of a loaded barbell. 2. The bar should be over mid-foot, your shins should be an inch or two from the bar, and your feet should be hip-width apart, with toes pointing slightly out. 3. Lean forward and grab the bar with a double overhand grip. 4. Bend your knees to position your shins against the bar. Simultaneously, retract your shoulders to straighten your back. 5. Take a breath. 6. Initiate the pull by digging your heels into the floor. 7. Lift the bar in a straight vertical line, keeping it close to your body. 8. As the bar passes your knees, begin to extend your legs and drive your hips forward to complete the repetition. 9. Begin the descent by driving your buttocks back and keeping your back neutral. 10. Lower the barbell in the same vertical line, exhaling near the bottom.",
    },

    {
      id: 11,
      name: "Lever One Arm Seated Row",
      image:
        "https://i.pinimg.com/736x/15/9f/a7/159fa78901f9771cee1d19a13439ef23.jpg",
      video:"https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/05881201-Lever-Neutral-Grip-Seated-Row-(plate-loaded)_Back-.mp4",
      text: "1. Select the appropriate weight. 2. Adjust the seat height so that you can comfortably place your forearms on the pads at your sides and grab the handles. 3. With your knees bent, position your shins against the bottom pads and push forward to create whole-body rigidity. 4. Breathe in and twist your lower body to the right as you exhale. It should be a fluid motion. 5. Slowly return your lower body to the starting position as you breathe in. 6. Rotate your legs to the left and breathe out again. 7. Continue alternating from left to right, breathing steadily as you do reps.",
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
                    <MenuCard
                      name={Exercise.name}
                      image={Exercise.image}
                      video={Exercise.video}
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
