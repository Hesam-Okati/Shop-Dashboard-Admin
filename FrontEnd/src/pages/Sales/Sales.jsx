import React, { useEffect, useState } from 'react';
import "./Sales.css"
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Grid,
  TextField,
  MenuItem,
} from '@mui/material';


const Sales = () => {
  const [mockOrders , setMockOrders]  = useState([])
  
  useEffect(() => {
    fetch("http://localhost:3001/api/sales/")
      .then(res => res.json())
      .then(data => setMockOrders(data))
  } , [])
  
  const statusColors = [
    'success',
    'warning',
    'info',
    'error'
  ]


 const rand_status =  statusColors[Math.floor(Math.random() * 4)]
  return (
    <div className="Sales">
          <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Sales Overview
      </Typography>

      {/* Filters */}
      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            fullWidth
            label="Search by Customer"
            variant="outlined"
            size="small"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <TextField
            fullWidth
            label="From Date"
            type="date"
            InputLabelProps={{ shrink: true }}
            size="small"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            fullWidth
            label="To Date"
            type="date"
            InputLabelProps={{ shrink: true }}
            size="small"
          />
        </Grid>
      </Grid>

      {/* Table of Orders */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Order ID</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>count</TableCell>
              <TableCell>Color</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockOrders.map((order) => (
              <TableRow style={{ cursor: "pointer" }} key={order.id}>
                <TableCell>{order.product_ID}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.count}</TableCell>
                <TableCell>{order.color}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
    </div>
  );
};

export default Sales;
