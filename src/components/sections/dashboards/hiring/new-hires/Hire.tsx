import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import dayjs from 'dayjs';
import type { NewHire } from 'types/hiring';

const Hire = ({ hire }: { hire: NewHire }) => {
  return (
    <Stack alignItems="center" gap={1}>
      <Avatar src={hire.avatar} sx={{ width: 32, height: 32 }} />
      <Stack justifyContent="space-between" alignItems="center" width={1}>
        <Stack direction="column">
          <Typography variant="body2" fontWeight={600} lineHeight={1.6}>
            {hire.name}
          </Typography>
          <Stack gap={1}>
            <Typography variant="caption" color="text.secondary" fontWeight={500} lineHeight={1.5}>
              {hire.designation}
            </Typography>
            <Typography variant="caption" color="text.secondary" fontWeight={500} lineHeight={1.5}>
              {hire.location}
            </Typography>
          </Stack>
        </Stack>
        <Typography variant="caption" fontWeight={600} color="text.primary">
          {dayjs(hire.joiningDate).format('DD MMM, YYYY')}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Hire;
