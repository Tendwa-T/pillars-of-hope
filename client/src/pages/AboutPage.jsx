import React from "react";
import Box from "@mui/material/Box";

export default function AboutPage() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box sx={{ mt: 5, height: 90 }}>
        <h1 className="font-bold text-2xl text-slate-900">About Us</h1>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Box sx={{ mr: 10 }}>
          <h2 className="font-semibold text-slate-900 text-center">
            Our Mission
          </h2>
          <p>
            Our mission is to provide the best quality products to our
            customers.
          </p>
        </Box>
        <Box sx={{ ml: 10 }}>
          <h2 className="font-semibold text-slate-900 text-center">
            Our Vision
          </h2>
          <p>Our vision is to be the best online store in the world.</p>
        </Box>
      </Box>
      <Box sx={{ mt: 5, mx: 10 }}>
        <h2 className="font-semibold text-slate-900 text-center">
          Our History
        </h2>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </p>
      </Box>
    </Box>
  );
}
