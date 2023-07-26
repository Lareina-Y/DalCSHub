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
import { styled } from "@mui/material/styles";
import { handleFollowOrUnfollowQuery } from "../utils"
// [4] Default Course Background Image from : 
// https://www.buytvinternetphone.com/blog/images/programming-the-rca-universal-remote-without-a-code-search-button.jpg
import defaultCoursebg from "../assets/images/default-course-bg.jpeg";

const MuiCard = styled(Card)(({ deleting }) => ({
  display: "flex", 
  flexDirection: "column", 
  height: "100%",
  opacity: deleting ? 0 : 1,
  transition: 'all 1s ease-in',
}));

export const CourseCard = (props) => {
  const navigate = useNavigate();
  const { userId, courseId, title, courseNumber, flags, creditHours, followed, bgImage } = props;
  const [dialogOpen, setDialogOpen] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const { userDetailRefresh } = useUser();

  const handleFollowOrUnfollowOnClick = async () => {
    setDeleting(true);
    await handleFollowOrUnfollowQuery(userId, courseId, !followed, userDetailRefresh);
    setDialogOpen(false);
    setDeleting(false);
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
          <Button onClick={handleFollowOrUnfollowOnClick} autoFocus variant="contained">Unfollow</Button>
        </DialogActions>
      </Dialog>

      <MuiCard deleting={deleting}>
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
            onClick={() => { if (followed) { setDialogOpen(true)} else {handleFollowOrUnfollowOnClick();} }}
          >
            {followed ? "UnFollow" : "Follow"}
          </Button>
          <Button size="small" onClick={handleLearnMoreOnClick}>Learn More</Button>
        </CardActions>
      </MuiCard>
    </>
  );
};
