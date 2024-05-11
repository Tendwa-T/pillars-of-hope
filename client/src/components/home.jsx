import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <section id="home">
      <Box
        sx={{
          bgcolor: "#004e40",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "2em",
          marginTop: { xs: '5em', sm: 0 },
        }}
      >
        <Box
          sx={{
            paddingX: { xs: "1em", sm: "2em" },
            width: "100%",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "5em",
          }}
        >
          <Box
            sx={{
              height: { xs: "60vh", sm: 'auto' },
              width: "100%",
              marginTop: { xs: "1em", sm: "2em", lg: '0' },
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "center",
              alignContent: "center",
              border: '2px solid #f0f0f',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: "center",
                paddingX: { xs: "1em", sm: "2em" },
                overflow: "hidden",
                width: { xs: "100%", sm: "100%", },
                order: { xs: 1, sm: 1 },
                marginTop: { xs: "3em", sm: "8em" },
                marginBottom: { xs: "auto", sm: "0" },

              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2em", sm: "3em", lg: '4em' },
                  color: "#F0F0F0",
                }}
              >
                Tender Acts,
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  color: "#F0F0F0",
                  fontSize: { xs: "2em", sm: "3em", lg: '4em' },
                }}
              >
                Spreading Love,
              </Typography>
              <Typography
                variant="h2"
                gutterBottom
                sx={{
                  fontSize: { xs: "2em", sm: "3em", lg: '4em' },
                  color: "#F0F0F0",
                  marginBottom: { xs: "0.5em", sm: "0.3em" },
                }}
              >
                Touching Souls.
              </Typography>

              <Typography
                variant="caption"
                sx={{
                  fontSize: { lg: '1.2em' },
                  display: { xs: "block", sm: "block" },
                  color: "#F0F0F0",
                }}
              >
                Pillars of Hope Children&apos;s Home stands as a beacon of
                compassion, offering a sanctuary for the vulnerable children in
                Kenya. Together, let&apos;s weave a tapestry of hope and opportunity,
                nurturing their dreams and empowering their futures. Join our
                circle of kindness and be a catalyst for change, because every
                child deserves to blossom in a garden of love and possibility.
              </Typography>
            </Box>

            <Box
              sx={{
                display: { xs: 'none', sm: 'block' },
                justifyContent: "center",
                width: "50%",
                position: "relative",
                overflow: "hidden",
                order: { xs: 1, sm: 1 },
                marginTop: { xs: "auto", sm: "0" },
                top: { sm: "8em", md: '8em', lg: '12em' },
              }}
            >
              <img
                src="/assets/6.jpg"
                alt="children"
                style={{
                  width: "100%",
                  height: "60%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
}
