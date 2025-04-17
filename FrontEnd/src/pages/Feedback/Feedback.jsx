import React from 'react';
import "./Fb.css"
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider,
  Badge,
  IconButton,
  InputBase,
  Paper,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import SearchIcon from '@mui/icons-material/Search';

const messages = [
  {
    id: 1,
    sender: 'John Doe',
    subject: 'Order Inquiry',
    preview: 'I have a question about my recent order...',
    date: 'Far 14',
    unread: true,
  },
  {
    id: 2,
    sender: 'System',
    subject: 'New Sale Notification',
    preview: 'You sold 3 items today. Great job!',
    date: 'Far 13',
    unread: false,
  },
  {
    id: 3,
    sender: 'Jane Smith',
    subject: 'Return Request',
    preview: 'I would like to return one of the products...',
    date: 'Far 12',
    unread: true,
  },
];

const Feedback = () => {
  return (
    <div className="Mail">
          <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Inbox Feedbacks
      </Typography>

      {/* Search Bar */}
      <Paper
        sx={{
          p: '2px 4px',
          mb: 2,
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          maxWidth: 400,
        }}
      >
        <IconButton sx={{ p: '10px' }}>
          <SearchIcon />
        </IconButton>
        <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search Feedbacks..." />
      </Paper>

      {/* Feedback List */}
      <List>
        {messages.map((msg) => (
          <React.Fragment key={msg.id}>
            <ListItem alignItems="flex-start" button selected={msg.unread}>
              <ListItemAvatar>
                <Badge
                  color="primary"
                  variant="dot"
                  invisible={!msg.unread}
                >
                  <Avatar>
                    <EmailIcon />
                  </Avatar>
                </Badge>
              </ListItemAvatar>
              <ListItemText
                primary={`${msg.sender} — ${msg.subject}`}
                secondary={`${msg.preview}`}
                secondaryTypographyProps={{ noWrap: true }}
              />
              <Typography variant="caption" sx={{ ml: 2 }}>
                {msg.date}
              </Typography>
            </ListItem>
            <Divider component="li" />
          </React.Fragment>
        ))}
      </List>
    </Box>
    </div>
  );
};

export default Feedback;