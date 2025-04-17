import React, { useState } from 'react';
import "./Transactions.css"
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
  TextField,
  Grid,
  MenuItem,
  InputAdornment,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


const mockTransactions = [
  {
    id: 'TXN-1001',
    customer: 'John Doe',
    date: '2025-04-14',
    amount: 120.5,
    status: 'Completed',
    method: 'Credit Card',
  },
  {
    id: 'TXN-1002',
    customer: 'Jane Smith',
    date: '2025-04-13',
    amount: 80.0,
    status: 'Pending',
    method: 'PayPal',
  },
  {
    id: 'TXN-1003',
    customer: 'Ali Rezai',
    date: '2025-04-12',
    amount: 210.75,
    status: 'Refunded',
    method: 'Bank Transfer',
  },
];

const statusColors = {
  Completed: 'success',
  Pending: 'warning',
  Refunded: 'error',
};

const Transactions = () => {
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [filterAmount, setFilterAmount] = useState('');

  const handleSearchChange = (e) => setSearch(e.target.value);
  const handleStatusFilterChange = (e) => setFilterStatus(e.target.value);
  const handleAmountFilterChange = (e) => setFilterAmount(e.target.value);

  const filteredTransactions = mockTransactions.filter((txn) => {
    const matchesSearch =
      txn.id.includes(search) || txn.customer.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = filterStatus ? txn.status === filterStatus : true;
    const matchesAmount =
      filterAmount ? txn.amount >= parseFloat(filterAmount) : true;

    return matchesSearch && matchesStatus && matchesAmount;
  });

  return (
    <div className="Transactions">
          <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Transactions Overview
      </Typography>

      {/* Filters */}
      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            fullWidth
            label="Search by ID/Customer"
            variant="outlined"
            size="small"
            value={search}
            onChange={handleSearchChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            fullWidth
            label="Status"
            variant="outlined"
            size="small"
            select
            value={filterStatus}
            onChange={handleStatusFilterChange}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Completed">Completed</MenuItem>
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Refunded">Refunded</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            fullWidth
            label="Min Amount"
            variant="outlined"
            size="small"
            type="number"
            value={filterAmount}
            onChange={handleAmountFilterChange}
          />
        </Grid>
      </Grid>

      {/* Transaction Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Transaction ID</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Payment Method</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredTransactions.map((txn) => (
              <TableRow key={txn.id}>
                <TableCell>{txn.id}</TableCell>
                <TableCell>{txn.customer}</TableCell>
                <TableCell>{txn.date}</TableCell>
                <TableCell>${txn.amount.toFixed(2)}</TableCell>
                <TableCell>
                  <Chip
                    label={txn.status}
                    color={statusColors[txn.status]}
                    size="small"
                  />
                </TableCell>
                <TableCell>{txn.method}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
    </div>
  );
};

export default Transactions;