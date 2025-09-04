import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import statImg from 'assets/images/sections/misc/landing/stat-img.webp';
import type { Stat } from 'data/landing/homepage';
import Image from 'components/base/Image';
import SectionHeader from '../common/SectionHeader';
import { StripedBackground } from '../common/StripedBackground';

const Stats = ({ data }: { data: Stat[] }) => {
  return (
    <Box sx={{ px: { xs: 3, md: 5 }, position: 'relative' }}>
      <StripedBackground
        fadeWidth="0%"
        sx={{
          position: 'absolute',
          inset: 0,
        }}
      />

      <Container maxWidth={false} sx={{ position: 'relative', maxWidth: 1320, px: { xs: 0 } }}>
        <Grid container columns={{ xs: 1, lg: 2 }} columnSpacing={10} sx={{ position: 'relative' }}>
          <Grid size={1}>
            <Stack direction="column" gap={{ xs: 3, lg: 5 }} sx={{ py: 4, flex: 1 }}>
              <Stack direction="column" gap={3}>
                <SectionHeader
                  title="Stats"
                  subtitle="Trusted by creators worldwide"
                  sx={{
                    textAlign: 'left',
                  }}
                />
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur. Id lorem tortor iaculis eget amet. Est
                  vitae quis ut iaculis nisi in enim. Dignissim laoreet est lectus neque tristique
                  aliquet eget gravida. Pellentesque sed porta nisl consequat id et.
                </Typography>
              </Stack>

              <Grid container spacing={{ xs: 3, sm: 4, md: 5 }}>
                {data.map((stat, i) => (
                  <Grid size={{ xs: 12, sm: 6 }} key={i}>
                    <StatItem stat={stat} />
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </Grid>

          <Grid size={1}>
            <Box
              sx={{
                m: 0,
                borderRadius: 6,
                overflow: 'hidden',
                flex: 1,
                width: 1,
                aspectRatio: '16/9',
                height: { xs: 'unset', lg: '110%' },
                position: 'relative',
                top: '50%',
                transform: 'translateY(-50%)',
                boxShadow: 3,
                bgcolor: 'background.default',
                mb: 5,
              }}
            >
              <Image
                src={statImg}
                sx={{
                  objectFit: 'cover',
                  width: 1,
                  height: 1,
                  borderRadius: 6,
                  filter: 'opacity(0.6)',
                  verticalAlign: 'middle',
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Stats;

const StatItem = ({ stat }: { stat: Stat }) => {
  return (
    <Box
      sx={{
        p: '1.5px',
        pl: { xs: 2, sm: 5, md: 2, lg: 5 },
        borderLeft: '1px solid',
        borderColor: 'divider',
        height: 1,
      }}
    >
      <Stack direction="column" gap={0.5} sx={{ height: 1 }}>
        <Typography variant="h3" color="primary.main">
          {stat.value}
        </Typography>
        <Typography variant="body2" sx={{ fontWeight: 500 }}>
          {stat.label}
        </Typography>
      </Stack>
    </Box>
  );
};
