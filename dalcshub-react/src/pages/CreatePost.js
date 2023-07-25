import { useState } from "react";
import {
  Typography,
  useMediaQuery,
  TextField,
  Grid,
  Divider,
  Button,
} from "@mui/material";
import { Page, PageTitle } from "../components";
import { useTheme } from "@mui/material/styles";
import bg1 from "../assets/images/bg1.jpg";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import "../App.css";
import { flushSync } from "react-dom";

export const CreatePost = () => {
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
        <Grid item sm={9} xs={12}>
          <Typography variant="body1" gutterBottom>
            This course provides a hands-on learning environment for advanced
            web development techniques, such as HTML5 APIs for the creation of
            dynamic web graphics as well as adding offline functionality to web
            applications and documentation.
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

          <form>
            <TextField
              style={{ margin: "1em 0 1em 0" }}
              label="Title"
              variant="outlined"
              required
              fullWidth
            />
            <TextField
              style={{ marginBottom: "1em" }}
              label="Message"
              multiline
              rows={4}
              variant="outlined"
              required
              fullWidth
            />
            <Button
              type="submit"
              size="large"
              variant="contained"
              color="secondary"
            >
              Submit
            </Button>
          </form>
        </Grid>
      </Grid>
    </Page>
  );
};
