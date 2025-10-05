import { Controller, useFormContext } from 'react-hook-form';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { countries } from 'data/countries';
import * as yup from 'yup';
import CountrySelect from 'components/common/CountrySelect';

export interface AddressFormValues {
  permanent: {
    country: string;
    state: string;
    city: string;
    street: string;
    zip: string;
  };
  present: {
    country: string;
    state: string;
    city: string;
    street: string;
    zip: string;
  };
}

export const addressFormSchema = yup.object().shape({
  permanent: yup.object().shape({
    country: yup.string().required('This field is required'),
    state: yup.string().required('This field is required'),
    city: yup.string().required('This field is required'),
    street: yup.string().required('This field is required'),
    zip: yup.string().required('This field is required'),
  }),
  present: yup.object().shape({
    country: yup.string().required('This field is required'),
    state: yup.string().required('This field is required'),
    city: yup.string().required('This field is required'),
    street: yup.string().required('This field is required'),
    zip: yup.string().required('This field is required'),
  }),
});

const Address = () => {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext<AddressFormValues>();

  return (
    <Stack direction="column" gap={4}>
      <Stack direction="column" gap={1}>
        <Typography fontWeight={600}>Permanent Address</Typography>
        <Grid container rowSpacing={2} columnSpacing={1}>
          <Grid size={6}>
            <Controller
              name="permanent.country"
              control={control}
              render={({ field: { onChange, value } }) => (
                <CountrySelect
                  sx={{ mb: 1 }}
                  fullWidth
                  onChange={(_, value) => onChange(value ? value.label : '')}
                  value={countries.find((country) => country.label === value) || null}
                  renderInput={(params) => (
                    <TextField
                      label="Country"
                      error={!!errors.permanent?.country?.message}
                      helperText={errors.permanent?.country?.message}
                      {...params}
                    />
                  )}
                />
              )}
            />
          </Grid>
          <Grid size={6}>
            <TextField
              label="State"
              error={!!errors.permanent?.state}
              helperText={errors.permanent?.state?.message}
              fullWidth
              {...register('permanent.state')}
            />
          </Grid>
          <Grid size={6}>
            <TextField
              label="City"
              error={!!errors.permanent?.city}
              helperText={errors.permanent?.city?.message}
              fullWidth
              {...register('permanent.city')}
            />
          </Grid>
          <Grid size={6}>
            <TextField
              label="Street"
              error={!!errors.permanent?.street}
              helperText={errors.permanent?.street?.message}
              fullWidth
              {...register('permanent.street')}
            />
          </Grid>
          <Grid size={6}>
            <TextField
              label="Zip"
              error={!!errors.permanent?.zip}
              helperText={errors.permanent?.zip?.message}
              fullWidth
              {...register('permanent.zip')}
            />
          </Grid>
        </Grid>
      </Stack>
      <Stack direction="column" gap={1}>
        <Stack justifyContent="space-between">
          <Typography fontWeight={600}>Present Address</Typography>
          <FormControlLabel control={<Checkbox />} label="Same as permanent" />
        </Stack>
        <Grid container rowSpacing={2} columnSpacing={1}>
          <Grid size={6}>
            <Controller
              name="present.country"
              control={control}
              render={({ field: { onChange, value } }) => (
                <CountrySelect
                  sx={{ mb: 1 }}
                  fullWidth
                  onChange={(_, value) => onChange(value ? value.label : '')}
                  value={countries.find((country) => country.label === value) || null}
                  renderInput={(params) => (
                    <TextField
                      label="Country"
                      error={!!errors.present?.country?.message}
                      helperText={errors.present?.country?.message}
                      {...params}
                    />
                  )}
                />
              )}
            />
          </Grid>
          <Grid size={6}>
            <TextField
              label="State"
              error={!!errors.present?.state}
              helperText={errors.present?.state?.message}
              fullWidth
              {...register('present.state')}
            />
          </Grid>
          <Grid size={6}>
            <TextField
              label="City"
              error={!!errors.present?.city}
              helperText={errors.present?.city?.message}
              fullWidth
              {...register('present.city')}
            />
          </Grid>
          <Grid size={6}>
            <TextField
              label="Street"
              error={!!errors.present?.street}
              helperText={errors.present?.street?.message}
              fullWidth
              {...register('present.street')}
            />
          </Grid>
          <Grid size={6}>
            <TextField
              label="Zip"
              error={!!errors.present?.zip}
              helperText={errors.present?.zip?.message}
              fullWidth
              {...register('present.zip')}
            />
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
};

export default Address;
