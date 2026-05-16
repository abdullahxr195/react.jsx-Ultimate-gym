import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import MenuCard from "../../component/Menus/MenuCard";
import { Box, Container, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function MenuList() {
  const navigate = useNavigate();


  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          backgroundColor: (theme) => theme.palette.background.default,
          padding: 2,
        }}
      >
        <Card
          sx={{
            maxWidth: 380,
            borderRadius: 3,
            boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "translateY(-5px)",
            },
          }}
        >
          <CardMedia
            component="img"
            alt="Athlete working out in a modern gym"
            height="200"
            image="https://my.lyfta.app/icons/muscles/ic_chip_chest_b.svg"
            title="Gym Workout"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ fontWeight: "bold" }}
            >
              Chest
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ lineHeight: 1.6 }}
            >
              Unlock unlimited access to state-of-the-art equipment, expert-led
              classes, and personalized training programs designed to help you
              achieve your goals. Join our vibrant community today!
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "space-between", padding: 2 }}>
            <Button
              onClick={() => navigate("/view-card-chest")}
              size="medium"
              variant="contained"
              color="primary"
              sx={{
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: (theme) => theme.palette.secondary.dark,
                },
              }}
            >
              Join Now
            </Button>
            
          </CardActions>
        </Card>
      </Box>
      {/* /////////////////////////////////////////////////////////////////////// */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          backgroundColor: (theme) => theme.palette.background.default,
          padding: 2,
        }}
      >
        <Card
          sx={{
            maxWidth: 380,
            borderRadius: 3,
            boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "translateY(-5px)",
            },
          }}
        >
          <CardMedia
            component="img"
            alt="Athlete working out in a modern gym"
            height="200"
            image="https://my.lyfta.app/icons/muscles/ic_chip_back_b.svg"
            title="Gym Workout"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ fontWeight: "bold" }}
            >
              Back
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ lineHeight: 1.6 }}
            >
              Unlock unlimited access to state-of-the-art equipment, expert-led
              classes, and personalized training programs designed to help you
              achieve your goals. Join our vibrant community today!
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "space-between", padding: 2 }}>
            <Button
              onClick={() => navigate("/view-card-back")}
              size="medium"
              variant="contained"
              color="primary"
              sx={{
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: (theme) => theme.palette.secondary.dark,
                },
              }}
            >
              Join Now
            </Button>

          </CardActions>
        </Card>
      </Box>
      {/* /////////////////////////////////////////////////////////////////////// */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          backgroundColor: (theme) => theme.palette.background.default,
          padding: 2,
        }}
      >
        <Card
          sx={{
            maxWidth: 380,
            borderRadius: 3,
            boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "translateY(-5px)",
            },
          }}
        >
          <CardMedia
            component="img"
            alt="Athlete working out in a modern gym"
            height="200"
            image="https://my.lyfta.app/icons/muscles/chip_biceps_b.svg"
            title="Gym Workout"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ fontWeight: "bold" }}
            >
              Biceps
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ lineHeight: 1.6 }}
            >
              Unlock unlimited access to state-of-the-art equipment, expert-led
              classes, and personalized training programs designed to help you
              achieve your goals. Join our vibrant community today!
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "space-between", padding: 2 }}>
            <Button onClick={() => navigate("/view-card-biceps")}
              size="medium"
              variant="contained"
              color="primary"
              sx={{
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: (theme) => theme.palette.secondary.dark,
                },
              }}
            >
              Join Now
            </Button>
            
          </CardActions>
        </Card>
      </Box>
      {/* /////////////////////////////////////////////////////////////////////// */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          backgroundColor: (theme) => theme.palette.background.default,
          padding: 2,
        }}
      >
        <Card
          sx={{
            maxWidth: 380,
            borderRadius: 3,
            boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "translateY(-5px)",
            },
          }}
        >
          <CardMedia
            component="img"
            alt="Athlete working out in a modern gym"
            height="200"
            image="https://my.lyfta.app/icons/muscles/chip_triceps_b.svg"
            title="Gym Workout"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ fontWeight: "bold" }}
            >
              Triceps
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ lineHeight: 1.6 }}
            >
              Unlock unlimited access to state-of-the-art equipment, expert-led
              classes, and personalized training programs designed to help you
              achieve your goals. Join our vibrant community today!
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "space-between", padding: 2 }}>
            <Button onClick={()=> navigate ("/view-card-triceps")}
              size="medium"
              variant="contained"
              color="primary"
              sx={{
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: (theme) => theme.palette.secondary.dark,
                },
              }}
            >
              Join Now
            </Button>
           
          </CardActions>
        </Card>
      </Box>
      {/* /////////////////////////////////////////////////////////////////////// */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          backgroundColor: (theme) => theme.palette.background.default,
          padding: 2,
        }}
      >
        <Card
          sx={{
            maxWidth: 380,
            borderRadius: 3,
            boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "translateY(-5px)",
            },
          }}
        >
          <CardMedia
            component="img"
            alt="Athlete working out in a modern gym"
            height="200"
            image="https://my.lyfta.app/icons/muscles/ic_chip_shoulders_b.svg"
            title="Gym Workout"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ fontWeight: "bold" }}
            >
              Shoulders
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ lineHeight: 1.6 }}
            >
              Unlock unlimited access to state-of-the-art equipment, expert-led
              classes, and personalized training programs designed to help you
              achieve your goals. Join our vibrant community today!
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "space-between", padding: 2 }}>
            <Button onClick={() => navigate("/view-card-shoulders")}
              size="medium"
              variant="contained"
              color="primary"
              sx={{
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: (theme) => theme.palette.secondary.dark,
                },
              }}
            >
              Join Now
            </Button>

          </CardActions>
        </Card>
      </Box>
      {/* /////////////////////////////////////////////////////////////////////// */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          backgroundColor: (theme) => theme.palette.background.default,
          padding: 2,
        }}
      >
        <Card
          sx={{
            maxWidth: 380,
            borderRadius: 3,
            boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "translateY(-5px)",
            },
          }}
        >
          <CardMedia
            component="img"
            alt="Athlete working out in a modern gym"
            height="200"
            image="https://my.lyfta.app/icons/muscles/chip_quadriceps_b.svg"
            title="Gym Workout"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ fontWeight: "bold" }}
            >
              Legs
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ lineHeight: 1.6 }}
            >
              Unlock unlimited access to state-of-the-art equipment, expert-led
              classes, and personalized training programs designed to help you
              achieve your goals. Join our vibrant community today!
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "space-between", padding: 2 }}>
            <Button onClick={() => navigate("/view-card-legs")}
              size="medium"
              variant="contained"
              color="primary"
              sx={{
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: (theme) => theme.palette.secondary.dark,
                },
              }}
            >
              Join Now
            </Button>
           
          </CardActions>
        </Card>
      </Box>
      {/* /////////////////////////////////////////////////////////////////////// */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          backgroundColor: (theme) => theme.palette.background.default,
          padding: 2,
        }}
      >
        <Card
          sx={{
            maxWidth: 380,
            borderRadius: 3,
            boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "translateY(-5px)",
            },
          }}
        >
          <CardMedia
            component="img"
            alt="Athlete working out in a modern gym"
            height="200"
            image="https://my.lyfta.app/icons/muscles/chip_abs_b.svg"
            title="Gym Workout"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ fontWeight: "bold" }}
            >
              Waist
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ lineHeight: 1.6 }}
            >
              Unlock unlimited access to state-of-the-art equipment, expert-led
              classes, and personalized training programs designed to help you
              achieve your goals. Join our vibrant community today!
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "space-between", padding: 2 }}>
            <Button onClick={() => navigate("/view-card-waist")}
              size="medium"
              variant="contained"
              color="primary"
              sx={{
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: (theme) => theme.palette.secondary.dark,
                },
              }}
            >
              Join Now
            </Button>
           
          </CardActions>
        </Card>
      </Box>
      {/* /////////////////////////////////////////////////////////////////////// */}

    </>
  );
}
