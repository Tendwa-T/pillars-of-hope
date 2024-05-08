import { Box } from "@mui/material";

import {
  Home as HomeIcon,
  Info as InfoIcon,
  Help as HelpIcon,
} from "@mui/icons-material";

export default function Home() {
  return (
    <>
      <Box
        sx={{
          bgcolor: "#004e40",
          height: "86vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "10em",
        }}
      >
        <Box
          sx={{
            height: "86vh",
            width: "90%",
            marginLeft: "auto",
            backgroundColor: "#004e40",
          }}
        >
          <Box
            sx={{
              height: "75vh",
              width: "90%",
              marginTop: "4em",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                width: "55%",
                backgroundColor: "primary.main",
              }}
            ></Box>
            <Box
              sx={{
                flex: 1, //take up the remaining width
                position: "relative",
                overflow: "hidden",
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
          <Box
            sx={{
              height: "9em",
              width: "90%",
              borderRadius: "20px 20px 20px 20px",
              backgroundColor: "#fed65c ",
              display: "flex",
              position: "relative",
              top: "-3em",
              zIndex: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",

                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <HomeIcon sx={{ fontSize: 30, marginRight: "0.5em" }} />
              <span>Text 1</span>
            </Box>
            <Box
              sx={{
                display: "flex",

                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <InfoIcon sx={{ fontSize: 30, marginRight: "0.5em" }} />
              <span>Text 2</span>
            </Box>
            <Box
              sx={{
                display: "flex",

                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <HelpIcon sx={{ fontSize: 30, marginRight: "0.5em" }} />
              <span>Text 3</span>
            </Box>
            <Box
              sx={{
                display: "flex",

                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <HomeIcon sx={{ fontSize: 30, marginRight: "0.5em" }} />
              <span>Text 4</span>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
