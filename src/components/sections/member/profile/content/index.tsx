import Box, { BoxProps } from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { memberProfile } from 'data/member';
import ProfileCard from './ProfileCard';
import ProfileTabs from './ProfileTabs';

const Content = ({ sx, ...rest }: BoxProps) => {
  return (
    <Box sx={{ px: { xs: 3, md: 5 }, ...sx }} {...rest}>
      <Stack direction="column" gap={3}>
        <ProfileCard {...memberProfile.profileInfo} />
        <ProfileTabs {...memberProfile.details} />
      </Stack>
    </Box>
  );
};

export default Content;
