import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useBreakpoints } from 'providers/BreakpointsProvider';
import paths from 'routes/paths';
import IconifyIcon from 'components/base/IconifyIcon';
import PageBreadcrumb from 'components/sections/common/PageBreadcrumb';
import StyledTextField from 'components/styled/StyledTextField';

const JobOpeningHeader = () => {
  const { down } = useBreakpoints();
  const downLg = down('lg');
  return (
    <Box sx={{ px: { xs: 3, md: 5 }, py: 3 }}>
      <Stack direction={{ xs: 'column', sm: 'row' }} gap={2} alignItems={{ sm: 'flex-end' }}>
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

        <Stack gap={1} flex={1} alignItems="center">
          <StyledTextField
            fullWidth
            id="searchItem"
            type="search"
            placeholder="Search"
            size="medium"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <IconifyIcon icon="material-symbols:search-rounded" />
                  </InputAdornment>
                ),
              },
            }}
            sx={{ maxWidth: 250, ml: 'auto' }}
          />
          <Button
            variant="soft"
            color="neutral"
            startIcon={<IconifyIcon icon="material-symbols:filter-alt-outline" />}
          >
            Filter
          </Button>
          <Button
            href={paths.hiringNewOpening}
            variant="contained"
            startIcon={<IconifyIcon icon="material-symbols:add" />}
            sx={{ textWrap: 'nowrap' }}
          >
            New Opening
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default JobOpeningHeader;
