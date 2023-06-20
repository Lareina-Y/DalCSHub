import { NavBar } from "../components";
import { Box } from "@mui/material";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Page, PageTitle } from "../components";
import "../App.css";

export const FAQ = () => {
  return (
    <Page>
      <PageTitle title={"Frequently Asked Questions"} link={"/faq"} />
      <Typography>
        <p>Here you will find the most common questions about our website.</p>
      </Typography>

      <Accordion>
        <AccordionSummary
          sx={{ backgroundColor: "#F3F3F3" }}
          id="panel1a-header"
          aria-controls="panel1a-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography variant="h6" color="#962061">
            <Box fontWeight="fontWeightBold">
              Is this a service provided by Dalhousie University?
            </Box>
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ boxShadow: 5 }}>
          <Typography sx={{ fontWeight: 500 }}>
            No. This website was built and maintained by Dalhousie students for Dalhousie students
            to provide them with a community and various resources to help them make the best
            decision in choosing their courses on their academic journey.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          sx={{ backgroundColor: "#F3F3F3" }}
          id="panel2a-header"
          aria-controls="panel2a-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography variant="h6" color="#962061">
            <Box fontWeight="fontWeightBold">How can I keep track of my courses of interest?</Box>
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ boxShadow: 5 }}>
          <Typography sx={{ fontWeight: 500 }}>
            You can follow the courses you are interested in, where you will see them show in the
            Main Feed. Also, you can save specific posts to return to them later.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          sx={{ backgroundColor: "#F3F3F3" }}
          id="panel3a-header"
          aria-controls="panel3a-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography variant="h6" color="#962061">
            <Box fontWeight="fontWeightBold">
              What if I can't find the information I am looking for?
            </Box>
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ boxShadow: 5 }}>
          <Typography sx={{ fontWeight: 500 }}>
            You can always create your own post and hopefully a student or instructor from the
            community can help answer your question.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Page>
  );
};
