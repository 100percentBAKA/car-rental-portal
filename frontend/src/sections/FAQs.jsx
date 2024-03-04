import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fade from "@mui/material/Fade";
import SubContainer from "../components/SubContainer";
import { Box } from "@mui/material";
import CustomH3 from "../components/CustomH3";

export default function FAQs() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#f8f8f8",
        paddingTop: 8,
        paddingBottom: 8,
      }}
    >
      <SubContainer>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            textAlign: "center",
            mb: 8,
          }}
        >
          <CustomH3 fontSize="1.4rem" fontWeight={500}>
            FAQ
          </CustomH3>
          <CustomH3 fontSize="2.6rem" fontWeight={700}>
            Frequently Asked Questions
          </CustomH3>
          <Typography>
            Frequently Asked Questions About the Car Rental Booking Process on
            Our Website: Answers to Common Concerns and Inquiries.
          </Typography>
        </Box>

        {/* main accordion section */}
        <Accordion
          expanded={expanded}
          onChange={handleExpansion}
          slots={{ transition: Fade }}
          slotProps={{ transition: { timeout: 400 } }}
          sx={{
            "& .MuiAccordion-region": { height: expanded ? "auto" : 0 },
            "& .MuiAccordionDetails-root": {
              display: expanded ? "block" : "none",
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{
              pl: 2,
              py: 1,
              transition: "all 200ms ease-in-out",
              "&:hover": {
                bgcolor: "#ff4d30",
                color: "white",
              },
            }}
          >
            <Typography sx={{ fontWeight: 600, fontSize: "18px" }}>
              1. What is special about comparing rental car deals?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Comparing rental car deals is important as it helps find the best
              deal that fits your budget and requirements, ensuring you get the
              most value for your money. By comparing various options, you can
              find deals that offer lower prices, additional services, or better
              car models. You can find car rental deals by researching online
              and comparing prices from different rental companies.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
            sx={{
              pl: 2,
              py: 1,
              transition: "all 200ms ease-in-out",
              "&:hover": {
                bgcolor: "#ff4d30",
                color: "white",
              },
            }}
          >
            <Typography sx={{ fontWeight: 600, fontSize: "18px" }}>
              2. How do I find the car rental deals?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              You can find car rental deals by researching online and comparing
              prices from different rental companies. Websites such as Expedia,
              Kayak, and Travelocity allow you to compare prices and view
              available rental options. It is also recommended to sign up for
              email newsletters and follow rental car companies on social media
              to be informed of any special deals or promotions.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
            sx={{
              pl: 2,
              py: 1,
              transition: "all 200ms ease-in-out",
              "&:hover": {
                bgcolor: "#ff4d30",
                color: "white",
              },
            }}
          >
            <Typography sx={{ fontWeight: 600, fontSize: "18px" }}>
              3. How do I find such low rental car prices?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Book in advance: Booking your rental car ahead of time can often
              result in lower prices. Compare prices from multiple companies:
              Use websites like Kayak, Expedia, or Travelocity to compare prices
              from multiple rental car companies. Look for discount codes and
              coupons: Search for discount codes and coupons that you can use to
              lower the rental price. Renting from an off-airport location can
              sometimes result in lower prices.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </SubContainer>
    </Box>
  );
}
