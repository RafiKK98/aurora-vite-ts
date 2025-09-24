import { useGSAP } from '@gsap/react';
import { Box, Container, Grid } from '@mui/material';
import clientLogo1 from 'assets/images/landing/clients/1.svg';
import clientLogo2 from 'assets/images/landing/clients/2.svg';
import clientLogo3 from 'assets/images/landing/clients/3.svg';
import clientLogo4 from 'assets/images/landing/clients/4.svg';
import clientLogo5 from 'assets/images/landing/clients/5.svg';
import clientLogo6 from 'assets/images/landing/clients/6.svg';
import clientLogo7 from 'assets/images/landing/clients/7.svg';
import clientLogo8 from 'assets/images/landing/clients/8.svg';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'components/base/Image';
import RevealItems from '../common/RevealItems';
import SectionHeader from '../common/SectionHeader';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const logos = [
  clientLogo1,
  clientLogo2,
  clientLogo3,
  clientLogo4,
  clientLogo5,
  clientLogo6,
  clientLogo7,
  clientLogo8,
];

const Clients = () => {
  return (
    <Box sx={{ py: { xs: 5, sm: 8 }, px: { xs: 3, md: 5 } }}>
      <Container maxWidth={false} sx={{ maxWidth: 1080, px: { xs: 0 } }}>
        <SectionHeader
          title="Clients"
          subtitle="Trusted by the most innovative teams"
          sx={{ mb: 5 }}
        />

        <RevealItems component={Grid} y={0} container columns={12} columnSpacing={{ xs: 3, sm: 0 }}>
          {logos.map((src, idx) => (
            <Grid
              key={idx}
              size={{ xs: 6, md: 3 }}
              sx={{ height: 80, textAlign: 'center', alignContent: 'center' }}
            >
              <Image src={src} alt="" />
            </Grid>
          ))}
        </RevealItems>
      </Container>
    </Box>
  );
};

export default Clients;
