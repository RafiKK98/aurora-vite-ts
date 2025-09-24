import { Stack } from '@mui/material';
import supportedLangs from 'assets/images/landing/examples/1.webp';
import Image from 'components/base/Image';
import { BentoCardHeader } from './BentoCard';

const LanguageSupport = () => {
  return (
    <Stack direction="column" justifyContent="space-between" height={1}>
      <Image
        src={supportedLangs}
        sx={{
          objectFit: 'cover',
          width: 1,
        }}
      />

      <BentoCardHeader
        title="10+ Supported Languages"
        subtitle="Create stunning, professional quality websites"
        sx={{ textAlign: 'center', p: { xs: 2, md: 3 }, pt: 0, mt: -2 }}
      />
    </Stack>
  );
};

export default LanguageSupport;
