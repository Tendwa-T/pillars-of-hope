import {
  Container,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Data from "../Data.json";

export default function SupportComponent() {
  return (
    <Container maxWidth="lg" id="support">
      <Typography variant="h2" align="center" sx={{mt:2}}>
        Support us
      </Typography>
      <Typography variant="h5" align="center">
        Small actions lead to big changes
      </Typography>
      <Grid container spacing={5} style={{ marginTop: "20px" }}>
        {Data.map((result, index) => (
          <Grid item xs={12} sm={3} ms={6} key={index}>
            <Card
              sx={{ maxWidth: 345 }}
              style={{ padding: "10xp", marginBottom: "30px" }}
            >
              <CardActionArea>
                <CardMedia sx={{ height:200}}
                  component="img"
                  height="140"
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
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
