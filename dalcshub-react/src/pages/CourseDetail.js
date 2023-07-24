import { useState } from "react";
import { Typography, useMediaQuery, Grid, Divider, IconButton, Button } from "@mui/material";
import { Page, PageTitle } from "../components";
import { useTheme } from "@mui/material/styles";
import bg1 from "../assets/images/bg1.jpg";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import "../App.css";
import { flushSync } from "react-dom";

export const CourseDetail = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

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
            CSCI 4177: Advanced Web Services
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ padding: "1em", marginBottom: "15px" }}>
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
            This course provides a hands-on learning environment for advanced web development
            techniques, such as HTML5 APIs for the creation of dynamic web graphics as well as
            adding offline functionality to web applications and documentation.
          </Typography>
        </Grid>

        <Grid item sm={3} xs={12}>
          <Button variant="contained" size="large" color="secondary" href="" fullWidth="true">
            Create Post
          </Button>
        </Grid>
      </Grid>
      <Divider />
      <Grid container spacing={2} style={{ padding: "1em", marginTop: "15px" }}>
        <Grid item sm={12} style={{ backgroundColor: "#F9F9F9", padding: "3em" }}>
          <Grid container spacing={2}>
            <Grid item sm={11} xs={11}>
              <Typography variant="h4" gutterBottom>
                Tutorial 7 is way too complex!
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                posted July 20th 12:49pm by Leona Erricson
              </Typography>
              <Divider />
              <Typography variant="body1" gutterBottom style={{ margin: "1vh 0 1vh 0" }}>
                Hey folks, I’ve been looking into hosting my website but I had no luck with Netlify
                due to GitLab issues. Are there any alternatives that anyone would recommend?
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
                  <ArrowUpwardIcon />
                </IconButton>
                <Typography variant="h6" gutterBottom>
                  0
                </Typography>
                <IconButton size="large" color="secondary" href="">
                  <ArrowDownwardIcon />
                </IconButton>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Page>
  );
};
