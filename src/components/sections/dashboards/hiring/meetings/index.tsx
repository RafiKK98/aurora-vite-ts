import { useState } from 'react';
import Box from '@mui/material/Box';
import { inputBaseClasses } from '@mui/material/InputBase';
import Stack from '@mui/material/Stack';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { meetingsData as data } from 'data/hiring/dashboard';
import dayjs, { type Dayjs } from 'dayjs';
import SectionHeader from 'components/common/SectionHeader';
import StyledTextField from 'components/styled/StyledTextField';
import SectionPaper from '../common/Section';
import MeetingCard from './MeetingCard';

const Meetings = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());

  const handleDateChange = (date: Dayjs | null) => {
    setSelectedDate(date);
  };
  return (
    <Stack component={SectionPaper} direction="column">
      <SectionHeader
        title="Meetings"
        subTitle="All your events at a glance"
        actionComponent={
          <>
            <DatePicker
              format="DD MMM, YYYY"
              defaultValue={selectedDate}
              onChange={handleDateChange}
              slotProps={{
                textField: {
                  fullWidth: true,
                },
                inputAdornment: {
                  position: 'start',
                },
              }}
              slots={{
                textField: StyledTextField,
              }}
              sx={{ maxWidth: 150, [`& .${inputBaseClasses.input}`]: { pr: '0px !important' } }}
            />
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
