import { useState } from 'react';
import { inputAdornmentClasses } from '@mui/material/InputAdornment';
import { inputBaseClasses } from '@mui/material/InputBase';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { type Dayjs } from 'dayjs';
import StyledTextField from 'components/styled/StyledTextField';

const CustomDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());

  const handleDateChange = (date: Dayjs | null) => {
    setSelectedDate(date);
  };
  return (
    <DatePicker
      format="DD MMM, YYYY"
      defaultValue={selectedDate}
      onChange={handleDateChange}
      slotProps={{
        inputAdornment: {
          position: 'start',
        },
      }}
      slots={{
        textField: StyledTextField,
      }}
      sx={{
        maxWidth: { lg: 150 },
        width: { lg: 1 },
        [`& .${inputBaseClasses.root}`]: {
          padding: { xs: 1, lg: 0 },
        },
        [`& .${inputBaseClasses.input}`]: {
          pr: '0px !important',
          display: { xs: 'none', lg: 'block' },
        },
        [`& .${inputAdornmentClasses.root}`]: {
          ml: { xs: 0, lg: 1 },
        },
      }}
    />
  );
};

export default CustomDatePicker;
