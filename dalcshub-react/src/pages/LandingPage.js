import React, { useState } from "react";
import video from "../assets/videos/background.mp4";
import { useNavigate } from "react-router-dom";
import arrow from "../assets/images/arrow.png";
import { Card, CardContent, Button } from "@mui/material";

const LandingPage = () => {
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  const buttonClicked = () => {
    setRedirect(true);
    navigate("/main");
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        textAlign: "center",
      }}
    >
      {!redirect && (
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            overflowY: "scroll",
            scrollSnapType: "y mandatory",
          }}
        >
          <div
            style={{
              height: "100vh",
              scrollSnapAlign: "start",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "lightblue",
              position: "relative",
              zIndex: 1,
            }}
          >
            <div>
              <h1
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: "4rem",
                }}
              >
                DalCSHub
              </h1>

              <h1 style={{ color: "white", textAlign: "center" }}>
                We promise to elevate your learning, together.
              </h1>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "2rem",
                }}
              >
                {/* Reference Link:  https://www.freeiconspng.com/img/41944
              Date accessed: 19 June, 2023
              Help taken: The arrow image was taken from this link
          */}
                <img src={arrow} style={{ width: "100px", height: "100px" }} />
              </div>
            </div>

            <video
              autoPlay
              muted
              loop
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                filter: "brightness(50%)",
                objectFit: "cover",
                zIndex: -1,
              }}
            >
              {/* Reference Link:  https://www.pexels.com/video/high-speed-photography-of-blue-ink-diffusion-in-water-9669109/
              Date accessed: 18 June, 2023
              Help taken: The background content was taken from this link
          */}
              <source src={video} type="video/mp4" />
            </video>
          </div>

          <div
            style={{
              height: "100vh",
              scrollSnapAlign: "start",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
              position: "relative",
              zIndex: 1,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "80%",
                marginBottom: "1.5rem",
              }}
            >
              <Card
                style={{
                  width: "30%",
                  marginRight: "2em",
                  background: "#1976d2",
                  color: "white",
                }}
              >
                <CardContent>
                  <h2>Student</h2>
                  <p>Welcome DalCSHubers !! </p>
                  <p>
                    Get connected with your colleagues and is a one-stop
                    solution for sharing insights and inquires about various
                    Dalhousie courses.
                  </p>
                </CardContent>
              </Card>
              <Card
                style={{
                  width: "30%",
                  marginRight: "2em",
                  background: "#1976d2",
                  color: "white",
                }}
              >
                <CardContent>
                  <h2>Teacher</h2>
                  <p>Welcome to DalCSHub !!</p>
                  <p>
                    Get connected with your students, enable course content
                    sharing and provide easy to use station for interesting
                    discussions.
                  </p>
                </CardContent>
              </Card>
              <Card
                style={{
                  width: "30%",
                  marginRight: "2em",
                  background: "#1976d2",
                  color: "white",
                }}
              >
                <CardContent>
                  <h2>Alumni</h2>
                  <p>Welcome to DalCSHub !!</p>
                  <p>
                    Get connected with the Dalhousie Computer Science Society,
                    mentor current students , share your valuable expierences.
                  </p>
                  <p></p>
                </CardContent>
              </Card>
            </div>
            <Button
              variant="contained"
              color="primary"
              onClick={buttonClicked}
              style={{ marginTop: "5em" }}
            >
              Get started
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
