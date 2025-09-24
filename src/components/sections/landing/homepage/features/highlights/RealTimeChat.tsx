import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import realTimeChatDark from 'assets/images/landing/examples/4-dark.webp';
import realTimeChat from 'assets/images/landing/examples/4.webp';
import Image from 'components/base/Image';
import { BentoCardHeader } from './BentoCard';

const RealTimeChat = () => {
  return (
    <Stack direction="column" height={{ xs: 300 }}>
      <BentoCardHeader
        title="Real time team chat"
        subtitle="Create stunning websites"
        sx={{ px: { xs: 2, md: 3 }, pt: { xs: 2, md: 3 }, direction: '/* @noflip */ ltr' }}
      />

      <Box sx={{ position: 'absolute', top: 0, left: 0, width: 1, height: { xs: 1, lg: 'auto' } }}>
        <Image
          src={{ light: realTimeChat, dark: realTimeChatDark }}
          sx={{ width: 1, height: 1, objectFit: 'contain' }}
        />
      </Box>
    </Stack>
  );
};

export default RealTimeChat;
