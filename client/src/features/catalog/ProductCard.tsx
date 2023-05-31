import { Card, CardContent, CardMedia, Typography, Button, CardActions, CardHeader, Avatar } from "@mui/material";
import { Product } from "../../app/models/product";

interface Props{
  product: Product;
}

export default function ProductCard({product}: Props){
  return(
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{bgcolor: 'secondary.main'}}>
            {product.name.charAt(0).toUpperCase()}
          </Avatar>
        }
        title ={product.name}
        titleTypographyProps={{
          sx: {fontWeight: 'bold', color: 'primary.main'}
        }}

      />
      <CardMedia
        sx={{ height: 150, weight: 90, backgroundSize: 'contain', bgcolor: 'light' }}
        image={product.pictureUrl}
        title={product.name}
      />

      <CardContent>
        <Typography gutterBottom color='secondary' variant="h5" >
          €{(product.price.toFixed(2))}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.brand} / {product.type}
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small">Add to cart</Button>
        <Button size="small">View</Button>
      </CardActions>
    </Card>
  )
}