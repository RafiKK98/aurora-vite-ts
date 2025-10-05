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
import AvatarDropBox from 'components/base/AvatarDropBox';

export interface PersonalInformationFormValues {
  avatar: File | string;
  firstName: string;
  lastName: string;
  displayName: string;
  IDNo: string;
  birthday: string;
  religion: 'Islam' | 'Christian' | 'Hindu' | 'Buddhist' | 'Other';
  gender: 'Male' | 'Female' | 'Other';
  maritalStatus: 'Single' | 'Married';
}

export const personalInformationFormSchema = yup.object().shape({
  avatar: yup.mixed<File>().required('Avatar is required'),
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  displayName: yup.string().required('Display name is required'),
  IDNo: yup.string().required('ID number is required'),
  birthday: yup.string().required('Birthday is required'),
  religion: yup
    .string()
    .oneOf(['Islam', 'Christian', 'Hindu', 'Buddhist', 'Other'])
    .required('Religion is required'),
  gender: yup.string().oneOf(['Male', 'Female', 'Other']).required('Gender is required'),
  maritalStatus: yup.string().oneOf(['Single', 'Married']).required('Marital status is required'),
});

const PersonalInformation = () => {
  const {
    control,
    formState: { errors },
    register,
  } = useFormContext<PersonalInformationFormValues>();
  return (
    <Stack direction="column" gap={4}>
      <Controller
        control={control}
        name="avatar"
        render={({ field: { value, onChange } }) => {
          return (
            <AvatarDropBox
              defaultFile={value}
              onDrop={(acceptedFiles) => {
                if (acceptedFiles.length > 0) {
                  onChange(acceptedFiles[0]);
                }
              }}
              error={errors?.avatar ? 'Invalid avatar' : undefined}
              sx={{ alignSelf: 'center' }}
            />
          );
        }}
      />
      <Stack direction="column" gap={3}>
        <Grid container rowSpacing={2} columnSpacing={1}>
          <Grid size={6}>
            <TextField
              label="First Name"
              fullWidth
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
              {...register('firstName')}
            />
          </Grid>
          <Grid size={6}>
            <TextField
              label="Last Name"
              fullWidth
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
              {...register('lastName')}
            />
          </Grid>
          <Grid size={6}>
            <TextField
              label="Display Name"
              fullWidth
              error={!!errors.displayName}
              helperText={errors.displayName?.message}
              {...register('displayName')}
            />
          </Grid>
          <Grid size={6}>
            <TextField
              label="ID No"
              fullWidth
              error={!!errors.IDNo}
              helperText={errors.IDNo?.message}
              {...register('IDNo')}
            />
          </Grid>
          <Grid size={6}>
            <Controller
              control={control}
              name="birthday"
              defaultValue=""
              render={({ field: { value, ...rest } }) => (
                <DatePicker
                  label="Birthday"
                  value={dayjs(value)}
                  slotProps={{
                    textField: {
                      error: !!errors.birthday,
                      helperText: errors.birthday?.message,
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
              label="Religion"
              fullWidth
              select
              defaultValue="Islam"
              error={!!errors.religion}
              helperText={errors.religion?.message}
              {...register('religion')}
            >
              <MenuItem value="Islam">Islam</MenuItem>
              <MenuItem value="Christian">Christian</MenuItem>
              <MenuItem value="Hindu">Hindu</MenuItem>
              <MenuItem value="Buddhist">Buddhist</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </TextField>
          </Grid>
        </Grid>
        <Stack direction="column" gap={1}>
          <Typography variant="caption" fontWeight={500}>
            Gender
          </Typography>
          <Controller
            control={control}
            name="gender"
            defaultValue="Male"
            render={({ field }) => (
              <RadioGroup row aria-labelledby="gender-buttons" {...field}>
                <FormControlLabel value="Male" control={<Radio />} label="Male" />
                <FormControlLabel value="Female" control={<Radio />} label="Female" />
                <FormControlLabel value="Other" control={<Radio />} label="Others" />
              </RadioGroup>
            )}
          />
        </Stack>
        <Stack direction="column" gap={1}>
          <Typography variant="caption" fontWeight={500}>
            Marital Status
          </Typography>
          <Controller
            control={control}
            name="maritalStatus"
            defaultValue="Single"
            render={({ field }) => (
              <RadioGroup row aria-labelledby="marital-status-buttons" {...field}>
                <FormControlLabel value="Single" control={<Radio />} label="Single" />
                <FormControlLabel value="Married" control={<Radio />} label="Married" />
              </RadioGroup>
            )}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PersonalInformation;
