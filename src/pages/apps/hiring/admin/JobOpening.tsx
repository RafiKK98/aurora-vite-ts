import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useHiringContext } from 'providers/HiringProvider';
import JobOpeningFooter from 'components/sections/hiring/admin/job-opening/Footer';
import JobOpeningHeader from 'components/sections/hiring/admin/job-opening/Header';
import JobBoard from 'components/sections/hiring/admin/job-opening/JobBoard';

const JobOpening = () => {
  const {
    admin: { jobOpenings },
  } = useHiringContext();
  return (
    <Stack direction="column" height={1}>
      <JobOpeningHeader />
      <Box sx={{ px: { xs: 3, md: 5 }, pb: { xs: 3, md: 5 }, pt: 3, flex: 1 }}>
        <JobBoard jobs={jobOpenings} sx={{ mb: 4 }} />
        <JobOpeningFooter jobs={jobOpenings} />
      </Box>
    </Stack>
  );
};

export default JobOpening;
