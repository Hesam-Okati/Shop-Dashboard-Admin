import React, { useState } from 'react';
import {
  Box,
  Typography,
  Avatar,
  Button,
  Grid,
  TextField,
  Paper,
  IconButton,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import "./Profile.css"

const Profile = () => {
  const [user, setUser] = useState({
    name: 'Ali Rezai',
    email: 'ali@example.com',
    phone: '+98 234 567 2890',
    avatar: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUser((prev) => ({
        ...prev,
        avatar: URL.createObjectURL(file),
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated profile:', user);
    // Send to backend here
  };

  return (
	<div className="Profile">
		    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Profile Settings
      </Typography>

      <Paper sx={{ p: 3, maxWidth: 600 }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3} direction="column">
            {/* Avatar */}
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
              <Box sx={{ position: 'relative', display: 'inline-block' }}>
                <Avatar
                  src={user.avatar}
                  sx={{ width: 100, height: 100, mx: 'auto' }}
                />
                <IconButton
                  component="label"
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    bgcolor: 'white',
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

            {/* Name */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Full Name"
                name="name"
                value={user.name}
                onChange={handleChange}
              />
            </Grid>

            {/* Email */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </Grid>

            {/* Phone */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                value={user.phone}
                onChange={handleChange}
              />
            </Grid>

            {/* Save Button */}
            <Grid item xs={12}>
              <Button type="submit" variant="contained" fullWidth>
                Save Changes
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
	</div>
  );
};

export default Profile;