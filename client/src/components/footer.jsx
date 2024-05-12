import { Box, Divider, Stack, Typography } from "@mui/material";
import { Twitter, Facebook } from "@mui/icons-material";
import { Phone, LocationOn } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const theme = useTheme();
  var isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        backgroundColor: "#004e40",
        padding: { xs: "1em", sm: "1em" },
        maxWidth: "100%",
        overflow: "Hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: { xs: "30em", sm: "20em", md: "20em" },
      }}
    >
      <Box
        sx={{
          height: { xs: "20em", sm: "10em" },
          display: "flex",
          width: "100%",
          justifyContent: 'space-evenly',
          flexDirection: { xs: "column", sm: 'row', md: "row" },
          padding: { sm: "0.5em" },
        }}
      >


        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            alignItems: "center",
            justifyContent: "center",
            padding: "0.5em",
            flexDirection: 'column'
          }}
        >
          <img
            src="assets/logo.png"
            alt="Logo"
            style={{
              width: '50%',
              height: '50%',
              borderRadius: "10%",
            }}
          />
          <Typography
            variant="body2"
            textAlign={'center'}
            justifyContent={'center'}
            sx={{
              color: "#fff",
              padding: "0.3em",
            }}
          >
            Pillars of Hope
            <br />
            Children&apos;s Home
          </Typography>


        </Box>

        <Divider
          orientation="vertical"
          sx={{ backgroundColor: "#fff", height: "auto", mr: { xs: "0", sm: "1em" } }}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "Start",
            mb: { xs: "1em", sm: "0" },
          }}
        >
          <Divider
            orientation="vertical"
            flexItem
            sx={{ backgroundColor: "#fff", height: "auto" }}
          />
          <Typography
            textAlign={'center'}
            variant="h6"
            sx={{
              color: "#fff",
              marginTop: { xs: "0", sm: "0.5em" },
            }}
          >
            Contact Us
          </Typography>
          <Stack direction="row" display={'flex'} justifyItems={'center'} alignItems="center" spacing={1}>

            <Box display={{ xs: 'none', sm: 'flex' }}>
              <Phone sx={{ color: "#fff" }} />
            </Box>
            <Box display={{ xs: 'flex' }} flexDirection={{ xs: 'column' }}>
              <Typography variant="caption" sx={{ color: "#fff" }}>
                +254 721 787 167
              </Typography>
              <Typography variant="caption" sx={{ color: "#fff" }}>
                +254 731 764 219
              </Typography>
              <Typography variant="caption" sx={{ color: "#fff" }}>
                +254 714 140 205
              </Typography>
            </Box>


          </Stack>
        </Box>


        <Divider
          orientation="horizontal"
          sx={{ backgroundColor: "#fff", height: "auto" }}
        />

        <Divider
          orientation="vertical"
          flexItem
          sx={{ backgroundColor: "#fff", width: "auto" }}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "start",
            padding: isSmallScreen ? "1em" : "0",
          }}
        >
          <Typography
            variant="h6"
            sx={{ color: "#fff", marginTop: isSmallScreen ? "0" : "0.5em" }}
          >
            Location
          </Typography>
          <Stack direction="row" alignItems="center" spacing="0.2em">
            {!isSmallScreen && <LocationOn sx={{ color: "#fff" }} />}
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
            sx={{ backgroundColor: "#fff", width: "auto" }}
          />
        )}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "start",
          }}
        >
          <Typography
            variant="h6"
            sx={{ color: "#fff", marginTop: isSmallScreen ? "0" : "0.5em" }}
          >
            Financial Support
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#fff",
              marginBottom: isSmallScreen ? "1em" : "0",
              textAlign: "center",
              marginLeft: isSmallScreen ? "0" : "1em",
            }}
          >
            Mpesa paybill: 874 580 <br />
            Cooperative bank branch: Athi River <br />
            Account No: 01128564984200 <br />
            Account Name: Pillars Of Hope Childrens Home
          </Typography>
        </Box>
        <Divider
          orientation="vertical"
          sx={{ backgroundColor: "#fff", height: "auto", mr: { xs: "0", sm: "1em" } }}
        />
      </Box>
      <Divider
        sx={{
          backgroundColor: "#fff",
          width: "90%",
          margin: "auto",
        }}
      />
      <Box
        sx={{
          height: { sx: "6em", sm: "4em" },
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
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
            textAlign={'center'}
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
              href="https://www.facebook.com/p/Pillars-Childrens-home-Daystar-Athi-River-100064941483871/"
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
              href="https://twitter.com/pillars_home"
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
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
