import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@mui/material";

export const CourseCard = (props) => {
  const { name, description, followed, bgImage } = props;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt="course background" height="140" image={bgImage} />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontFamily: "Helvetica Neue", fontWeight: "500" }}
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontFamily: "Helvetica Neue", fontWeight: "500" }}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{ color: "#962061" }}>
          {followed ? "UnFollow" : "Follow"}
        </Button>
        <Button size="small" sx={{ color: "#962061" }}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};
