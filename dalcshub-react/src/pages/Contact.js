//Author:
import MailImg from "../assets/images/mail-img.png";
import { Page, PageTitle } from "../components";
import { Box, Button, Typography, TextField } from "@mui/material";

export const Contact = () => {
  return (
    <Page>
      <PageTitle title={"Contact DalCSHub"} link={"/contact"} center />
      <Box
        sx={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          marginBottom: 5,
        }}
      >
        <Typography variant="body1">
          Have a Question? We are here to help!
        </Typography>
      </Box>
      <div class="contactbox">
        <div class="contact1" style={{ padding: "3%" }}>
          <div style={{ padding: "3%", height: "350px" }}>
            <Box
              sx={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                margin: 3,
              }}
            >
              <Typography variant="h5">Send Us A Message</Typography>
            </Box>
            <TextField
              style={{ marginBottom: "1em" }}
              label="Email"
              variant="outlined"
              required
              fullWidth
            />        
            <TextField
              label="Enter your message here..."
              multiline
              rows={4}
              variant="outlined"
              required
              fullWidth
            />
          </div>

          <Box textAlign="center">
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Box>
        </div>

        <div class="contact2" style={{ padding: "3%" }}>
          <div style={{ padding: "3%", height: "350px" }}>
            <Box
              sx={{
                margin: 3,
              }}
            >
              <Typography variant="h5">Send Us An Email</Typography>
              <br></br>
              <img src={MailImg} alt="mail-icon" height={150} width={150}></img>
            </Box>

            <Box
              sx={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <Typography variant="body1">
                We are just one step-away. Send us all yours question by just
                emailing us and we will be happy to serve you.
              </Typography>
            </Box>
          </div>
          <Box textAlign="center">
            <Button variant="contained" href="mailto:contactdalcshub@dal.ca">
              Email
            </Button>
          </Box>
        </div>
      </div>
    </Page>
  );
};
