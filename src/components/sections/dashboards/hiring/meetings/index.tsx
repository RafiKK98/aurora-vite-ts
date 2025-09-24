import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { meetingsData as data } from 'data/hiring/dashboard';
import SectionHeader from 'components/common/SectionHeader';
import SectionPaper from '../common/Section';
import CustomDatePicker from './CustomDatePicker';
import MeetingCard from './MeetingCard';

const Meetings = () => {
  return (
    <Stack component={SectionPaper} direction="column">
      <SectionHeader
        title="Meetings"
        subTitle="All your events at a glance"
        actionComponent={
          <>
            <CustomDatePicker />
          </>
        }
      />
      <Box sx={{ flexGrow: 1, height: 1, overflowY: 'auto', flexBasis: { sm: 0 } }}>
        <Stack direction="column" gap={1} sx={{ p: '1px' }}>
          {data.map((item, index) => (
            <MeetingCard key={index} item={item} />
          ))}
        </Stack>
      </Box>
    </Stack>
  );
};

export default Meetings;
