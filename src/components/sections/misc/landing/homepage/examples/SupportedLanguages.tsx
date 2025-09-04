import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import supportedLangs from 'assets/images/sections/misc/landing/examples/supported-langs.webp';
import Image from 'components/base/Image';
import { BentoCard, BentoCardHeader } from './BentoCard';

const SupportedLanguages = () => {
  return (
    <BentoCard>
      <Stack direction="column" sx={{ height: 1 }}>
        <Box flex={1}>
          <Image src={supportedLangs} sx={{ objectFit: 'cover', width: 1 }} />
        </Box>

        <BentoCardHeader
          title="10+ Supported Languages"
          subtitle="Create stunning, professional quality websites"
          sx={{ textAlign: 'center', pb: { xs: 2, md: 3 }, px: { xs: 2, md: 3 }, mt: -2 }}
        />
      </Stack>
    </BentoCard>
  );
};

export default SupportedLanguages;
