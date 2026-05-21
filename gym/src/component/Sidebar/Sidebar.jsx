import {
  Box,
  Divider,
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  MenuItem,
  StepIcon,
  SvgIcon,
  Typography,
} from "@mui/material";
import { UserContext } from "../User page/UserContext.jsx";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ErrorIcon } from "react-hot-toast";


export default function Sidebar({ open, toggleSidebar }) {
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          color: "white",
          minHeight: "100vh",
          backgroundColor:"rgba(0, 0, 0, 0.95)",  
          width: open ? "280px" : "60px",
          transition: "with 0.3s ease",
          p: 2,
        }}
      >
        <ListItemIcon
          onClick={toggleSidebar}
          sx={{
            color: "black",
            bgcolor: "white",
            mb: 3,
          }}
        >
          <MenuItem />
        </ListItemIcon>
        {open ? <Typography>hello</Typography> : <Typography>hi</Typography>}

        <Divider sx={{ bgcolor: "red", mb: 2 }} />
        <List>
          {currentUser?.role === "admin" && (
            <>
              <ListItem button component="div">
                <ListItemText
                  sx={{ cursor: "pointer" }}
                  onClick={() => navigate("/admin-dashboard")}
                  primary={open ? "Home" : "H"}
                />
              </ListItem>

              <ListItem button>
                <ListItemText
                  sx={{ cursor: "pointer" }}
                  primary={open ? "Users" : "U"}
                   onClick={() => navigate("/Manage-Users-Page")}
                />
              </ListItem>

              <ListItem button>
                <ListItemText
                  sx={{ cursor: "pointer" }}
                  primary={open ? "View Menu" : "V"}
                  onClick={() => navigate("/view-menu")}
                />
              </ListItem>

              <ListItem button>
                <ListItemText
                  sx={{ cursor: "pointer" }}
                  primary={open ? "Profile" : "P"}
                  onClick={() => navigate("/Profile")}
                />
              </ListItem>
            </>
          )}

          {currentUser?.role === "user" && (
            <>
              <ListItem button component="div">
                <ListItemText
                  sx={{ cursor: "pointer" }}
                  primary={open ? "Home" : "H"}
                  onClick={() => navigate("/user-dashboard")}
                />
              </ListItem>

              {/* <ListItem button>
                <ListItemText
                  sx={{ cursor: "pointer" }}
                  primary={open ? "Users" : "U"}
                 
                />
              </ListItem> */}

              <ListItem button>
                <ListItemText
                  sx={{ cursor: "pointer" }}
                  primary={open ? "View Menu" : "V"}
                  onClick={() => navigate("/view-menu")}
                />
              </ListItem>

              <ListItem button>
                <ListItemText
                  sx={{ cursor: "pointer" }}
                  primary={open ? "Profile" : "P"}
                  onClick={() => navigate("/Profile")}
                />
              </ListItem>
            </>
          )}
        </List>
      </Box>
    </>
  );
}
