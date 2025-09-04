import { Box, Container, Grid } from '@mui/material';
import logoAmazon from 'assets/images/sections/misc/landing/clients/logo-amazon.webp';
import logoMailbluster from 'assets/images/sections/misc/landing/clients/logo-mailbluster.webp';
import logoNetflix from 'assets/images/sections/misc/landing/clients/logo-netflix.webp';
import logoOpenAI from 'assets/images/sections/misc/landing/clients/logo-openai.webp';
import logoSpaceX from 'assets/images/sections/misc/landing/clients/logo-spacex.webp';
import logoTailwindCss from 'assets/images/sections/misc/landing/clients/logo-tailwindcss.webp';
import logoTesla from 'assets/images/sections/misc/landing/clients/logo-tesla.webp';
import logoThemewagon from 'assets/images/sections/misc/landing/clients/logo-themewagon.webp';
import Image from 'components/base/Image';
import SectionHeader from '../common/SectionHeader';

const logos = [
  logoNetflix,
  logoThemewagon,
  logoAmazon,
  logoTailwindCss,
  logoTesla,
  logoSpaceX,
  logoMailbluster,
  logoOpenAI,
];

const Clients = () => (
  <Box sx={{ py: 5, px: { xs: 3, md: 5 } }}>
    <Container maxWidth={false} sx={{ maxWidth: 1080, px: { xs: 0 } }}>
      <SectionHeader
        title="Clients"
        subtitle="Trusted by the most innovative teams"
        sx={{ mb: 5 }}
      />
      <Grid container columns={12}>
        {logos.map((src, idx) => (
          <Grid
            key={idx}
            size={{ xs: 6, md: 3 }}
            sx={{ height: 80, textAlign: 'center', alignContent: 'center' }}
          >
            <Image src={src} />
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default Clients;
