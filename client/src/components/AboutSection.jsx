import React from "react";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";

export default function AboutPage() {
  // Define the data for your cards
  const cardData = [
    {
      title: "A safe, comfortable home",
      image: "../public/assets/children.jpeg",
      description:
        "We have been through many challenges. We have continued to push for a comfortable home away from the social ills of yester years for our children.",
    },
    {
      title: "Colorful Childhood",
      image: "../public/assets/children.jpeg",
      description:
        "We are not lost to the innocence of childhood. In this regard, we have cultivated an environment of ease within our home to enable our children explore the full extent of their childhood.",
    },
    {
      title: "Education for the girl child",
      image: "../public/assets/children.jpeg",
      description:
        "Our core focus is the equipping and enabling of the girl child. We believe that when you educate a woman, you empower a community with its children.",
    },
    {
      title: "A home free from social stigma",
      image: "../public/assets/children.jpeg",
      description:
        "Our children are encouraged to live as siblings amongst each others. We foster an environment of mutual and self-acceptance amongst our children, as a means of achieving a stigma-free lifestyle.",
    },
    {
      title: "Empowerment for young people",
      image: "../public/assets/children.jpeg",
      description:
        "We help push for equality in the distribution of resources for our young people within the home and in the community. We also support activities like acrobatics, dancing and embroidery as a means to combat boredom.",
    },

    {
      title: "Enrichment of the mind",
      image: "../public/assets/children.jpeg",
      description:
        "We have driven for and put together a community library to help the children develop their literary capacity. The library is suited to cater for both academic and non-academic concerns as well as novels for our young adults.",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box
        className="flex justify-center font-bold text-2xl text-slate-900 hover:text-sky-400"
        sx={{
          typography: "subtitle2",
          mt: 5,
          mb: 5,
          width: "10%",
          height: 50,
          alignItems: "center",
          boxShadow: "0 0 10px rgba(0, 0, 255, 0.5)", // Blue shadow
          borderRadius: "8px", // Rounded edges
          display: "inline-block", // Ensures that the box is inline
        }}
      >
        About Us
      </Box>
      <Box sx={{ mb: 5, mx: 20, position: "relative" }}>
        <p className="font-ubuntu relative z-10 bg-white p-4 rounded-t-lg">
          body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </p>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Box sx={{ mx: 10, color: "text.secondary" }}>
            <p>
              Good Samaritan Children's Home and Rehabilitation Center is a
              Non-profit Organization established in 1991 under the section 10
              of the non-governmental organization co-ordination act . We help
              orphaned, abused, neglected or otherwise vulnerable children from
              all parts of Kenya. At Good Samaritan, with the help of our
              partners and members of public of good will, we do our best to
              ensure that these children have all they need to lead normal lives
              as productive citizens of Kenya.
            </p>
          </Box>
          <Box sx={{ mb: 5, mx: 10 }}>
            <div class="h-56 grid grid-cols-2 gap-4 content-around ...">
              <div>
                <h1 className="font-bold text-2xl text-sky-400">33</h1>
                <p>Years of Experience</p>
              </div>
              <div>
                <h1 className="font-bold text-2xl text-sky-400">1000</h1>
                <p>Children Helped</p>
              </div>
              <div>
                <h1 className="font-bold text-2xl text-sky-400">100</h1>
                <p>Staff Members</p>
              </div>
              <div>
                <h1 className="font-bold text-2xl text-sky-400">100</h1>
                <p>Volunteers</p>
              </div>
            </div>
          </Box>
        </Box>
        <Box
          component="img"
          sx={{
            height: 400,
            width: 800,
            mr: 5,
            borderRadius: 3,
          }}
          alt="The house from the offer."
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Box sx={{ mt: 5, mr: 5, mb: 5, mx:40}}>
          <h2 className="font-semibold text-slate-900 text-center">
            Our Mission
          </h2>
          <p>
            body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus,cupiditate numquam <br/>dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </p>
        </Box>
      </Box>

      <Box mx={15}>
        <Grid container spacing={2}>
          {cardData.map((card, index) => (
            <Grid item xs={4} key={index}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt={card.title}
                  height="140"
                  image={card.image}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ mt: 5, mx: 10 }}>
        <h2 className="font-semibold text-slate-900 text-center">
          Our History
        </h2>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don&apos;t look even slightly
          believable. If you are going to use a passage of Lorem Ipsum, you need
          to be sure there isn&apos;t anything embarrassing hidden in the middle
          of text. All the Lorem Ipsum generators on the Internet tend to repeat
          predefined chunks as necessary, making this the first true generator
          on the Internet. It uses a dictionary of over 200 Latin words,
          combined with a handful of model sentence structures, to generate
          Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
          therefore always free from repetition, injected humour, or
          non-characteristic words etc.
        </p>
      </Box>
    </Box>
  );
}
