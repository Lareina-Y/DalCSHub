import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';

export const CourseCard = (props) => {

  const {name, description, followed, bgImage} = props;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="course background"
        height="140"
        image={bgImage}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions >
        <Button size="small">{followed? "UnFollow": "Follow"}</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}