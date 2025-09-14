import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import useNumberFormat from 'hooks/useNumberFormat';
import type { KPI } from 'types/hiring';
import IconifyIcon from 'components/base/IconifyIcon';

const KPI = ({ title, subTitle, value, icon }: KPI) => {
  const { numberFormat } = useNumberFormat();
  return (
    <Paper background={1} sx={{ p: 2, borderRadius: 4, outline: 0 }}>
      <Stack direction="column" gap={0.5}>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Typography variant="subtitle2" fontWeight={600}>
            {title}
          </Typography>
          <Stack
            justifyContent="center"
            alignItems="center"
            sx={({ vars }) => ({
              width: 40,
              height: 40,
              borderRadius: '50%',
              bgcolor: vars.palette.chBlue[50],
            })}
          >
            <IconifyIcon icon={icon} sx={{ fontSize: 24, color: 'primary.main' }} />
          </Stack>
        </Stack>
        <Stack direction="column" gap={0.5}>
          <Typography variant="h5" fontWeight={500}>
            {typeof value === 'number' ? numberFormat(value) : value}
          </Typography>
          <Typography variant="caption" fontWeight={500} color="text.secondary">
            {subTitle}
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default KPI;
