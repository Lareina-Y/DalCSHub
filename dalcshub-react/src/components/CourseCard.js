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
import { useUser } from '../providers';
import { useNavigate } from 'react-router-dom';
// [4] Default Course Background Image from : 
// https://www.buytvinternetphone.com/blog/images/programming-the-rca-universal-remote-without-a-code-search-button.jpg
import defaultCoursebg from "../assets/images/default-course-bg.jpeg";

export const CourseCard = (props) => {
  const navigate = useNavigate();
  const { userId, courseId, title, courseNumber, flags, creditHours, followed, bgImage } = props;
  const [dialogOpen, setDialogOpen] = useState(false);
  const { userDetailRefresh } = useUser();

  const handleFollowOnClick = async () => {
    try {
      const url = followed ? "/api/user/unfollow": "/api/user/follow";
      const response = await fetch(url , {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "userId": userId, "courseId": courseId })
      });
      if (response.status === 200) {
        // TODO: Lareina - Notification message
      } else {
        console.error("Failed to follow/unfollow course");
      }
      setDialogOpen(false);
      userDetailRefresh(userId);
    } catch (error) {
      console.error(error);
    }
  }

  const handleLearnMoreOnClick = () => {
    navigate(`/course-details/${courseNumber}`);
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
            Are you sure you want to unfollow <strong>{title}</strong>?
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
            {title}
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
