import { Controller, useFormContext } from 'react-hook-form';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
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
            defaultValue=""
            render={({ field: { value, ...rest } }) => (
              <DatePicker
                label="Joining Date"
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
          <TextField
            fullWidth
            label="Department"
            defaultValue="Design"
            error={!!errors.department}
            helperText={errors.department?.message}
            {...register('department')}
          >
            <MenuItem value="Design">Design</MenuItem>
            <MenuItem value="Sales">Sales</MenuItem>
            <MenuItem value="Engineering">Engineering</MenuItem>
            <MenuItem value="Finance">Finance</MenuItem>
            <MenuItem value="HR">HR</MenuItem>
          </TextField>
        </Grid>
        <Grid size={6}>
          <TextField
            fullWidth
            label="Team"
            defaultValue="One GO"
            error={!!errors.team}
            helperText={errors.team?.message}
            {...register('team')}
          >
            <MenuItem value="One GO">One GO</MenuItem>
            <MenuItem value="CodeCrafters">CodeCrafters</MenuItem>
            <MenuItem value="Kernel Kings">Kernel Kings</MenuItem>
            <MenuItem value="Brainy Bytes">Brainy Bytes</MenuItem>
            <MenuItem value="Pixel Thinkers">Pixel Thinkers</MenuItem>
          </TextField>
        </Grid>
        <Grid size={6}>
          <TextField
            fullWidth
            label="Branch"
            defaultValue="New York"
            error={!!errors.branch}
            helperText={errors.branch?.message}
            {...register('branch')}
          >
            <MenuItem value="New York">New York</MenuItem>
            <MenuItem value="Chicago">Chicago</MenuItem>
            <MenuItem value="Los Angeles">Los Angeles</MenuItem>
            <MenuItem value="Houston">Houston</MenuItem>
            <MenuItem value="Miami">Miami</MenuItem>
          </TextField>
        </Grid>
        <Grid size={6}>
          <TextField
            fullWidth
            label="Shift"
            defaultValue="Day"
            error={!!errors.shift}
            helperText={errors.shift?.message}
            {...register('shift')}
          >
            <MenuItem value="Day">Day</MenuItem>
            <MenuItem value="Night">Night</MenuItem>
          </TextField>
        </Grid>
        <Grid size={6}>
          <TextField
            fullWidth
            label="Supervisor"
            error={!!errors.supervisor}
            helperText={errors.supervisor?.message}
            {...register('supervisor')}
          />
        </Grid>
        <Grid size={6}>
          <TextField
            fullWidth
            label="Employment Status"
            defaultValue="Active"
            error={!!errors.employmentStatus}
            helperText={errors.employmentStatus?.message}
            {...register('employmentStatus')}
          >
            <MenuItem value="Active">Active</MenuItem>
            <MenuItem value="Resigned">Resigned</MenuItem>
            <MenuItem value="Intern">Intern</MenuItem>
            <MenuItem value="Contract">Contract</MenuItem>
            <MenuItem value="Probation">Probation</MenuItem>
          </TextField>
        </Grid>
      </Grid>
      <Stack direction="column" gap={1}>
        <Typography variant="caption" fontWeight={500}>
          Employment Type
        </Typography>
        <Controller
          control={control}
          name="employmentType"
          defaultValue="In Office"
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
