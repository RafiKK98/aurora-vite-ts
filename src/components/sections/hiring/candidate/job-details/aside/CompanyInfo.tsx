import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { getRangeLabel } from 'lib/utils';
import { Job } from 'types/hiring';
import Image from 'components/base/Image';

interface CompanyInfoProps {
  company: Job['company'];
}

const CompanyInfo = ({ company }: CompanyInfoProps) => {
  return (
    <Stack direction="column" gap={1}>
      <Stack direction={{ xs: 'row', md: 'column', lg: 'row' }} alignItems="flex-start" gap={2}>
        <Box sx={{ maxWidth: 48, height: 48, borderRadius: 2, overflow: 'hidden', flexShrink: 0 }}>
          <Image src={company.logo} height="100%" width="100%" />
        </Box>
        <Stack direction="column" gap={0.5}>
          <Typography variant="subtitle1" fontWeight={700} color="neutral.main">
            {company.name}
          </Typography>
          <Stack gap={1} flexWrap="wrap">
            <Typography variant="caption" fontWeight={500} color="text.secondary">
              {company.type}
            </Typography>
            <Typography variant="caption" fontWeight={500} color="text.secondary">
              {getRangeLabel(company.employees)} Employyes
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Typography variant="body2" color="text.secondary" sx={{ lineClamp: 2, overflow: 'hidden' }}>
        {company.desc}
      </Typography>
    </Stack>
  );
};

export default CompanyInfo;
