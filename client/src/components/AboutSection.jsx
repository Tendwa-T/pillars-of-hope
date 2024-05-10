
import React from "react";
import { Box, Typography, Grid } from "@mui/material";

export default function AboutPage() {
  return (
    <section id="about">
      <Grid container alignItems="center" spacing={2}>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Box
            component="img"
            src="../assets/7.jpg"
            alt="The house from the offer."
            sx={{
              mr: 5,
              ml: 10,
              width: "85%",
              height: "auto",
              borderRadius: 3,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ p: 3, mx: 5 }}>
            <Typography variant="h4" sx={{ color: "#2ecc71", mb: 2 }}>
              About Us
            </Typography>
            <Typography variant="h4" sx={{ color: "#000000", mb: 2 }}>
              Welcome To Pillars of Hope Children's Home
            </Typography>
            <Typography sx={{ color: "#004e40" }}>
              Pillars of Hope Children's Home is non-profit organization
              registered under the society's act of Kenya 1963.It started on
              2013 and was registered with Registrar of Societies on 26th
              August, 2016 with Reg No.SOC/73449.The organization's main mandate
              is to ensure that the vulnerable group access basic needs.POHCH
              achieves this objective through projects such as education, food,
              shelter and medical care.POHCH has a population of seventy five
              children aging between one month to twenty five years old.Thirty
              five girls and forty boys.POHCH operates on donations from
              well-wishers and on that background, POHCH Board requests for any
              assistance that might be possible within your ability to enable
              and facilitate its activities in feeding the children and paying
              their school fees.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </section>
  );
}
