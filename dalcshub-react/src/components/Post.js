import { Grid, Divider, IconButton, Button, Typography } from "@mui/material";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useState, useEffect } from "react";

export const Post = (props) => {
  const { postTitle, postAuthor, postDate, postDescription, postRating, children } = props;

  const [posts, setPosts] = useState([]);
  const [likes, setLikes] = useState(postRating);

  // convert postDate to just show YYYY-MM-DD as string
  const formattedDate = new Date(postDate).toISOString().slice(0, 10);

  const handleLike = (title) => {
    let requiredPost = posts.filter((post) => post.postTitle === title);
    setLikes(requiredPost[0].postRating + 1);
  };

  const handleDisLike = (title) => {
    let requiredPost = posts.filter((post) => post.postTitle === title);
    if (likes - 1 > 0) {
      setLikes(requiredPost[0].postRating - 1);
    } else {
      setLikes(0);
    }
  };

  const getLatest = async () => {
    try {
      const response = await fetch("/api/post");
      if (response.status === 200) {
        const result = await response.json();
        setPosts(result.data);
      } else {
        console.error("Failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getLatest();
  }, [handleLike, handleDisLike]);

  return (
    <Grid container spacing={2} style={{ padding: "1em", marginTop: "15px" }}>
      <Grid item sm={12} style={{ backgroundColor: "#F9F9F9", padding: "3em" }}>
        <Grid container spacing={2}>
          <Grid item sm={11} xs={11}>
            <Typography variant="h4" gutterBottom>
              {postTitle}
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              posted {formattedDate} by {postAuthor}
            </Typography>
            <Divider />
            <Typography variant="body1" gutterBottom style={{ margin: "1vh 0 1vh 0" }}>
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
              <IconButton
                size="large"
                color="secondary"
                href=""
                onClick={() => handleLike(postTitle)}
              >
                <ArrowUpwardIcon />
              </IconButton>
              <Typography variant="h6" gutterBottom>
                {likes}
              </Typography>
              <IconButton
                size="large"
                color="secondary"
                href=""
                onClick={() => handleDisLike(postTitle)}
              >
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
