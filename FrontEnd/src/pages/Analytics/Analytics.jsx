import React from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import InventoryIcon from '@mui/icons-material/Inventory';
import "./Analytics.css"

const salesData = [
  { date: 'Far 1', revenue: 1200 },
  { date: 'Far 2', revenue: 2100 },
  { date: 'Far 3', revenue: 800 },
  { date: 'Far 4', revenue: 1600 },
  { date: 'Far 5', revenue: 1900 },
  { date: 'Far 6', revenue: 2400 },
  { date: 'Far 7', revenue: 3000 },
];

const topProducts = [
  { name: 'Nike Shoes', sales: 20 },
  { name: 'Black T-Shirt', sales: 15 },
  { name: 'Blue Jeans', sales: 12 },
  { name: 'Sport Cap', sales: 8 },
];

const StatCard = ({ icon, label, value }) => (
  <Card>
    <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ mr: 2 }}>{icon}</Box>
      <Box>
        <Typography variant="subtitle2" color="textSecondary">{label}</Typography>
        <Typography variant="h6">{value}</Typography>
      </Box>
    </CardContent>
  </Card>
);

const Analytics = () => {
  return (
    <div className="Analytics">
          <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Sales Dashboard
      </Typography>

      {/* Stat Cards */}
      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard icon={<MonetizationOnIcon fontSize="large" />} label="Total Revenue" value="$32,450" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard icon={<ShoppingCartIcon fontSize="large" />} label="Orders" value="235" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard icon={<TrendingUpIcon fontSize="large" />}  label="Growth Rate" value="12% ↑"/>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard icon={<InventoryIcon fontSize="large" />} label="Products in Stock" value="184" />
        </Grid>
      </Grid>

      {/* Revenue Chart */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Revenue - Last 7 Days
          </Typography>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={salesData}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="revenue" stroke="#1976d2" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Top Selling Products */}
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Top Selling Products
          </Typography>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={topProducts}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" fill="#4caf50" barSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </Box>
    </div>
  );
};

export default Analytics;