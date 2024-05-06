import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        bgcolor: "#004e40",
        height: "98vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          height: "98vh",
          width: "90%",
          marginLeft: "auto", //align the box to the left
          backgroundColor: "rgba(255, 255, 255, 0.8)",
        }}
      >
        <Box
          sx={{
            height: "85vh",
            width: "90%",
            marginTop: "4em",
            backgroundColor: "blue",
            display: "flex",
            
          }}
        >
          <Box
            sx={{
             width:"55%",
              backgroundColor: "primary.main",
            }}
          >
           
          </Box>
          <Box
            sx={{
              flex: 1, //take up the remaining width
              backgroundColor: "red",
            }}
          >
           
          </Box>
        </Box>
        <Box
          sx={{
            height: "4em",
            width: "90%",
           
            backgroundColor: "green ",
            display: "flex",
            
          }}
        ></Box>
      </Box>
    </Box>
  );
}
