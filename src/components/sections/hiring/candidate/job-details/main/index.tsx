import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Job } from 'types/hiring';
import ActionBtns from './ActionBtns';
import DetailsSection from './DetailsSection';

const JobDetailsMain = ({ job }: { job: Job }) => {
  return (
    <Box sx={{ p: { xs: 3, md: 5 } }}>
      <Container maxWidth="sm" disableGutters>
        <Typography variant="h4" sx={{ mb: 3 }}>
          {job.title}
        </Typography>
        <Stack direction="column" gap={4} sx={{ mb: 4 }}>
          <DetailsSection title="About the Role" description={job.details.aboutRole} />
          <DetailsSection title="Responsibilities" description={job.details.responsibilities} />
          <DetailsSection title="Requirements" description={job.details.requirements} />
          <DetailsSection title="Bonus Points" description={job.details.bonusPoints} />
          <DetailsSection title="Benefits" description={job.details.benefits} />
        </Stack>
        <ActionBtns />
      </Container>
    </Box>
  );
};

export default JobDetailsMain;
