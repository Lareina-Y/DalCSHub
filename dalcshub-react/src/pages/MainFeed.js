import { useState } from "react";
import { Tabs, Tab, Typography, Box, Grid, Link } from "@mui/material";
import { Page, PageTitle, CourseCard } from "../components";
// [3] Background Images from : https://github.com/wrappixel/materialpro-react-lite/tree/master/package/src/assets/images/bg
import bg1 from "../assets/images/bg1.jpg";
import bg2 from "../assets/images/bg2.jpg";
import bg3 from "../assets/images/bg3.jpg";
import bg4 from "../assets/images/bg4.jpg";
import bg5 from "../assets/images/bg5.jpg";
import "../App.css";


const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && (
        <Box sx={{ pt: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

// Description from Dalhousie website [5]
const courses = [
  {
    id: 1,
    name: "CSCI 4177 Advanced Web Services",
    description:
      "This course provides a hands-on learning environment for advanced web development techniques, such as HTML5 APIs for the creation of dynamic web graphics as well as adding offline functionality to web applications and documentation.",
    followed: true,
    bgImage: bg1,
  },
  {
    id: 2,
    name: "CSCI 2170  Intro to Server Side Scripting",
    description:
      "A server side scripting language is used to create web pages with dynamic content. The course provides the technology necessary for connecting client web pages to web servers and processing and storing information obtained using forms during web sessions.",
    followed: true,
    bgImage: bg2,
  },
  {
    id: 3,
    name: "CSCI 1800   Computing and Society in History",
    description:
      "This course introduces students to the history of computing from early mechanical devices to the internet. Students will learn to read, write, and discuss scholarly arguments about how computing has shaped society, and how society has shaped computing, over time.",
    followed: true,
    bgImage: bg3,
  },
  {
    id: 4,
    name: "CSCI 1100   Computer Science I",
    description:
      "This course provides a general introduction to computer science and the hardware and software of computers. The main focus is on programming skills and how to apply these skills in solving a variety of problems. Algorithmic concepts are stressed.",
    followed: true,
    bgImage: bg4,
  },
  {
    id: 5,
    name: "CSCI 4113   Design and Analysis of Algorithms II",
    description:
      "This course covers advanced techniques for the design and analysis of efficient algorithms. Problems are taken from a wide range of areas including combinatorics, numerical computation, graph algorithms, string matching, approximation algorithms.",
    followed: true,
    bgImage: bg5,
  },
];

export const MainFeed = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <Page>
      <PageTitle title={"Main Feed"} link={"/"} />

      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
          >
            <Tab label="My Courses" />
            <Tab label="Saved Posts" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0} style={{ paddingBottom: "10px" }}>
          {courses.length > 0 ? (
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              spacing={2}
            >
              {courses.map((course) => (
                <Grid item key={course.id} xs={12} sm={6} md={4} lg={3}>
                  <CourseCard
                    name={course.name}
                    description={course.description}
                    followed={course.followed}
                    bgImage={course.bgImage}
                  />
                </Grid>
              ))}
            </Grid>
          ) : (
            <Typography>
              {" "}
              No course has been followed yet ! Go to{" "}
              <Link href={"/browse-courses"}>Browse Courses Page</Link>
            </Typography>
          )}
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Typography>No post has been saved yet !</Typography>
        </TabPanel>
      </Box>
    </Page>
  );
};
