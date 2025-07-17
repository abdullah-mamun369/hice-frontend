import { Box, Container, Stack, Typography, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Link from "next/link";

const services = [
  "Site Classification & Footing Designs",
  "Structural Engineering",
  "Geotechnical Engineering",
  "Site Features and Level Survey",
  "Civil Engineering Designs",
  "Building Damage Forensic",
  "Investigation",
  "Bushfire Attack Level and Wind Rating",
];

const Footer = () => {
  return (
    <Box bgcolor="rgb(17, 26, 34)" py={5}>
      <Container>
        <Box
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }}
          gap={4}
          justifyContent="space-between"
        >
          <Stack
            direction="column"
            alignItems="left"
            spacing={2}
            sx={{
              maxWidth: {
                xs: "100%", // mobile
                sm: "300px", // small screens
                md: "600px", // medium screens
                lg: "700px", // large screens
              },
            }}
          >
            <Typography
              variant="h6"
              color="white"
              fontWeight={600}
              mb={{ xs: 2, sm: 0 }}
              mr={{ sm: 5 }}
            >
              Our Company
            </Typography>
            <Typography
              variant="body2"
              color="white"
              fontWeight={400}
              mb={{ xs: 2, sm: 0 }}
              mr={{ sm: 5 }}
            >
              Home and Industrial Soiltest was officially registered on 22nd
              August 1990. For 30 years, the company has been servicing a wide
              range of clientele and has gained a firm foothold in the building
              industry. We provide site investigation and engineering
              consultancy to residential, light commercial and industrial
              projects.
            </Typography>
            <Typography
              variant="body2"
              color="white"
              fontWeight={500}
              mb={{ xs: 2, sm: 0 }}
              mr={{ sm: 5 }}
            >
              A.C.N. 050 023 955 A.B.N. 54 050 023 955
            </Typography>
            <Box
              sx={{
                border: "0.5px solid lightgray",
              }}
            ></Box>
            <Box display="flex" gap={2}>
              {[
                {
                  icon: <LinkedInIcon />,
                  url: "https://www.linkedin.com",
                },
                {
                  icon: <InstagramIcon />,
                  url: "https://www.instagram.com",
                },
                {
                  icon: <FacebookIcon />,
                  url: "https://www.facebook.com",
                },
                {
                  icon: <YouTubeIcon />,
                  url: "https://www.youtube.com",
                },
              ].map((item, index) => (
                <IconButton
                  key={index}
                  component="a"
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    backgroundColor: "#424952",
                    color: "#fff",
                    transition: "all 0.3s ease",
                    "& svg": { fontSize: 20 },
                    "&:hover": {
                      backgroundColor: "primary.main",
                      color: "#fff",
                    },
                  }}
                >
                  {item.icon}
                </IconButton>
              ))}
            </Box>
          </Stack>
          <Box>
            <Typography variant="h6" color="white" fontWeight={600} mb="14px">
              Services
            </Typography>

            <Stack direction="column">
              {services.map((service, index) => (
                <Link
                  key={index}
                  href="https://hice.com.au/services/?serviceid="
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: "15px",
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color: "primary.main",
                      },
                    }}
                  >
                    {service}
                  </Typography>
                </Link>
              ))}
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
