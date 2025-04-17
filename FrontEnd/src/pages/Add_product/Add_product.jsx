import React, { useState } from 'react';
import "./Add_product.css"
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  MenuItem,
  Paper,
  Switch,
  FormControlLabel,
} from '@mui/material';

const categories = ['Clothing', 'Electronics', 'Shoes', 'Accessories'];

const AddProduct = () => {
  const [form, setForm] = useState({
    name: '',
    description: '',
    price: '',
    stock: '',
    category: '',
    image: null,
    active: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'file') {
      setForm({ ...form, image: files[0] });
    } else if (type === 'checkbox') {
      setForm({ ...form, [name]: checked });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Product submitted:', form);
    // Send to backend here
  };

  return (
<div className="new_product">
<Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Add New Product
      </Typography>

      <Paper sx={{ p: 3, maxWidth: 600 }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} direction="column">
            {/* Product Name */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Product Name"
                name="name"
                variant="outlined"
                value={form.name}
                onChange={handleChange}
                required
              />
            </Grid>

            {/* Category */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Category"
                name="category"
                select
                variant="outlined"
                value={form.category}
                onChange={handleChange}
                required
              >
                {categories.map((cat) => (
                  <MenuItem key={cat} value={cat}>
                    {cat}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            {/* Description */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description"
                name="description"
                multiline
                minRows={3}
                variant="outlined"
                value={form.description}
                onChange={handleChange}
              />
            </Grid>

            {/* Price */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Price ($)"
                name="price"
                type="number"
                variant="outlined"
                value={form.price}
                onChange={handleChange}
                required
              />
            </Grid>

            {/* Stock */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Stock Quantity"
                name="stock"
                type="number"
                variant="outlined"
                value={form.stock}
                onChange={handleChange}
              />
            </Grid>

            {/* Image Upload */}
            <Grid item xs={12}>
              <Button variant="outlined" component="label">
                Upload Image
                <input
                  type="file"
                  name="image"
                  hidden
                  onChange={handleChange}
                  accept="image/*"
                />
              </Button>
              {form.image && (
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Selected: {form.image.name}
                </Typography>
              )}
            </Grid>

            {/* Status */}
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Switch
                    name="active"
                    checked={form.active}
                    onChange={handleChange}
                  />
                }
                label={form.active ? 'Active' : 'Draft'}
              />
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Add Product
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
</div>
  );
};

export default AddProduct;