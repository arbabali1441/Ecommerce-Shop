import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';

const products =[
    { id: 1, name: 'Shoes', description: 'Running shoes.', price: '$5', image: 'https://cdn.profoto.com/cdn/0521d92/contentassets/1e544f28642049edbc15c83e5591500f/001profoto-b1-micheal-scholz-rising-star-600px-03-600x471.jpg?width=2840&quality=75&format=jpg' },
    { id: 2, name: 'Macbook', description: 'Apple macbook.', price: '$10', image: 'https://shoptime.pk/images/thumbs/0000024_apple-macbook-pro-13-inch_550.jpeg' },
];

const Products = () => {
    return (
        <main>
          <Grid container justify="center" spacing={4}>
              {products.map((product) => (
                <Grid item key={products.id} xs={12} sm={6} md={4} lg={3}>
                  <Product product={product} />
                </Grid>
              ))}
          </Grid>
        </main>
    );
    
}

export default Products;