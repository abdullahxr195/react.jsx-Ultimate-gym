import { useContext, useState } from "react";
import { UserContext } from "../User page/UserContext";
import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import toast from "react-hot-toast";

export default function ManageUsers() {
  const { users, deleteUsers, addNewUser, updateUser } =
    useContext(UserContext);

  const [openForm, setOpenForm] = useState(false);

  const [updateId, setUpdateId] = useState();
  const [updatedUser, setUpdatedUser] = useState({
    name: "",
    email: "",
    role: "",
  });

  const handleSave = () => {
    if (!updatedUser.name || !!updatedUser.email || !updatedUser.role) {
      toast.error("all filed are required");
      return;
    }

    updateUser(updateId, updatedUser);
    setUpdateId(null);
  };

  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    role: "",
    password: "",
  });

  const handleAddUser = () => {
    addNewUser(newUser);
    setOpenForm(false);
  };

  return (
    <>
      <Box sx={{ minHeight: "100vh" }}>
        <Typography variant="h3" sx={{ m: 4 }}>
          {" "}
          Manager Users
        </Typography>
        <Button
          onClick={() => setOpenForm(!openForm)}
          variant="contained"
          color="error"
        >
          {openForm ? "Cancel" : "Add New User"}
        </Button>
        <Container>
          {openForm && (
            <>
              <Paper>
                <TextField
                  label="Name"
                  value={newUser.name}
                  onChange={(e) =>
                    setNewUser({ ...newUser, name: e.target.value })
                  }
                />

                <TextField
                  label="Email"
                  value={newUser.email}
                  onChange={(e) =>
                    setNewUser({ ...newUser, email: e.target.value })
                  }
                />

                <TextField
                  label="Role"
                  value={newUser.role}
                  onChange={(e) =>
                    setNewUser({ ...newUser, role: e.target.value })
                  }
                />

                <TextField
                  label="Password"
                  value={newUser.password}
                  onChange={(e) =>
                    setNewUser({ ...newUser, password: e.target.value })
                  }
                />

                <Button
                  variant="contained"
                  color="info"
                  onClick={handleAddUser}
                  
                >
                  Add
                </Button>
              </Paper>
            </>
          )}

          <Table>
            <TableHead sx={{backgroundColor:"#e8a938"}}>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>

            <TableBody sx={{backgroundColor:"#fcf0da"}}>
              {users.map((user, idx) => {
                return (
                  <TableRow key={user?.id}>
                    <TableCell>{idx + 1}</TableCell>
                    {updateId !== user?.id ? (
                      <TableCell>{user?.name}</TableCell>
                    ) : (
                      <TableCell>
                        <TextField
                          label="name"
                          value={user?.name}
                          onChange={(e) =>
                            setUpdatedUser({
                              ...updatedUser,
                              name: e.target.value,
                            })
                          }
                        />
                      </TableCell>
                    )}

                    {updateId !== user?.id ? (
                      <TableCell>{user?.email}</TableCell>
                    ) : (
                      <TableCell>
                        <TextField label="email"   value={user?.email}
                          onChange={(e) =>
                            setUpdatedUser({
                              ...updatedUser,
                              email: e.target.value,
                            })
                          } />
                      </TableCell>
                    )}

                    {updateId !== user?.id ? (
                      <TableCell>{user?.role}</TableCell>
                    ) : (
                      <TableCell>
                        <TextField label="role"   value={user?.role}
                          onChange={(e) =>
                            setUpdatedUser({
                              ...updatedUser,
                              role: e.target.value,
                            })
                          } />
                      </TableCell>
                    )}

                    {updateId !== user.id ? (
                      <TableCell>
                        <Stack>
                          <Button
                            variant="contained"
                            color="info"
                            onClick={() => setUpdateId(user?.id)
                                            
                            }
                          >
                            Edit
                          </Button>
                          <Button
                            onClick={() => deleteUsers(user.id)}
                            variant="contained"
                            color="warning"
                          >
                            Delete
                          </Button>
                        </Stack>
                      </TableCell>
                    ) : (
                      <TableCell>
                        <Button
                          onClick={() => setUpdateId(null)}
                          variant="contained"
                          color="warning"
                        >
                          Cancel
                        </Button>

                        <Button
                          onClick={handleSave}
                          variant="contained"
                          color="success"
                        >
                          Save
                        </Button>
                      </TableCell>
                    )}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Container>
      </Box>
    </>
  );
}
