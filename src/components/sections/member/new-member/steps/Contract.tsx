import { useFormContext } from 'react-hook-form';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import * as yup from 'yup';

export interface ContractFormValues {
  email: string;
  phoneNo: string;
}

export const contractFormSchema = yup.object().shape({
  email: yup.string().email('Invalid email format').required('This field is required'),
  phoneNo: yup.string().required('This field is required'),
});

const Contract = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ContractFormValues>();
  return (
    <Grid container rowSpacing={2} columnSpacing={1}>
      <Grid size={6}>
        <TextField
          label="Email"
          error={!!errors.email}
          helperText={errors.email?.message}
          fullWidth
          {...register('email')}
        />
      </Grid>
      <Grid size={6}>
        <TextField
          label="Phone No"
          error={!!errors.phoneNo}
          helperText={errors.phoneNo?.message}
          fullWidth
          {...register('phoneNo')}
        />
      </Grid>
    </Grid>
  );
};

export default Contract;
