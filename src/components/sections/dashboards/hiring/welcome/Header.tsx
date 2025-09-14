import React, { isValidElement } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import type { SxProps, Theme } from '@mui/material/styles';
import dayjs from 'dayjs';

interface HeaderProps {
  title: string;
  subTitle?: string | React.ReactElement;
  sx?: SxProps<Theme>;
}

const Header = ({ title, subTitle, sx }: HeaderProps) => {
  const today = dayjs();

  return (
    <Stack sx={{ justifyContent: 'space-between', alignItems: 'center', ...sx }}>
      <div>
        <Typography variant="h5" sx={{ mb: 0.5, whiteSpace: 'nowrap' }}>
          {title}
        </Typography>
        {typeof subTitle === 'string' && (
          <Typography variant="subtitle1" component="p" fontWeight={500} color="text.secondary">
            {subTitle}
          </Typography>
        )}
        {isValidElement(subTitle) && subTitle}
      </div>
      <Box sx={{ textAlign: 'right' }}>
        <Typography
          variant="subtitle2"
          component="p"
          color="text.secondary"
          sx={{ mb: 1, whiteSpace: 'nowrap' }}
        >
          Today is {today.format('dddd')}
        </Typography>
        {typeof subTitle === 'string' && (
          <Typography variant="subtitle1" component="p" fontWeight={600}>
            {today.format('DD MMMM, YYYY')}
          </Typography>
        )}
      </Box>
    </Stack>
  );
};

export default Header;
