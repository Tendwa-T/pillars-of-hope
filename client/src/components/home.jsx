import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        bgcolor: "#004e40",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          height: "100vh",
          width: "80%",
          margin: "0 auto",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
        }}
      ></Box>
    </Box>
  );
}
