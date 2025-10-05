import { Controller, useFormContext } from 'react-hook-form';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import * as yup from 'yup';

export interface PayFormValues {
  payType: string;
  paySchedule: string;
  salaryRate: string;
}

export const payFormSchema = yup.object().shape({
  payType: yup.string().required(),
  paySchedule: yup.string().required(),
  salaryRate: yup.string().required(),
});

const Pay = () => {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext<PayFormValues>();
  return (
    <Grid container rowSpacing={2} columnSpacing={1}>
      <Grid size={6}>
        <FormControl variant="filled" fullWidth error={!!errors.payType}>
          <InputLabel id="pay-type-select-label">Pay type</InputLabel>
          <Controller
            control={control}
            name="payType"
            render={({ field }) => (
              <Select
                labelId="pay-type-select-label"
                label="Pay type"
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                {...field}
              >
                <MenuItem value="Weekly">Weekly</MenuItem>
                <MenuItem value="Monthly">Monthly</MenuItem>
                <MenuItem value="Yearly">Yearly</MenuItem>
              </Select>
            )}
          />
          <FormHelperText>{errors.payType?.message}</FormHelperText>
        </FormControl>
      </Grid>
      <Grid size={6}>
        <FormControl variant="filled" fullWidth error={!!errors.paySchedule}>
          <InputLabel id="pay-schedule-select-label">Pay Schedule</InputLabel>
          <Controller
            control={control}
            name="paySchedule"
            render={({ field }) => (
              <Select
                labelId="pay-schedule-select-label"
                label="Pay Schedule"
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                {...field}
              >
                <MenuItem value="Weekly">Weekly</MenuItem>
                <MenuItem value="Monthly">Monthly</MenuItem>
                <MenuItem value="Yearly">Yearly</MenuItem>
              </Select>
            )}
          />
          <FormHelperText>{errors.paySchedule?.message}</FormHelperText>
        </FormControl>
      </Grid>
      <Grid size={6}>
        <TextField
          label="Salary Rate"
          error={!!errors.salaryRate}
          helperText={errors.salaryRate?.message}
          fullWidth
          {...register('salaryRate')}
        />
      </Grid>
    </Grid>
  );
};

export default Pay;
