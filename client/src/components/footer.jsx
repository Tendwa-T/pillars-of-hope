import React from "react";
import { Box, Divider, Stack, Typography } from "@mui/material";
import { Twitter, LinkedIn, Instagram, Facebook } from "@mui/icons-material";
import { Phone, LocationOn } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isExtraSmallScreen = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <Box
      sx={{
        backgroundColor: "#004e40",
        padding: { sx: "1em", sm: "1em" },
        maxWidth: "100%",
        overflow: "Hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: { sx: "20em", sm: "17em" },
      }}
    >
      <Box
        sx={{
          height: { sx: "14em", sm: "10em" },
          display: "flex",
          width: { sx: "100%" },
          justifyContent: { sm: "center" },
          flexDirection: isSmallScreen ? "column" : "row",
          padding: { sm: "0.5em" },
        }}
      >
        {!isSmallScreen && (
          <Box
            sx={{
              width: "20%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0.5em",
            }}
          >
            <img
              src="assets/logo.png"
              alt="Logo"
              style={{ width: "40%", height: "80%", borderRadius: "10%" }}
            />
            <Typography variant="h6" sx={{ color: "#fff", padding: "0.3em" }}>
              Pillars of Hope
              <br />
              Children's Home
            </Typography>
          </Box>
        )}
        {isSmallScreen ? null : (
          <Divider
            orientation="vertical"
            flexItem
            sx={{ backgroundColor: "#506e68", width: "auto" }}
          />
        )}
        <Box
          sx={{
            width: isSmallScreen ? "100%" : "15%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: isSmallScreen ? "1em" : "0",
          }}
        >
          <Divider
            orientation="vertical"
            flexItem
            sx={{ backgroundColor: "#fff", height: "auto" }}
          />
          <Typography
            variant="h6"
            sx={{
              color: "#fff",
            }}
          >
            Contact Us
          </Typography>
          <Stack direction="row" alignItems="center" spacing={1}>
            {!isSmallScreen && <Phone sx={{ color: "#fff" }} />}

            <Typography variant="body2" sx={{ color: "#fff" }}>
              123-456-7890
            </Typography>
          </Stack>
        </Box>
        {isSmallScreen ? (
          <Divider
            orientation="horizontal"
            sx={{ backgroundColor: "#fff", height: "auto" }}
          />
        ) : (
          <Divider
            orientation="vertical"
            flexItem
            sx={{ backgroundColor: "#506e68", width: "auto" }}
          />
        )}
        <Box
          sx={{
            width: isSmallScreen ? "100%" : "20%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: isSmallScreen ? "1em" : "0",
          }}
        >
          <Typography
            variant="h6"
            sx={{ color: "#fff" }}
          >
            Location
          </Typography>
          <Stack direction="row" alignItems="center" spacing="0.2em">
            {!isSmallScreen && <Location sx={{ color: "#fff" }} />}
            <Box sx={{ marginBottom: isSmallScreen ? "1em" : "0" }}>
              <Typography variant="body2" sx={{ color: "#fff" }}>
                {isSmallScreen ? (
                  <>
                    Athi River, Machakos County
                    <br />
                  </>
                ) : (
                  <>
                    Athi River,
                    <br /> Machakos County
                    <br />
                  </>
                )}
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#fff",
                    textDecoration: "underline",
                    padding: isSmallScreen ? "1.5em" : "0",
                  }}
                >
                  View on Google Maps
                </a>
              </Typography>
            </Box>
          </Stack>
        </Box>

        {isSmallScreen ? (
          <Divider
            orientation="horizontal"
            sx={{ backgroundColor: "#fff", height: "auto" }}
          />
        ) : (
          <Divider
            orientation="vertical"
            flexItem
            sx={{ backgroundColor: "#506e68", width: "auto" }}
          />
        )}
        <Box
          sx={{
            width: isSmallScreen ? "100%" : "30%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h6"
            sx={{ color: "#fff", padding: isSmallScreen ? "0.5em" : "0" }}
          >
            Financial Support
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#fff", marginBottom: isSmallScreen ? "1em" : "0" }}
          >
            Mpesa paybill: 874 580 <br />
            Cooperative bank branch: Athi River <br />
            Account No: 01128564984200 <br />
            Account Name: Pillars Of Hope Childrens Home
          </Typography>
        </Box>
      </Box>
      <Divider
        sx={{
          backgroundColor: "#fff",
          width: isSmallScreen ? "100%" : "85%",
          margin: "auto",
        }}
      />
      <Box
        sx={{
          height: { sx: "6em", sm: "4em" },
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
        }}
      >
        <Box
          sx={{
            width: isSmallScreen ? "100%" : "50%",
            height: { sx: "100%" },
            order: { xs: 2, sm: 1 },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              color: "#fff",
              marginBottom: { xs: "1em", sm: "0" },
            }}
          >
            © {currentYear} Pillars of Hope. All rights reserved.
          </Typography>
        </Box>
        <Box
          sx={{
            width: { sx: "100%", sm: "50%" },
            height: { sx: "50%" },

            order: { xs: 1, sm: 2 },
          }}
        >
          <Stack
            direction="row"
            spacing="1.5em"
            justifyContent="center"
            padding="1em"
          >
            <a
              href="https://www.facebook.com"
              target="_blank" //open in a new tab when clicked
              rel="noopener noreferrer"
            >
              <Facebook
                sx={{
                  height: "20px",
                  width: "20px",
                  color: "#fff",
                  cursor: "pointer",
                }}
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter
                sx={{
                  height: "20px",
                  width: "20px",
                  color: "#fff",
                  cursor: "pointer",
                }}
              />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram
                sx={{
                  height: "20px",
                  width: "20px",
                  color: "#fff",
                  cursor: "pointer",
                }}
              />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn
                sx={{
                  height: "20px",
                  width: "20px",
                  color: "#fff",
                  cursor: "pointer",
                }}
              />
            </a>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
