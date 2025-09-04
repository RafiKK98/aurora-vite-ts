import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import iphone from 'assets/images/sections/misc/landing/examples/iphone.webp';
import Image from 'components/base/Image';
import { BentoCard, BentoCardHeader } from './BentoCard';

const MobileFriendly = () => {
  return (
    <BentoCard sx={({ vars }) => ({ bgcolor: `${vars.palette.primary.lighter} !important` })}>
      <Stack direction="column" gap={{ xs: 2, md: 4 }} sx={{ height: 1, px: { xs: 2, md: 3 } }}>
        <BentoCardHeader
          title="Mobile Friendly"
          subtitle="Adapt seamlessly to any device."
          sx={{ pt: { xs: 2, md: 3 } }}
        />

        <Box flex={1} sx={{ alignContent: 'flex-end' }}>
          <Image src={iphone} sx={{ width: 1, height: 'auto', display: 'block' }} />
        </Box>
      </Stack>
    </BentoCard>
  );
};

export default MobileFriendly;
