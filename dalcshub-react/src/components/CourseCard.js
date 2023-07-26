//Author: Shiwen(Lareina) Yang
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText
} from "@mui/material";
import { useState } from "react";
// [4] Default Course Background Image from : 
// https://www.buytvinternetphone.com/blog/images/programming-the-rca-universal-remote-without-a-code-search-button.jpg
import defaultCoursebg from "../assets/images/default-course-bg.jpeg";

export const CourseCard = (props) => {
  const { userId, courseId, name, flags, creditHours, followed, bgImage } = props;
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleFollowOnClick = async () => {
    try {
      const url = followed ? "/api/user/unfollow": "/api/user/follow";
      const response = await fetch(url , {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "userId": userId, "courseId": courseId })
      });
      if (response.status === 200) {
        console.log("ok");
      } else {
        console.error("Failed to follow/unfollow course");
      }
      setDialogOpen(false);
    } catch (error) {
      console.error(error);
    }
  }

  const handleLearnMoreOnClick = () => {
    console.log("go to the Course Detail Page", courseId)
  }

  return (
    <>
      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
      >
        <DialogTitle>
          {"Unfollow Course"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to unfollow <strong>{name}</strong>?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)} variant="contained" color="neutral">Discard</Button>
          <Button onClick={handleFollowOnClick} autoFocus variant="contained">Unfollow</Button>
        </DialogActions>
      </Dialog>

      <Card style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <CardMedia
          component="img"
          alt="course background"
          height="140"
          image={bgImage ?? defaultCoursebg}
        />
        <CardContent style={{ flexGrow: 1 }}>
          <Typography variant="h3" gutterBottom>
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Credit hours: {creditHours}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {flags}
          </Typography>
        </CardContent>
        <CardActions style={{ marginTop: "auto" }}>
          <Button 
            size="small" 
            onClick={() => { if (followed) { setDialogOpen(true)} else {handleFollowOnClick();} }}
          >
            {followed ? "UnFollow" : "Follow"}
          </Button>
          <Button size="small" onClick={handleLearnMoreOnClick}>Learn More</Button>
        </CardActions>
      </Card>
    </>
  );
};
