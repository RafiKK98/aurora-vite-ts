import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useBreakpoints } from 'providers/BreakpointsProvider';
import paths from 'routes/paths';
import PageBreadcrumb from 'components/sections/common/PageBreadcrumb';

const Header = () => {
  const { down } = useBreakpoints();
  const downLg = down('lg');
  return (
    <Box sx={{ px: { xs: 3, md: 5 }, pb: { xs: 3, md: 5 }, pt: 3 }}>
      <Stack
        sx={{
          gap: 2,
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { sm: 'flex-end' },
          justifyContent: 'space-between',
          //   ...sx,
        }}
      >
        <div>
          <PageBreadcrumb
            items={[
              { label: 'Home', url: paths.hiringJobOpening },
              { label: 'Members', active: true },
            ]}
            sx={{ mb: 1 }}
          />
          <Typography variant="h4" sx={[downLg && { fontSize: 'h5.fontSize' }]}>
            Job Openings
          </Typography>
        </div>
      </Stack>
    </Box>
  );
};

export default Header;
