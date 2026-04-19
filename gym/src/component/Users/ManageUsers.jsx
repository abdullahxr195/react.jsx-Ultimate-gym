import { useContext } from "react";
import { UserContext } from "../User page/UserContext";
import {
  Box,
  Button,
  Container,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  Typography,
} from "@mui/material";

export default function ManageUsers() {
  const { users } = useContext(UserContext);
  console.log(users);

  return (
    <>
      <Box sx={{ minHeight: "100vh" }}>
        <Typography variant="h3" sx={{ m: 4 }}>
          {" "}
          Manager Users
        </Typography>

        <Container>
          <Table>
            <TableHead>
              <TableCell>#</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Actions</TableCell>
            </TableHead>

            {users.map((user, idx) => {
              return (
                <TableBody key={user?.id}>

                  <TableCell>{idx+1}</TableCell>
                  <TableCell>{user?.name}</TableCell>
                  <TableCell>{user?.email}</TableCell>
                  <TableCell>{user?.role}</TableCell>
                 <TableCell>
                    <Stack>
                    <Button variant="contained" color="info">Edit</Button>
                    <Button  variant="contained" color="warning">Delete</Button>



                    </Stack>

                 </TableCell>
                </TableBody>
              );
            })}
          </Table>
        </Container>
      </Box>
    </>
  );
}
