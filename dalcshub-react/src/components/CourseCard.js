//Author: Shiwen(Lareina) Yang
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

export const CourseCard = (props) => {
  const { name, description, followed, bgImage } = props;

  return (
    <Card style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <CardMedia
        component="img"
        alt="course background"
        height="140"
        image={bgImage}
      />
      <CardContent style={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h3" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions style={{ marginTop: "auto" }}>
        <Button size="small">{followed ? "UnFollow" : "Follow"}</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};
