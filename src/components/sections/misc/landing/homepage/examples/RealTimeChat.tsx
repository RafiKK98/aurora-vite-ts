import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import realTimeChat from 'assets/images/sections/misc/landing/examples/real-time-chat.webp';
import Image from 'components/base/Image';
import { BentoCard, BentoCardHeader } from './BentoCard';

const RealTimeChat = () => {
  return (
    <BentoCard>
      <Stack direction="column">
        <BentoCardHeader
          title="Real time team chat"
          subtitle="Create stunning websites"
          sx={{ px: { xs: 2, md: 3 }, pt: { xs: 2, md: 3 }, direction: '/* @noflip */ ltr' }}
        />
        <Box sx={{ mt: { xs: -3, md: -6 }, mb: 0.5 }}>
          <Image src={realTimeChat} width="100%" height="100%" sx={{ objectFit: 'cover' }} />
        </Box>
      </Stack>
    </BentoCard>
  );
};

export default RealTimeChat;
