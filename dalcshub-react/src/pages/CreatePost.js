// Author: Kent Chew

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Typography, useMediaQuery, TextField, Grid, Divider, Button } from "@mui/material";
import { Page } from "../components";
import { useTheme } from "@mui/material/styles";
import bg1 from "../assets/images/bg1.jpg";

import "../App.css";

export const CreatePost = () => {
  const { courseNumber } = useParams();
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [course, setCourse] = useState({});

  // get and identify course to display based on course number
  const getCourseDetails = async (courseNumber) => {
    try {
      const response = await fetch(`/api/course/${courseNumber}`);
      console.log(response.status);
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

  // access localStorage to get user information
  const user = JSON.parse(localStorage.getItem("user"));

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch("/api/post/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          message: message,
          author: "Jane Doe", // REPLACE WITH USER FROM LOCAL STORAGE
          date: new Date().toISOString(),
          courseId: course.number,
        }),
      });

      const data = await res.json();
      console.log("Successfully created post: ", data);

      // clear form after successful submission
      setTitle("");
      setMessage("");
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  useEffect(() => {
    getCourseDetails(courseNumber);
  }, []);

  // set cancel button href to return to course detail page
  const cancelHref = `/course-details/${course.number}`;

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
        <Grid item sm={9} xs={12}>
          <Typography variant="body1" gutterBottom>
            {course.description}
          </Typography>
        </Grid>
      </Grid>

      <Divider />

      <Grid
        container
        style={{
          backgroundColor: "#F9F9F9",
          marginTop: "15px",
          padding: "3em",
        }}
      >
        <Grid item sm={12}>
          <Typography variant="h4" gutterBottom>
            Create a New Post
          </Typography>

          <Divider />

          <form onSubmit={handleSubmit}>
            <TextField
              style={{ margin: "1em 0 1em 0" }}
              label="Title"
              variant="outlined"
              required
              fullWidth
              value={title}
              onChange={handleTitleChange}
            />
            <TextField
              style={{ marginBottom: "1em" }}
              label="Message"
              multiline
              rows={4}
              variant="outlined"
              required
              fullWidth
              value={message}
              onChange={handleMessageChange}
            />
            <Button
              type="submit"
              size="large"
              variant="contained"
              color="secondary"
              style={{ margin: "0 1em 1em 0" }}
            >
              Submit
            </Button>
            <Button
              href={cancelHref}
              size="large"
              variant="contained"
              color="secondary"
              style={{ margin: "0 1em 1em 0" }}
            >
              Back
            </Button>
          </form>
        </Grid>
      </Grid>
    </Page>
  );
};
