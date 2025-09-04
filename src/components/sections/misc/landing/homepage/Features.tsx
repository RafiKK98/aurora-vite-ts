import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import featureBg from 'assets/images/sections/misc/landing/feature-bg.webp';
import { Feature } from 'data/landing/homepage';
import IconifyIcon from 'components/base/IconifyIcon';
import SectionHeader from '../common/SectionHeader';

const Features = ({ data }: { data: Feature[] }) => {
  return (
    <Box
      sx={{
        py: 5,
        px: { xs: 3, md: 5 },
        background: `url(${featureBg}) no-repeat`,
        backgroundPosition: 'center 24%',
      }}
    >
      <Container maxWidth={false} sx={{ maxWidth: 1080, px: { xs: 0 } }}>
        <Stack direction="column" gap={3}>
          <SectionHeader title="Features" subtitle="Packed with essential abilities" />
          <Grid container columns={12}>
            {data.map((feature, i) => (
              <Grid key={i} size={{ xs: 12, sm: 6 }}>
                <FeatureItem title={feature.title} description={feature.description} />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

export default Features;

const FeatureItem = ({ title, description }: { title: string; description: string }) => {
  return (
    <Box sx={{ p: 2 }}>
      <Stack gap={2}>
        <IconifyIcon
          icon="material-symbols:network-node"
          sx={{ fontSize: 24, color: 'primary.main', flexShrink: 0 }}
        />
        <Stack direction="column" gap={1} pt={0.5}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {description}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};
