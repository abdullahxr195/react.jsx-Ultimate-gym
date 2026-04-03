import { Card,CardActions, CardContent, CardMedia, Typography } from "@mui/material";

export default function MenuCard({image, name }) {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
          <CardMedia
          component="img"
          image={image}
            height="200"
            width="200"
            
          />
            <CardContent>
                <Typography variant="h4" >{name}</Typography>
            </CardContent>
          

        <CardActions>

            <button className="btn">View</button>
            <button className="btn2">Add to cart</button>

        </CardActions>



      </Card>
    </>
  );
}