import Chip, { chipClasses } from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import type { Meeting } from 'types/hiring';
import IconifyIcon from 'components/base/IconifyIcon';

const MeetingCard = ({ item }: { item: Meeting }) => {
  return (
    <Paper
      background={1}
      sx={{
        p: 2,
        outline: 0,
        borderRadius: 4,
        '&:hover': { bgcolor: 'background.elevation2', cursor: 'pointer' },
      }}
    >
      <Stack gap={1} divider={<Divider flexItem sx={{ borderColor: 'dividerLight' }} />}>
        <Stack direction="column" gap={0.5}>
          <Typography variant="subtitle2" fontWeight={600}>
            {item.time}
          </Typography>
          <Typography variant="caption" fontWeight={500} color="text.secondary" lineHeight={1.5}>
            {item.duration}
          </Typography>
        </Stack>
        <Stack gap={1} flexGrow={1} justifyContent="space-between">
          <Stack direction="column" gap={0.5}>
            <Typography variant="caption" fontWeight={500} color="text.secondary" lineHeight={1.5}>
              {item.type}
            </Typography>
            <Typography variant="subtitle2" fontWeight={600}>
              {item.title}
            </Typography>
          </Stack>
          <Stack>
            <Chip
              icon={<IconifyIcon icon={item.chip.icon} sx={{ fontSize: 20 }} />}
              color={item.chip.color}
              clickable
              sx={{
                width: 20,
                height: 20,
                [`& .${chipClasses.label}`]: { display: 'none' },
              }}
            />
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default MeetingCard;
