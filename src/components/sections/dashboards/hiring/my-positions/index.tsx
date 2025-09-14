import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { positionsData as data } from 'data/hiring/dashboard';
import DashboardMenu from 'components/common/DashboardMenu';
import SectionHeader from 'components/common/SectionHeader';
import SectionPaper from '../common/Section';
import JobOpeningCard from './JobOpeningCard';

const MyPositions = () => {
  return (
    <Stack component={SectionPaper} direction="column">
      <SectionHeader
        title="My Positions"
        subTitle="Recruitment involvement across roles"
        actionComponent={<DashboardMenu />}
      />
      <Box sx={{ flexGrow: 1, height: 1, overflowY: 'auto', flexBasis: { sm: 0 } }}>
        <Stack direction="column" gap={1} sx={{ p: '1px' }}>
          {data.map((item, index) => (
            <JobOpeningCard key={index} item={item} />
          ))}
        </Stack>
      </Box>
    </Stack>
  );
};

export default MyPositions;
