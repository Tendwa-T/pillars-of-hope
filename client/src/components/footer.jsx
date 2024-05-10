import { Button,Box, Typography, Stack, Container} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";


export default function Footer() {
  return (
    <Container
      maxWidth="screen"
      xs={12}
      sm={3}
      sx={{
        gap: 4,
        padding: 4,
        bgcolor: "#004e40",
      }}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Button
          sx={{
            bgcolor: "#fed75e",
            "&:hover": {
              bgcolor: "#004e40",
            },
          }}
          variant="contained"
          size="medium"
          startIcon={<PhoneIcon />}
        >
          Phone <br /> 123-456-7890
        </Button>
        <Button
          sx={{
            bgcolor: "#fed75e",
            "&:hover": {
              bgcolor: "#004e40",
            },
          }}
          variant="contained"
          size="medium"
          startIcon={<LocationOnIcon />}
        >
          Athi River, Mavoko <br /> Machakos County
        </Button>
        <Button
          sx={{
            bgcolor: "#fed75e",
            roundedRadius: 2,
            "&:hover": {
              bgcolor: "#004e40",
            },
          }}
          variant="contained"
          size="large"
        >
          Mpesa paybill: 874 580 <br />
          Cooperative bank branch: Athi River <br />
          Account No: 01128564984200 <br />
          Account Name: Pillars Of Hope Childrens Home
        </Button>
        <IconButton size="medium">
          <FacebookIcon sx={{ bgcolor: "#fff" }} />
        </IconButton>
        <Box sx={{ padding: 2, maxWidth: "screen", marginTop: 4 }}>
          <Typography variant="h6" sx={{marginTop:10}}>
            All rights reserved by Pillars of Hope Childrens Home
          </Typography>
        </Box>
      </Stack>
      <Box sx={{display:"flex", gap:12}}>
        
        
      </Box>
    </Container>
  );
}
