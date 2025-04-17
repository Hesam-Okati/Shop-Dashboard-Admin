import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./User.css"
import {
  Box,
  Typography,
  Avatar,
  Button,
  Grid,
  TextField,
  Paper,
  IconButton,
  CircularProgress,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const mockFetchUser = (userID) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: userID,
        name: "Ali Rezai",
        email: "ali@example.com",
        phone: "+1 234 567 890",
        avatar: "",
      });
    }, 1000);
  });

const UserProfile = () => {
  const { userID } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUser((prev) => ({
        ...prev,
        avatar: URL.createObjectURL(file),
      }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Saving user profile:", user);
    // Send to backend here
  };

  useEffect(() => {
    setLoading(true);
    mockFetchUser(userID).then((data) => {
      setUser(data);
      setLoading(false);
    });
  }, [userID]);

  if (loading || !user) {
    return (
      <div className="user">
        <Box sx={{ p: 4, textAlign: "center" }}>
          <CircularProgress />
          <Typography variant="subtitle1" mt={2}>
            Loading user data...
          </Typography>
        </Box>
      </div>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Profile: {user.name}
      </Typography>

      <Paper sx={{ p: 3, maxWidth: 600 }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3} direction="column">
            {/* Avatar */}
            <Grid item xs={12} sx={{ textAlign: "center" }}>
              <Box sx={{ position: "relative", display: "inline-block" }}>
                <Avatar
                  src={user.avatar}
                  sx={{ width: 100, height: 100, mx: "auto" }}
                />
                <IconButton
                  component="label"
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    bgcolor: "white",
                    boxShadow: 1,
                  }}
                >
                  <EditIcon />
                  <input
                    type="file"
                    hidden
                    accept="image/*"
                    onChange={handleAvatarChange}
                  />
                </IconButton>
              </Box>
            </Grid>

            {/* Form Fields */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Full Name"
                name="name"
                value={user.name}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Phone"
                name="phone"
                value={user.phone}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <Button type="submit" variant="contained" fullWidth>
                Save Changes
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default UserProfile;
