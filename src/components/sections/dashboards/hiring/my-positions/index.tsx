import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { positionsData as data } from 'data/hiring/dashboard';
import { useBreakpoints } from 'providers/BreakpointsProvider';
import DashboardMenu from 'components/common/DashboardMenu';
import SectionHeader from 'components/common/SectionHeader';
import SectionPaper from '../common/Section';
import JobOpeningCard from './JobOpeningCard';

const MyPositions = () => {
  const { only } = useBreakpoints();
  const onlySm = only('sm');
  return (
    <Stack component={SectionPaper} direction="column">
      <SectionHeader
        title="My Positions"
        subTitle="Recruitment involvement across roles"
        actionComponent={<DashboardMenu />}
      />
      <Box
        sx={[
          { flexGrow: 1, height: 1, overflowY: 'auto', flexBasis: { sm: 0 } },
          onlySm && { minHeight: 330 },
        ]}
      >
        <Grid container spacing={1} sx={{ p: '1px' }}>
          {data.map((item, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 12 }}>
              <JobOpeningCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Stack>
  );
};

export default MyPositions;
