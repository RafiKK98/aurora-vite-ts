import { Box, Stack, Toolbar } from '@mui/material';
import FAQContact from 'components/sections/misc/landing/faq/FAQContact';
import FAQHeader from 'components/sections/misc/landing/faq/FAQHeader';
import FAQMain from 'components/sections/misc/landing/faq/main/FAQMain';

const LandingFAQ = () => {
  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Toolbar sx={{ height: 56, width: 1 }} />

      <Stack direction="column" gap={3}>
        <FAQHeader />
        <FAQMain />
        <FAQContact />
      </Stack>
    </Box>
  );
};

export default LandingFAQ;
