import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";
import Data from "../Data.json";

export default function SupportComponent() {
  return (
    <Box id="support" sx={{ display: { xs: 'block' }, paddingX: '1em', my: '4em', userSelect: 'none' }} width={'100%'}>
      <Typography variant="h3" align="center" sx={{ mt: 2, color: "#2ecc71" }}>
        Support us
      </Typography>
      <Typography variant="body1" align="center">
        Small actions lead to big changes
      </Typography>
      <Box sx={{ marginY: "2em", display: 'flex', overflowX: 'auto', flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'nowrap', width: '100%' }}>
        {Data.map((result, index) => (
          <Card key={index}
            sx={{ flexWrap: 'nowrap', mr: "2em", borderRadius: 5, minWidth: { xs: '80%', sm: '60%', md: '50%', lg: '30%' }, }}
          >
            <CardMedia sx={{ height: '60%', width: '100%', }}
              component="img"
              image={result.img}
              alt="Loading..."
              style={{ borderRadius: "5px" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {result.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {result.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
