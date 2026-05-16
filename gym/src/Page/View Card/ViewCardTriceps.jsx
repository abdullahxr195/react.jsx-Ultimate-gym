import { Box, Container, Grid, Typography } from "@mui/material";
import MenuCard from "../../component/Menus/MenuCard";
import Navbar from "../../component/Navbar/Navbar";
import Sidebar from "../../component/Sidebar/Sidebar";
import { useState } from "react";

export default function ViewCardTriceps() {
  const [open, setOpen] = useState(true);
  const toggleSidebar = () => {
    setOpen(!open);
  };
  const menuList = [
    {
      id: 0,
      name: "Triceps Pushdown",
      image:
        "https://i.pinimg.com/1200x/15/6b/79/156b79c6e5418472dc05fd4bc161cd16.jpg",
      video:
        "https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/02011201-Cable-Pushdown_Upper-Arms.mp4",
      text: "1. Pick the appropriate load, set the pulley in the highest position, and attach a bar. 2. Grab the bar with an even overhand grip and bring your elbows to your sides. 3. Take a couple of steps back and lean your torso slightly forward. 4. Engage your abs, retract your shoulder blades, and take a breath. 5. Extend your arms while keeping your elbows to your sides and hold for a moment. Exhale. 6. Slowly bend your arms until your wrists are slightly higher than your elbows. Breathe in as your arms",
    },

    {
      id: 1,
      name: "Overhead Triceps Extension",
      image:
        "https://i.pinimg.com/1200x/3b/1e/d1/3b1ed1c1fcbf2935686f42ccc37ef8ef.jpg",
      video:
        "https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/01941201-Cable-Overhead-Triceps-Extension-(rope-attachment)_Upper-Arms-FIX_.mp4",
      text: "1. Set the pulley at mid-thigh height, attach a rope, and select the correct load. 2. Grab both ends of the rope with an overhand grip (palms facing your body). 3. In one motion, turn away from the machine and dip slightly to raise the rope over your shoulders, positioning it behind your head. Your elbows should be bent and to the sides of your head. 4. With your chest out, lean forward slightly, bring one foot forward for balance, and brace your abs. 5. Breathe in and extend your elbows, spreading the rope at the top. Exhale. 6. Slowly bend your elbows as you breathe in.",
    },

    {
      id: 2,
      name: "Triceps Extension (Cable)",
      image:
        "https://i.pinimg.com/1200x/7f/48/5f/7f485ffc9c9f513c5c85caa6f9698844.jpg",
      video:
        "https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/01491201-Cable-Alternate-Triceps-Extension_Upper-Arms_.mp4",
      text: "1. Set a cable pulley in a low position and attach a handle. 2. Select a light load with a pin. 3. Reach down and grab the handle with one hand. 4. Turn your body away from the cable machine and extend your arm toward the ceiling. 5. Place your opposite hand on your elbow for support, retract your shoulder blades, and engage your abs. 6. Take a breath and slowly bend your elbow until you feel a stretch in your tricep. 7. Flex your tricep to extend your arm and exhale near the top. 8. Once finished training one tricep, grab the handle with your opposite hand and do the same number of reps.",
    },

    {
      id: 3,
      name: "Seated Dip Machine",
      image:
        "https://i.pinimg.com/1200x/a5/9c/fd/a59cfd87c4a642cf55d2dc77e0acb2bb.jpg",
      video:
        "https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/14511201-Lever-Seated-Dip_Upper-Arms.mp4",
      text: "1. Select the appropriate load. 2. Sit down and grab the handles to your sides. 3. Plant your feet on the floor, bring your shoulders back, and engage your abs. 4. Take a breath and press the handles down, fully extending your arms and exhaling. 5. Bend your arms as you breathe in.",
    },

    {
      id: 4,
      name: "Standing Triceps Extension",
      image:
        "https://i.pinimg.com/1200x/e7/f1/1c/e7f11c9b787bd83c48b9f7136397cec4.jpg",
      video:
        "https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/03621201-Dumbbell-One-Arm-Triceps-Extension-(on-bench)_Upper-Arms.mp4",
      text: "1. Grab a dumbbell and sit on a flat gym bench or chair. 2. Lift the weight overhead and straighten your arm. 3. Bring your shoulders back, engage your midsection, and inhale. 4. Lower the dumbbell behind your head while keeping your elbow steady. 5. Bend your arm until you feel a stretch in your tricep, and extend your elbow as you exhale. 6. Once finished, grab the weight with your other hand, and do the same number of reps.",
    },

    {
      id: 5,
      name: "Triceps Dip",
      image:
        "https://i.pinimg.com/1200x/82/8e/93/828e93d498ffc35fba22bd7083cae2f5.jpg",
      video:
        "https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/08141201-Triceps-Dip_Upper-Arms.mp4",
      text: "1. Grab a pair of parallel bars and suspend yourself in the air. 2. Maintain an upright body, bring your shoulders back, and engage your abs. 3. Take a breath and lower yourself by bending your elbows. 4. Move down until your elbows are at a 90-degree angle. 5. Hold the position for a moment and press yourself back to the top as you exhale.",
    },

    {
      id: 6,
      name: "Skullcrusher (Barbell)",
      image:
        "https://i.pinimg.com/736x/c9/b7/27/c9b727cc4855690ea145ae71ff2e6e7e.jpg",
      video:
        "https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/00601201-Barbell-Lying-Triceps-Extension-Skull-Crusher_Upper-Arms.mp4",
      text: "1. Load a straight bar, lift it off the floor, and support it in front of your chest. 2. Carefully sit on a flat gym bench and lie back while keeping the bar close to your torso. 3. Extend your arms and bring your shoulders back. Plant your feet on the floor. 4. Take a breath and lower the barbell to your forehead or behind your head. 5. Pause for a moment and extend your arms while keeping your elbows in position. Exhale near the top.",
    },

    {
      id: 7,
      name: "One Arm Side Triceps Pushdown",
      image:
        "https://i.pinimg.com/1200x/c8/af/86/c8af8664a596159182d4fd24617288ca.jpg",
      video:
        "https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/10331201-Lever-Triceps-Extension_Upper-Arms.mp4",
      text: "1. Set the appropriate load and sit down. 2. Grab the handles to your sides, bring your shoulders back into the pad, and plant your feet on the floor. 3. Take a breath and push the handles down by extending your elbows. 4. Straighten your arms fully and hold the position momentarily as you exhale. 5. Bend your arms slowly and breathe in.",
    },

    {
      id: 8,
      name: "Floor Triceps Dip",
      image:
        "https://i.pinimg.com/1200x/a5/f2/4a/a5f24a942abf5b47045bcf453e3453f7.jpg",
      video: "https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/08151201-Triceps-Dips-Floor_Upper-Arms.mp4",
      text: "1. Sit down, bend your knees, and place your feet flat on the floor. 2. Lean your torso back and place your hands flat on the floor and behind your body. 3. Engage your abs and take a breath. 4. Press through your palms to extend your arms, lifting your buttocks several inches off the floor. Exhale. 5. Slowly bend your arms, bringing your butt back to the floor as you breathe in.",
    },

    {
      id: 9,
      name: "Triceps Extension (Dumbbell)",
      image:
        "https://i.pinimg.com/1200x/b2/0f/ce/b20fcec2dcdfc742899b1feaf392823b.jpg",
      video: "https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/04301201-Dumbbell-Standing-Triceps-Extension_Upper-Arms.mp4",
      text: "1. Grab a dumbbell and stand tall. 2. Lift the weight overhead and place your hands flat against the top weight plate with your palms facing the ceiling. 3. Bring your shoulders back and engage your abs. 4. Take a breath and lower the dumbbell behind your head while keeping your elbows to the sides of your head. 5. Bend your arms until you feel a stretch, and extend your elbows as you breathe out.",
    },

    {
      id: 10,
      name: "Triceps Kickback (Dumbbell)",
      image:
        "https://i.pinimg.com/1200x/af/7b/92/af7b92a320006bbc1cfdb540b6712b1c.jpg",
      video: "https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/03331201-Dumbbell-Kickback_Upper-Arms.mp4",
      text: "1. Grab a light dumbbell and hold it to your side with your palm facing your thigh. 2. Lean your torso forward as you push your butt back to maintain a neutral back. 3. Lift your elbow to your side, inhale, and extend your arm by engaging your tricep. Breathe out. 4. Hold the contraction for a second and slowly bring the dumbbell back down as you breathe in. 5. Keep your shoulder and elbow in a stationary position throughout each repetition.",
    },

    {
      id: 11,
      name: "Bench Dip",
      image:
        "https://i.pinimg.com/736x/e8/e7/1f/e8e71f6611d65f0002bfca7272ad18b9.jpg",
      video: "https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/13991201-Bench-dip-on-floor_Upper-Arms.mp4",
      text: "1. Face away from a sturdy gym bench, plyo box, or chair. 2. Lean back and place your hands flat on the object's edge. 3. Straighten your legs and support your lower body on your heels. Your torso should be upright. 4. Engage your abs, take a breath, and descend by bending your elbows. 5. Move down until your elbows form a 90-degree angle and pause for a moment. 6. Extend your arms and exhale near the top.",
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
