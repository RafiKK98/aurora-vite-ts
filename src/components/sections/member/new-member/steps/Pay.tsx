import { Controller, useFormContext } from 'react-hook-form';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { currencyFormat } from 'lib/utils';
import * as yup from 'yup';

export interface PayFormValues {
  payType: string;
  paySchedule: string;
  salaryRate: number;
}

export const payFormSchema = yup.object().shape({
  payType: yup.string().required(),
  paySchedule: yup.string().required(),
  salaryRate: yup.number().required(),
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
        <TextField
          fullWidth
          label="Pay type"
          error={!!errors.payType}
          helperText={errors.payType?.message}
          defaultValue="Weekly"
          {...register('payType')}
        >
          <MenuItem value="Weekly">Weekly</MenuItem>
          <MenuItem value="Monthly">Monthly</MenuItem>
          <MenuItem value="Yearly">Yearly</MenuItem>
        </TextField>
      </Grid>
      <Grid size={6}>
        <TextField
          fullWidth
          label="Pay Schedule"
          error={!!errors.paySchedule}
          helperText={errors.paySchedule?.message}
          defaultValue="Weekly"
          {...register('paySchedule')}
        >
          <MenuItem value="Weekly">Weekly</MenuItem>
          <MenuItem value="Monthly">Monthly</MenuItem>
          <MenuItem value="Yearly">Yearly</MenuItem>
        </TextField>
      </Grid>
      <Grid size={6}>
        <Controller
          name="salaryRate"
          control={control}
          defaultValue={10}
          render={({ field }) => (
            <TextField
              variant="filled"
              label="Salary Rate"
              fullWidth
              value={
                field.value && currencyFormat(field.value, 'en-US', { maximumFractionDigits: 0 })
              }
              error={!!errors.salaryRate}
              onChange={(e) => {
                const rawValue = e.target.value.replace(/[^0-9.]/g, '');
                field.onChange(rawValue ? Number(rawValue) : '');
              }}
            />
          )}
        />
      </Grid>
    </Grid>
  );
};

export default Pay;
