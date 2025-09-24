import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import mobileDark from 'assets/images/landing/examples/2-dark.webp';
import mobileLight from 'assets/images/landing/examples/2.webp';
import Image from 'components/base/Image';
import { BentoCardHeader } from './BentoCard';

const MobileFriendly = () => {
  return (
    <Stack
      direction="column"
      gap={{ xs: 4, md: 4 }}
      sx={{ height: 1, bgcolor: 'primary.lighter', px: { xs: 2, md: 3 } }}
    >
      <BentoCardHeader
        title="Mobile Friendly"
        subtitle="Adapt seamlessly to any device."
        sx={{ pt: { xs: 2, md: 3 } }}
      />

      <Box flex={1} sx={{ alignContent: 'flex-end' }}>
        <Image
          src={{ light: mobileLight, dark: mobileDark }}
          sx={{ width: 1, height: 'auto', objectFit: 'contain', display: 'block' }}
        />
      </Box>
    </Stack>
  );
};

export default MobileFriendly;
