// Author: Kent Chew
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { Typography, useMediaQuery, Grid, Divider, Button } from "@mui/material";
import { Page, Post, CircularProgress } from "../components";
import { useUser } from '../providers';
import { handleFollowOrUnfollowQuery } from "../utils"
import "../App.css";
// [4] Default Course Background Image from : 
// https://www.buytvinternetphone.com/blog/images/programming-the-rca-universal-remote-without-a-code-search-button.jpg
import defaultCoursebg from "../assets/images/default-course-bg.jpeg";


export const CourseDetail = () => {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const { user : currentUser, userDetailRefresh } = useUser();
  const { _id: userId, followedCourses : followedCoursesIds } = currentUser;

  const { courseNumber } = useParams();
  const [ posts, setPosts ] = useState([]);
  const [ course, setCourse ] = useState({});
  const [ loading, setLoading ] = useState(true);

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
    const fetchData = async () => {
        await getCourseDetails(courseNumber);
        await getPostsByCourse(courseNumber);
        setLoading(false);
    };
    fetchData();
  }, [courseNumber]);

  // set button href to create post page with course number
  const createPostHref = `/create-post/${course.number}`;

  const followOrUnfollowOnclick = (courseId) => {
    handleFollowOrUnfollowQuery(userId, courseId, !followedCoursesIds.includes(courseId), userDetailRefresh)
  };

  if (loading) return (<CircularProgress fullScreen />);

  return (
    <Page>
      <Grid
        container
        style={{
          backgroundImage: `url(${course.image ?? defaultCoursebg})`,
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
            variant="h1"
            gutterBottom
            sx={{
              textShadow: "1px 1px 3px rgba(0, 0, 0, 1)",
              color: "white",
              fontWeight: 500,
              fontSize: smallScreen ? "2em" : "3em",
            }}
          >
            {course.title}
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ padding: "1em", marginBottom: "15px" }}>
        {/* TODO: kent - connect to backend */}
        <Grid item xs={12} sm={5} md={3}>
          <Typography variant="body1" gutterBottom>
            <b>Number:</b> {course.subject} {course.number}
          </Typography>
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
        <Grid item xs={12} sm={7} md={6}>
          <Typography variant="body1" gutterBottom>
            {course.description}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
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
          <Button 
            variant="contained" 
            size="large" 
            color="secondary" 
            onClick={() => followOrUnfollowOnclick(course._id)} 
            fullWidth
          >
            {followedCoursesIds.includes(course._id) ? "Unfollow" : "Follow" }
          </Button>
        </Grid>
      </Grid>

      <Divider />

      {posts.map((post) => (
        <Post
          key={post._id}
          postTitle={post.postTitle}
          postDate={post.timeCreated}
          postAuthor={post.postAuthor}
          postDescription={post.postDescription}
          postRating={post.postRating}
        ></Post>
      ))}
      {posts.length === 0 &&
        <Typography variant="body1" sx={{ paddingTop: "20px" }}>
          There is no posts yet !
        </Typography>}
    </Page>
  );
};
