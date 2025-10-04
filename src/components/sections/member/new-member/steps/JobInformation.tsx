import { Controller, useFormContext } from 'react-hook-form';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import * as yup from 'yup';

export interface JobInformationFormValues {
  designation: string;
  joiningDate: string;
  department: string;
  team: string;
  branch: string;
  shift: string;
  supervisor: string;
  employmentStatus: string;
  employmentType: 'In Office' | 'Hybrid' | 'Remote';
}

export const jobInformationFormSchema = yup.object({
  designation: yup.string().required('This field is required'),
  joiningDate: yup.string().required('This field is required'),
  department: yup.string().required('This field is required'),
  team: yup.string().required('This field is required'),
  branch: yup.string().required('This field is required'),
  shift: yup.string().required('This field is required'),
  supervisor: yup.string().required('This field is required'),
  employmentStatus: yup.string().required('This field is required'),
  employmentType: yup
    .string()
    .oneOf(['In Office', 'Hybrid', 'Remote'])
    .required('This field is required'),
});

const JobInformation = () => {
  const {
    control,
    formState: { errors },
    register,
  } = useFormContext<JobInformationFormValues>();
  return (
    <Stack direction="column" gap={3}>
      <Grid container rowSpacing={2} columnSpacing={1}>
        <Grid size={6}>
          <TextField
            fullWidth
            label="Designation"
            error={!!errors.designation}
            helperText={errors.designation?.message}
            {...register('designation')}
          />
        </Grid>
        <Grid size={6}>
          <Controller
            control={control}
            name="joiningDate"
            render={({ field: { value, ...rest } }) => (
              <DatePicker
                label="Birthday"
                value={dayjs(value)}
                slotProps={{
                  textField: {
                    error: !!errors.joiningDate,
                    helperText: errors.joiningDate?.message,
                    fullWidth: true,
                  },
                  inputAdornment: {
                    position: 'start',
                  },
                }}
                {...rest}
              />
            )}
          />
        </Grid>
        <Grid size={6}>
          <FormControl variant="filled" fullWidth error={!!errors.department}>
            <InputLabel id="department-select-label">Department</InputLabel>
            <Controller
              control={control}
              name="department"
              render={({ field }) => (
                <Select
                  labelId="department-select-label"
                  label="Department"
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  {...field}
                >
                  <MenuItem value="Islam">Islam</MenuItem>
                  <MenuItem value="Christian">Christian</MenuItem>
                  <MenuItem value="Hindu">Hindu</MenuItem>
                  <MenuItem value="Buddhist">Buddhist</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </Select>
              )}
            />
            <FormHelperText>{errors.department?.message}</FormHelperText>
          </FormControl>
        </Grid>
      </Grid>
      <Stack direction="column" gap={1}>
        <Typography variant="caption" fontWeight={500}>
          Employment Type
        </Typography>
        <Controller
          control={control}
          name="employmentType"
          render={({ field }) => (
            <RadioGroup row aria-labelledby="marital-status-buttons" {...field}>
              <FormControlLabel value="In Office" control={<Radio />} label="In Office" />
              <FormControlLabel value="Hybrid" control={<Radio />} label="Hybrid" />
              <FormControlLabel value="Remote" control={<Radio />} label="Remote" />
            </RadioGroup>
          )}
        />
      </Stack>
    </Stack>
  );
};

export default JobInformation;
