import { Controller, useFormContext } from 'react-hook-form';
import Avatar from '@mui/material/Avatar';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import facebookLogo from 'assets/images/hiring/facebook-logo.webp';
import indeedLogo from 'assets/images/hiring/indeed-logo.webp';
import linkedInLogo from 'assets/images/hiring/linkedIn-logo.webp';
import { useBreakpoints } from 'providers/BreakpointsProvider';
import * as yup from 'yup';

export interface JobBoardFormValues {
  boards: {
    linkedIn: boolean;
    indeed: boolean;
    facebook: boolean;
  };
}

export const jobBoardSchema = yup.object({
  boards: yup.object({
    linkedIn: yup.boolean().required(),
    indeed: yup.boolean().required(),
    facebook: yup.boolean().required(),
  }),
});

const JobBoard = () => {
  const { control } = useFormContext<JobBoardFormValues>();
  const { up } = useBreakpoints();
  const upSm = up('sm');
  return (
    <Grid container rowSpacing={2} columnSpacing={1}>
      <Grid size={6}>
        <Paper background={2} sx={{ px: { xs: 1, sm: 2 }, py: 1, outline: 0, borderRadius: 2 }}>
          <Stack gap={{ xs: 1, sm: 2 }}>
            <Avatar
              src={linkedInLogo}
              alt="linkedIn logo"
              sx={{ width: 40, height: 40, bgcolor: 'transparent' }}
            />
            <Stack
              width={1}
              justifyContent={{ xs: 'flex-end', sm: 'space-between' }}
              alignItems="center"
            >
              {upSm && (
                <Typography variant="subtitle1" fontWeight={700}>
                  LinkedIn
                </Typography>
              )}
              <Controller
                control={control}
                name="boards.linkedIn"
                render={({ field }) => (
                  <FormControlLabel
                    control={<Checkbox checked={field.value} {...field} />}
                    label=""
                    sx={{ mr: 0 }}
                  />
                )}
              />
            </Stack>
          </Stack>
        </Paper>
      </Grid>
      <Grid size={6}>
        <Paper background={2} sx={{ px: { xs: 1, sm: 2 }, py: 1, outline: 0, borderRadius: 2 }}>
          <Stack gap={{ xs: 1, sm: 2 }}>
            <Avatar
              src={indeedLogo}
              alt="indeed logo"
              sx={{ width: 40, height: 40, bgcolor: 'transparent' }}
            />
            <Stack
              width={1}
              justifyContent={{ xs: 'flex-end', sm: 'space-between' }}
              alignItems="center"
            >
              {upSm && (
                <Typography variant="subtitle1" fontWeight={700}>
                  Indeed
                </Typography>
              )}
              <Controller
                control={control}
                name="boards.indeed"
                render={({ field }) => (
                  <FormControlLabel
                    control={<Checkbox checked={field.value} {...field} />}
                    label=""
                    sx={{ mr: 0 }}
                  />
                )}
              />
            </Stack>
          </Stack>
        </Paper>
      </Grid>
      <Grid size={6}>
        <Paper background={2} sx={{ px: { xs: 1, sm: 2 }, py: 1, outline: 0, borderRadius: 2 }}>
          <Stack gap={{ xs: 1, sm: 2 }}>
            <Avatar
              src={facebookLogo}
              alt="facebook logo"
              sx={{ width: 40, height: 40, bgcolor: 'transparent' }}
            />
            <Stack
              width={1}
              justifyContent={{ xs: 'flex-end', sm: 'space-between' }}
              alignItems="center"
            >
              {upSm && (
                <Typography variant="subtitle1" fontWeight={700}>
                  Facebook
                </Typography>
              )}
              <Controller
                control={control}
                name="boards.facebook"
                render={({ field }) => (
                  <FormControlLabel
                    control={<Checkbox checked={field.value} {...field} />}
                    label=""
                    sx={{ mr: 0 }}
                  />
                )}
              />
            </Stack>
          </Stack>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default JobBoard;
