import React from 'react';
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

const mockOrders = [
  {
    id: 'ORD-1001',
    customer: 'John Doe',
    date: '2025-04-14',
    total: 120.5,
    status: 'Paid',
  },
  {
    id: 'ORD-1002',
    customer: 'Jane Smith',
    date: '2025-04-13',
    total: 80.0,
    status: 'Pending',
  },
  {
    id: 'ORD-1003',
    customer: 'Ali Rezai',
    date: '2025-04-12',
    total: 210.75,
    status: 'Shipped',
  },
];

const statusColors = {
  Paid: 'success',
  Pending: 'warning',
  Shipped: 'info',
  Cancelled: 'error',
};

const Sales = () => {
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
            label="Status"
            variant="outlined"
            size="small"
            select
            defaultValue=""
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Paid">Paid</MenuItem>
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Shipped">Shipped</MenuItem>
            <MenuItem value="Cancelled">Cancelled</MenuItem>
          </TextField>
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
              <TableCell>Customer</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>${order.total.toFixed(2)}</TableCell>
                <TableCell>
                  <Chip
                    label={order.status}
                    color={statusColors[order.status]}
                    size="small"
                  />
                </TableCell>
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
