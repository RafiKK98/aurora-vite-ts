import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import dayjs from 'dayjs';
import type { Job } from 'types/hiring';
import IconifyIcon from 'components/base/IconifyIcon';
import Image from 'components/base/Image';

const JobCard = ({ job }: { job: Job }) => {
  return (
    <Paper
      background={1}
      sx={{
        outline: 0,
        p: 3,
        borderRadius: 6,
        '&:hover': { bgcolor: 'background.elevation2', cursor: 'pointer' },
      }}
    >
      <Stack gap={2}>
        <Box sx={{ borderRadius: 2.5, overflow: 'hidden', width: 54, height: 54 }}>
          <Image src={job.company.logo} height="100%" width="100%" />
        </Box>
        <Stack gap={2} flex={1}>
          <Stack direction="column" gap={2} flex={1}>
            <Stack direction="column" gap={0.5}>
              <Typography variant="h6">{job.title}</Typography>
              <Stack gap={2}>
                <Typography variant="subtitle2" fontWeight={600}>
                  {job.company.name}
                </Typography>
                <Typography variant="subtitle2">{job.overview.location}</Typography>
                <Typography variant="subtitle2">{job.overview.employmentType}</Typography>
                <Typography variant="subtitle2">{job.overview.workMode}</Typography>
              </Stack>
            </Stack>
            <Typography variant="caption" color="text.secondary" fontWeight={500}>
              Posted {dayjs(job.overview.postedDate).format('DD MMM, YYYY')}
            </Typography>
          </Stack>
          <Stack gap={1}>
            <Button shape="square" color="neutral">
              <IconifyIcon icon="material-symbols:share-outline" sx={{ fontSize: 20 }} />
            </Button>
            <Button shape="square" color="neutral">
              <IconifyIcon icon="material-symbols:bookmark-outline" sx={{ fontSize: 20 }} />
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default JobCard;
