
import { Box, Typography } from "@mui/material";

export default function AboutPage() {
  return (
    <section id="about">

      <Box display={'flex'} px={'1em'} width={'100%'} justifyContent={'center'} mb={'1em'}>
        <Typography variant="h3" sx={{ color: "#2ecc71", textAlign: 'center' }}>
          About Us
        </Typography>
      </Box>

      <Box >
        <Typography variant="h5" sx={{ mb: 2, textAlign: 'center' }}>
          Welcome To Pillars of Hope Children&apos;s Home
        </Typography>
        <Box sx={{ px: '1em', display: 'flex', justifyContent: 'center', alignContent: 'center', }} >
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', }}>
            <Typography variant="caption" sx={{ color: "#004e40", textAlign: 'center', fontSize: { md: '0.8em', lg: '1.2em' } }}>
              Pillars of Hope Children&apos;s Home is non-profit organization
              registered under the society&apos;s act of Kenya 1963.It started on
              2013 and was registered with Registrar of Societies on 26th
              August, 2016 with Reg No.SOC/73449.The organization&apos;s main mandate
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

          <Box
            component="img"
            src="../assets/7.jpg"

            sx={{
              display: { xs: "none", sm: "none", md: "block" },
              width: "40%",
              borderRadius: 3,
            }}
          />

        </Box>
      </Box>


    </section >
  );
}
