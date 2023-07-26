import { Grid, Divider, IconButton, Button, Typography } from "@mui/material";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

export const Post = (props) => {
  const { postTitle, postAuthor, postDate, postDescription, postRating , children} =
    props;
  
  return (
    <Grid container spacing={2} style={{ padding: "1em", marginTop: "15px" }}>
      <Grid item sm={12} style={{ backgroundColor: "#F9F9F9", padding: "3em" }}>
        <Grid container spacing={2}>
          <Grid item sm={11} xs={11}>
            <Typography variant="h4" gutterBottom>
              {postTitle} 
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              posted {postDate} by {postAuthor}
            </Typography>
            <Divider />
            <Typography
              variant="body1"
              gutterBottom
              style={{ margin: "1vh 0 1vh 0" }}
            >
              {postDescription}
            </Typography>
          </Grid>
          <Grid item sm={1} xs={1} style={{ textAlign: "center" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "100%",
              }}
            >
              <IconButton size="large" color="secondary" href="">
                <BookmarkBorderIcon />
              </IconButton>
              <IconButton size="large" color="secondary" href="">
                <ArrowUpwardIcon />
              </IconButton>
              <Typography variant="h6" gutterBottom>
                {postRating}
              </Typography>
              <IconButton size="large" color="secondary" href="">
                <ArrowDownwardIcon /> 
              </IconButton>
              {children}
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
