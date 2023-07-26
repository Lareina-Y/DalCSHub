// Author: Kent Chew

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Typography, useMediaQuery, Grid, Divider, Button } from "@mui/material";
import { Page, Post } from "../components";
import { useTheme } from "@mui/material/styles";
import bg1 from "../assets/images/bg1.jpg";

import "../App.css";

export const CourseDetail = () => {
  const { courseNumber } = useParams();
  const [posts, setPosts] = useState([]);
  const [course, setCourse] = useState({});

  // get and identify course to display based on course number
  const getCourseDetails = async (courseNumber) => {
    try {
      const response = await fetch(`/api/course/${courseNumber}`);
      if (response.status === 200) {
        const result = await response.json();
        setCourse(result.data);
        console.log("Course details: ", result);
      } else {
        console.error("Failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  // get post based on course number
  const getPostsByCourse = async (courseNumber) => {
    try {
      const response = await fetch(`/api/post/course/${courseNumber}`);
      if (response.status === 200) {
        const result = await response.json();
        setPosts(result.data);
        console.log("Posts:", result);
      } else {
        console.error("Failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCourseDetails(courseNumber);
    getPostsByCourse(courseNumber);
  }, []);

  // set button href to create post page with course number
  const createPostHref = `/create-post/${course.number}`;

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
              fontSize: useMediaQuery(useTheme().breakpoints.down("sm")) ? "3em" : "5em",
            }}
          >
            {course.title}
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ padding: "1em", marginBottom: "15px" }}>
        <Grid item sm={3} xs={12}>
          <Typography variant="body1" gutterBottom>
            <b>Instructor:</b> Dr. Marriot Klassen
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
            {course.description}
          </Typography>
        </Grid>

        <Grid item sm={3} xs={12}>
          <Button
            style={{ marginBottom: "1em" }}
            variant="contained"
            size="large"
            color="secondary"
            href={createPostHref}
            fullWidth
          >
            Create Post
          </Button>
          <Button variant="contained" size="large" color="secondary" href="" fullWidth>
            Follow Course
          </Button>
        </Grid>
      </Grid>

      <Divider />

      {posts.map((post) => (
        <Post
          postTitle={post.postTitle}
          postDate={post.timeCreated}
          postAuthor={post.postAuthor}
          postDescription={post.postDescription}
          postRating={post.postRating}
        ></Post>
      ))}
    </Page>
  );
};
