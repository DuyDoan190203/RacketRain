import { Card, CardContent, CardMedia, Typography, Button, CardActions, CardHeader, Avatar } from "@mui/material";
import { Product } from "../../app/models/product";
import { Link } from "react-router-dom";

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
        sx={{ height: 160, width: 350, backgroundSize: 'contain', bgcolor: 'primary.light' }}
        image={product.pictureUrl}
        title={product.name}
      />

      <CardContent>
        <Typography gutterBottom color='secondary' variant="h5" >
          €{product.price.toFixed(2)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.brand} / {product.type}
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small">Add to cart</Button>
        <Button component={Link} to={`/catalog/${product.id}`} size="small">View</Button>
      </CardActions>
    </Card>
  )
}