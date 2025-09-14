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

const JobOpening = () => {
  const { down } = useBreakpoints();
  const downLg = down('lg');
  return (
    <Stack direction="column" height={1}>
      <Box sx={{ px: { xs: 3, md: 5 }, pb: { xs: 3, md: 5 }, pt: 3 }}>
        <Stack
          sx={{
            gap: 2,
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { sm: 'flex-end' },
            justifyContent: 'space-between',
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

          <Stack
            sx={{
              gap: 3,
              alignItems: 'center',
            }}
          >
            <Stack
              gap={1}
              sx={{
                alignItems: 'center',
              }}
            >
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
              />
              <Button
                variant="soft"
                color="neutral"
                startIcon={<IconifyIcon icon="material-symbols:filter-alt-outline" />}
              >
                Filter
              </Button>
            </Stack>
            <Button
              href={paths.hiringNewOpening}
              variant="contained"
              startIcon={<IconifyIcon icon="material-symbols:add" />}
            >
              New Opening
            </Button>
          </Stack>
        </Stack>
      </Box>
      <Box sx={{ px: { xs: 3, md: 5 }, pb: { xs: 3, md: 5 }, pt: 3 }}>Main</Box>
    </Stack>
  );
};

export default JobOpening;
