import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <section id="home">
      <Box
        sx={{
          bgcolor: "#004e40",
          minheight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "10em",
          marginTop: "5em",
        }}
      >
        <Box
          sx={{
            height: "88vh",
            width: "80%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Box
            sx={{
              height: "74vh",
              width: "100%",
              marginTop: { xs: "1em", sm: "4em" },
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                overflow: "hidden",
                width: { xs: "100%", sm: "50%" },
                order: { xs: 1, sm: 1 },
                marginBottom: { xs: "3em", sm: "auto" },
                maxWidth: "100%",
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  marginTop: "1em",
                  color: "#F0F0F0",
                  "@media (max-width: 900px)": {
                    fontSize: "2rem",
                  },
                }}
              >
                Tender Acts,
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  color: "#F0F0F0",
                  "@media (max-width: 900px)": {
                    fontSize: "2rem",
                  },
                }}
              >
                Spreading Love,
              </Typography>
              <Typography
                variant="h2"
                gutterBottom
                sx={{
                  color: "#F0F0F0",
                  "@media (max-width: 900px)": {
                    fontSize: "2rem",
                  },
                  marginBottom: { xs: "0.5em", sm: "0.3em" },
                }}
              >
                Touching Souls.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "#F0F0F0",
                  marginBottom: { xs: "4em", sm: "0" },
                }}
              >
                Pillars of Hope Children's Home stands as a beacon of
                compassion, offering a sanctuary for the vulnerable children in
                Kenya. Together, let's weave a tapestry of hope and opportunity,
                nurturing their dreams and empowering their futures. Join our
                circle of kindness and be a catalyst for change, because every
                child deserves to blossom in a garden of love and possibility.
              </Typography>
            </Box>

            <Box
              sx={{
                width: { xs: "100%", sm: "50%" },
                position: "relative",
                overflow: "hidden",
                order: { xs: 1, sm: 1 },
                marginTop: { xs: "0", sm: "0" },
              }}
            >
              <img
                src="public/assets/6.jpg"
                alt="children"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover", // Ensure the image covers the entire container
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
}
