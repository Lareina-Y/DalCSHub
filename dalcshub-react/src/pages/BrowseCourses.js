//Author: Shiwen(Lareina) Yang

import { useState, useEffect } from "react";
import {
  Grid,
  Button,
  TextField,
  InputAdornment,
  Card,
  Typography,
  CardContent,
  CardActionArea,
  CardActions,
  Stack,
  IconButton,
  Chip,
} from "@mui/material";
import { Page, PageTitle, CircularProgress } from "../components";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

export const BrowseCourses = () => {
  const [loading, setLoading] = useState(true);
  const [searchKey, setSearchKey] = useState("");
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);

  const fetchCourses = async () => {
    try {
      const response = await fetch("/api/course/all");
      if (response.status === 200) {
        const result = await response.json();
        setCourses(result.data);
        setLoading(false);
      } else {
        console.error("Failed to fetch courses");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  useEffect(() => {
    const newfilteredCourses = courses.filter((course) => {
      const courseDetails = `${course.subject} ${course.number} ${
        course.title
      } ${course.description} ${course.flags.join(" ")}`;
      return courseDetails.toLowerCase().includes(searchKey.toLowerCase());
    });
    setFilteredCourses(newfilteredCourses);
  }, [searchKey, courses]);

  const followOnclick = (event, courseId) => {
    event.stopPropagation(); // Prevent the event from propagating to the parent CardActionArea
    console.log("Follow button onclick", courseId);
  };

  return (
    <Page>
      <PageTitle title={"Browse Courses"} link={"/browse-courses"} />
      <TextField
        fullWidth
        value={searchKey}
        variant="outlined"
        type="text"
        placeholder="Enter specific course details..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton disableRipple onClick={() => setSearchKey("")}>
                <ClearIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        onChange={(event) => setSearchKey(event.target.value)}
      />

      {loading && <CircularProgress fullScreen />}
      {!loading &&
        filteredCourses.length > 0 &&
        filteredCourses.map((course) => (
          // TODO: Lareina - refactor <CardActionArea> and <CardActions> layout
          <Card key={course._id} variant="outlined">
            <CardActionArea onClick={() => console.log("detail")} disableRipple>
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid item xs={12} sm>
                  <CardContent>
                    <Stack
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="center"
                      spacing={1}
                      flexWrap="wrap"
                      sx={{ marginBottom: "10px" }}
                    >
                      <Typography variant="h4">
                        {course.subject} {course.number} | {course.title}{" "}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        - 20 Followers
                      </Typography>
                    </Stack>
                    <Typography variant="body2">
                      {course.description}
                    </Typography>
                    <Stack
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="center"
                      spacing={1}
                      flexWrap="wrap"
                      sx={{ marginTop: "10px" }}
                    >
                      {course.flags.map((flag) => (
                        <Chip
                          key={course.number + flag}
                          label={flag}
                          color="primary"
                          size="small"
                          variant="outlined"
                          onClick={() => setSearchKey(flag)}
                        />
                      ))}
                    </Stack>
                  </CardContent>
                </Grid>
                <Grid item>
                  <CardActions>
                    <Button
                      disableRipple
                      size="small"
                      variant="outlined"
                      color="primary"
                      onClick={(event) => followOnclick(event, course._id)}
                    >
                      Follow
                    </Button>
                  </CardActions>
                </Grid>
              </Grid>
            </CardActionArea>
          </Card>
        ))}
      {!loading && filteredCourses.length === 0 && (
        <Typography variant="body1" sx={{ paddingTop: "20px" }}>
          {" "}
          No results found, please try another search query.
        </Typography>
      )}
    </Page>
  );
};
