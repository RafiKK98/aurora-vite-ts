import { Button, Stack, Typography } from '@mui/material';
import illustration2_light from 'assets/images/sections/misc/landing/illustrations/2.webp';
import illustration2_dark from 'assets/images/sections/misc/landing/illustrations/2_dark.webp';
import { useThemeMode } from 'hooks/useThemeMode';
import paths from 'routes/paths';
import Image from 'components/base/Image';

const Landing404 = () => {
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
        src={isDark ? illustration2_dark : illustration2_light}
        alt=""
        sx={{ width: 1, maxWidth: 734, objectFit: 'contain' }}
      />

      <div>
        <Typography variant="h4" sx={{ mb: 1 }}>
          Page not found!
        </Typography>

        <Typography variant="subtitle1" color="textSecondary" sx={{ mb: 3 }}>
          No worries! Let's take you back while our bear is searching everywhere
        </Typography>

        <Button variant="contained" href={paths.landingHomepage}>
          Go Back Home
        </Button>
      </div>
    </Stack>
  );
};

export default Landing404;
