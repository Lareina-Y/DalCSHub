import { useState } from "react";
import {
  Typography,
  useMediaQuery,
  Grid,
  Divider,
  Button,
} from "@mui/material";
import { Page, Post} from "../components";
import { useTheme } from "@mui/material/styles";
import bg1 from "../assets/images/bg1.jpg";

import "../App.css";
import { flushSync } from "react-dom";

export const CourseDetail = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  // get all posts from API
  const getPosts = async () => {
    try {
      const response = await fetch("/api/post/all");
      const jsonData = await response.json();
      
      console.log(jsonData);
    } catch (err) {
      console.error("Failed to fetch posts");
      console.error(err.message);
    }
  };

  getPosts();

  return (
    <Page>
      <Grid
        container
        style={{
          backgroundImage: `url(${bg1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "25vh",
          padding: "30px",
          marginBottom: "30px",
        }}
      >
        <Grid
          item
          xs={12}
          style={{ display: "flex", alignItems: "center" }}
          sx={{ textAlign: "left", marginBottom: "0px" }}
        >
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              textShadow: "1px 1px 3px rgba(0, 0, 0, 1)",
              color: "white",
              fontWeight: 500,
              fontSize: useMediaQuery(useTheme().breakpoints.down("sm"))
                ? "3em"
                : "5em",
            }}
          >
            CSCI 4177: Advanced Web Services
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        style={{ padding: "1em", marginBottom: "15px" }}
      >
        <Grid item sm={3} xs={12}>
          <Typography variant="body1" gutterBottom>
            <b>Instructor:</b> INSTRUCTOR NAME
          </Typography>
          <Typography variant="body1" gutterBottom>
            <b>Offering:</b> Fall/Winter/Summer
          </Typography>
          <Typography variant="body1" gutterBottom>
            <b>Status:</b> Active - Summer 2023
          </Typography>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Typography variant="body1" gutterBottom>
            This course provides a hands-on learning environment for advanced
            web development techniques, such as HTML5 APIs for the creation of
            dynamic web graphics as well as adding offline functionality to web
            applications and documentation.
          </Typography>
        </Grid>

        <Grid item sm={3} xs={12}>
          <Button
            style={{ marginBottom: "1em" }}
            variant="contained"
            size="large"
            color="secondary"
            href=""
            fullWidth
          >
            Create Post
          </Button>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            href=""
            fullWidth
          >
            Follow Course
          </Button>
        </Grid>
      </Grid>

      <Divider />

     


      <Post
        postTitle={"Tutorial 7 is way too complex!"}
        postDate={"July 20th 12:49pm"}
        postAuthor={"Leona Erricson"}
        postDescription={
          "Hey folks, I’ve been looking into hosting my website but I had no luck with Netlify due to GitLab issues. Are there any alternatives that anyone would recommend?"
        }
        postRating={0}
      ></Post>

      <Post
        postTitle={"Tutorial 5 is way too easy!"}
        postDate={"July 13th 5:20am"}
        postAuthor={"Nitesh Kumar"}
        postDescription={
          "I need a better challenge, this course is too easy for me."
        }
        postRating={-13}
      ></Post>
    </Page>
  );
};
