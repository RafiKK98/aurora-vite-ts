import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import dayjs from 'dayjs';
import paths from 'routes/paths';
import type { Job } from 'types/hiring';
import IconifyIcon from 'components/base/IconifyIcon';
import Image from 'components/base/Image';

const JobCard = ({ job }: { job: Job }) => {
  const [bookmarked, setBookmarked] = useState(false);
  return (
    <Paper
      component={Link}
      background={1}
      href={paths.hiringJobDetails(job.id)}
      underline="none"
      sx={{
        outline: 0,
        p: { xs: 2, sm: 3 },
        borderRadius: 6,
        '&:hover': { bgcolor: 'background.elevation2' },
      }}
    >
      <Grid container spacing={{ xs: 1, sm: 2 }}>
        <Grid size="auto">
          <Box
            sx={{
              borderRadius: 2.5,
              overflow: 'hidden',
              maxWidth: 54,
              height: 54,
              flex: '1 0 auto',
            }}
          >
            <Image src={job.company.logo} height="100%" width="100%" />
          </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 'grow' }} order={{ xs: 1, sm: 0 }}>
          <Stack direction="column" gap={2} flex={1}>
            <Stack direction="column" gap={0.5}>
              <Typography variant="h6" lineHeight={1.5}>
                {job.title}
              </Typography>
              <Stack gap={{ xs: 1, sm: 2 }} flexWrap="wrap">
                <Stack gap={{ xs: 1, sm: 2 }} flexWrap={{ xs: 'wrap', sm: 'nowrap' }}>
                  <Typography variant="subtitle2" fontWeight={600}>
                    {job.company.name}
                  </Typography>
                  <Typography variant="subtitle2">{job.overview.location}</Typography>
                  <Typography variant="subtitle2">{job.overview.employmentType}</Typography>
                </Stack>
                <Typography variant="subtitle2">{job.overview.workMode}</Typography>
              </Stack>
            </Stack>
            <Typography variant="caption" color="text.secondary" fontWeight={500}>
              Posted {dayjs(job.overview.postedDate).format('DD MMM, YYYY')}
            </Typography>
          </Stack>
        </Grid>
        <Grid size="auto" flexGrow={{ xs: 1, sm: 0 }}>
          <Stack gap={1} alignSelf="flex-start" justifyContent="flex-end" minWidth={0}>
            <Button shape="square" color="neutral" onClick={(e) => e.preventDefault()}>
              <IconifyIcon icon="material-symbols:share-outline" sx={{ fontSize: 20 }} />
            </Button>
            <Button
              shape="square"
              color="neutral"
              onClick={(e) => {
                e.preventDefault();
                setBookmarked(!bookmarked);
              }}
            >
              <IconifyIcon
                icon={
                  bookmarked ? 'material-symbols:bookmark' : 'material-symbols:bookmark-outline'
                }
                sx={{ fontSize: 20 }}
              />
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default JobCard;
