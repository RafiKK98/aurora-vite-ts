import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { memberProfile } from 'data/member';
import IconifyIcon from 'components/base/IconifyIcon';
import StatusAvatar from 'components/base/StatusAvatar';

const ProfileCard = (props: Omit<typeof memberProfile.profileInfo, 'coverPhoto'>) => {
  const { avatar, address, designation, email, employmentType, id, name, phone } = props;
  return (
    <Paper background={1} sx={{ outline: 0, p: 3, borderRadius: 4 }}>
      <Stack direction={{ xs: 'column', md: 'row' }} gap={4} alignItems="center">
        <Stack gap={2} alignItems="center">
          <StatusAvatar
            status="online"
            src={avatar}
            sx={{
              width: 80,
              height: 80,
            }}
          />
          <div>
            <Stack gap={2} alignItems="center" mb={0.5}>
              <Typography variant="h5">{name}</Typography>
              <Chip variant="filled" color="success" label="Active" />
            </Stack>
            <Stack gap={2} alignItems="center">
              <Typography variant="subtitle2" fontWeight={400} color="text.secondary">
                {designation}
              </Typography>
              <Typography variant="subtitle2" fontWeight={400} color="text.secondary">
                <Box component="span" fontWeight={500} color="text.primary">
                  ID:{' '}
                </Box>
                {id}
              </Typography>
              <Typography variant="subtitle2" fontWeight={400} color="text.secondary">
                {employmentType}
              </Typography>
            </Stack>
          </div>
        </Stack>
        <Grid container spacing={3}>
          <Grid size={5.25}>
            <Stack direction="column" gap={1} alignItems="flex-start">
              <Avatar
                sx={{
                  width: 32,
                  height: 32,
                  bgcolor: 'background.elevation2',
                  color: 'text.secondary',
                  cursor: 'pointer',
                  '&:hover': {
                    bgcolor: 'background.elevation3',
                  },
                }}
              >
                <IconifyIcon icon="material-symbols:mail-outline-rounded" sx={{ fontSize: 18 }} />
              </Avatar>
              <Typography href="#!" component={Link} variant="subtitle2">
                {email}
              </Typography>
            </Stack>
          </Grid>
          <Grid size={4.75}>
            <Stack direction="column" gap={1} alignItems="flex-start">
              <Avatar
                sx={{
                  width: 32,
                  height: 32,
                  bgcolor: 'background.elevation2',
                  color: 'text.secondary',
                  cursor: 'pointer',
                  '&:hover': {
                    bgcolor: 'background.elevation3',
                  },
                }}
              >
                <IconifyIcon icon="material-symbols:call-outline-rounded" sx={{ fontSize: 18 }} />
              </Avatar>
              <Typography variant="subtitle2" color="text.secondary">
                {phone}
              </Typography>
            </Stack>
          </Grid>
          <Grid size={2}>
            <Stack direction="column" gap={1} alignItems="flex-start">
              <Avatar
                sx={{
                  width: 32,
                  height: 32,
                  bgcolor: 'background.elevation2',
                  color: 'text.secondary',
                  cursor: 'pointer',
                  '&:hover': {
                    bgcolor: 'background.elevation3',
                  },
                }}
              >
                <IconifyIcon
                  icon="material-symbols:location-on-outline-rounded"
                  sx={{ fontSize: 18 }}
                />
              </Avatar>
              <Typography variant="subtitle2" color="text.secondary">
                {address}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </Paper>
  );
};

export default ProfileCard;
