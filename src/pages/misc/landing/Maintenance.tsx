import { Button, Stack, Typography } from '@mui/material';
import illustration4_light from 'assets/images/sections/misc/landing/illustrations/4.webp';
import illustration4_dark from 'assets/images/sections/misc/landing/illustrations/4_dark.webp';
import { useThemeMode } from 'hooks/useThemeMode';
import paths from 'routes/paths';
import Image from 'components/base/Image';

const LandingMaintenance = () => {
  const { isDark } = useThemeMode();

  return (
    <Stack
      direction="column"
      sx={{
        px: { xs: 3, md: 5 },
        py: 18,
        gap: 5,
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Image
        src={isDark ? illustration4_dark : illustration4_light}
        alt=""
        sx={{ width: 1, maxWidth: 440, objectFit: 'contain' }}
      />

      <div>
        <Typography variant="h4" sx={{ mb: 1 }}>
          Site is temporarily unavailable now.
        </Typography>

        <Typography variant="subtitle1" color="textSecondary" sx={{ mb: 3 }}>
          We're working hard to enhance this page!
        </Typography>

        <Button variant="contained" href={paths.landingHomepage}>
          Go Back Home
        </Button>
      </div>
    </Stack>
  );
};

export default LandingMaintenance;
