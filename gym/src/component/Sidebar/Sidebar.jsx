import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Typography,
} from "@mui/material";
import { UserContext } from "../User page/UserContext.jsx";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function Sidebar({ open, toggleSidebar }) {
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          bgcolor: "red",
          color: "white",
          minHeight: "100vh",
          backgroundColor:"#001e37",  
          width: open ? "280px" : "60px",
          transition: "with 0.3s ease",
          p: 2,
        }}
      >
        <IconButton
          onClick={toggleSidebar}
          sx={{
            color: "black",
            bgcolor: "white",
            mb: 3,
          }}
        >
          <MenuItem />
        </IconButton>
        {open ? <Typography>hello</Typography> : <Typography>hi</Typography>}

        <Divider sx={{ bgcolor: "white", mb: 2 }} />
        <List>
          {currentUser?.role === "admin" && (
            <>
              <ListItem button component="div">
                <ListItemText
                  sx={{ cursor: "pointer" }}
                  onClick={() => navigate("/admin-dashboard")}
                  primary={open ? "Dashboard" : "D"}
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
                  primary={open ? "Dashboard" : "D"}
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
