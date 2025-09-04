import { Box } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import APIS from './APIS';
import LogoCard from './LogoCard';
import MobileFriendly from './MobileFriendly';
import ModernUI from './ModernUI';
import RealTimeChat from './RealTimeChat';
import SupportedLanguages from './SupportedLanguages';

const Examples = () => {
  return (
    <Box sx={{ px: { xs: 3, md: 5 }, py: 5 }}>
      <Container maxWidth={false} sx={{ maxWidth: 1000, px: { xs: 0 } }}>
        <Grid container columns={12} spacing={2}>
          <Grid container size={12} columns={12} spacing={2}>
            <Grid size={{ xs: 12, sm: 6, md: 3.72 }}>
              <SupportedLanguages />
            </Grid>

            <Grid
              container
              size={{ xs: 12, md: 4.56 }}
              columns={12}
              spacing={2}
              height={{ xs: 'auto', md: 1 }}
              order={{ xs: 0, sm: 1, md: 0 }}
            >
              <Grid size={{ xs: 12, sm: 7, md: 12 }}>
                <ModernUI />
              </Grid>
              <Grid size={{ xs: 12, sm: 5, md: 12 }}>
                <LogoCard />
              </Grid>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3.72 }}>
              <MobileFriendly />
            </Grid>
          </Grid>

          <Grid container size={12} columns={12} spacing={2}>
            <Grid size={{ xs: 12, sm: 7 }}>
              <RealTimeChat />
            </Grid>
            <Grid size={{ xs: 12, sm: 5 }}>
              <APIS />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Examples;
