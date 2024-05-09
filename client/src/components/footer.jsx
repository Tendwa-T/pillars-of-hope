import { Button, Stack, Container } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";


export default function Footer() {
  return (
    <Container
      maxWidth="screen"
      xs={6}
      sm={3}
      
      sx={{
        display: "flex",
        gap: 4,
        padding: 4,
        bgcolor: "#004e40",
      }}
    >
      <Stack direction="row" spacing={2}>
        <Button
          sx={{ bgcolor: "#fed75e" }}
          variant="contained"
          startIcon={<PhoneIcon />}
        >
          Phone <br /> 123-456-7890
        </Button>
        <Button
          sx={{ bgcolor: "#fed75e" }}
          variant="contained"
          startIcon={<LocationOnIcon />}
        >
          Athi River, Mavoko <br /> Machakos County
        </Button>
        <Button
          sx={{ bgcolor: "#fed75e", roundedRadius: 2 }}
          variant="contained"
        >
          Mpesa paybill: 874 580 <br />
          Cooperative bank branch: Athi River <br />
          Account No: 01128564984200 <br />
          Account Name: Pillars Of Hope Childrens Home
        </Button>
        <IconButton size="medium">
          <FacebookIcon sx={{bgcolor:"#fff"}}/>
        </IconButton>
      </Stack>
    </Container>
  );
}
