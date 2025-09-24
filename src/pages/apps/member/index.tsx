import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useBreakpoints } from 'providers/BreakpointsProvider';
import IconifyIcon from 'components/base/IconifyIcon';
import PageBreadcrumb from 'components/sections/common/PageBreadcrumb';
import FilterControlBar from 'components/sections/member/FilterControlBar';
import FilterSidebar from 'components/sections/member/filter-sidebar';
import MemberGridView from 'components/sections/member/grid-view';
import MemberListView from 'components/sections/member/list-view';
import MemberOrgChartView from 'components/sections/member/org-chart-view';

const Member = () => {
  const { up, down } = useBreakpoints();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [viewType, setViewType] = useState<'list' | 'grid' | 'org-chart'>('list');

  const upMd = up('md');
  const downLg = down('lg');

  const handleDrawerOpen = () => setIsDrawerOpen(true);
  const handleDrawerClose = () => setIsDrawerOpen(false);

  const handleChange = (event: MouseEvent, newView: 'list' | 'grid' | 'org-chart') =>
    setViewType(newView);

  useEffect(() => {
    if (!upMd) handleDrawerClose();
  }, [upMd]);
  return (
    <Stack height={1}>
      <FilterSidebar isDrawerOpen={isDrawerOpen} toggleDrawer={handleDrawerClose} up={upMd} />
      <Paper
        sx={(theme) => ({
          flex: 1,
          minWidth: 0,
          marginLeft: { md: `-280px` },
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          ...(isDrawerOpen && {
            transition: theme.transitions.create('margin', {
              easing: theme.transitions.easing.easeOut,
              duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
          }),
        })}
      >
        <Box sx={{ px: { xs: 3, md: 5 }, py: 3 }}>
          <Stack
            sx={{
              gap: 2,
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { sm: 'flex-start' },
              justifyContent: 'space-between',
            }}
          >
            <div>
              <PageBreadcrumb
                items={[
                  { label: 'Home', url: '#!' },
                  { label: 'Member', active: true },
                ]}
                sx={{ mb: 1 }}
              />
              <Typography variant="h4" sx={[downLg && { fontSize: 'h5.fontSize' }]}>
                Member
              </Typography>
            </div>

            <Button variant="contained" startIcon={<IconifyIcon icon="material-symbols:add" />}>
              New Member
            </Button>
          </Stack>
        </Box>
        <Stack direction="column" gap={5} sx={{ px: { xs: 3, md: 5 }, pb: { xs: 3, md: 5 } }}>
          <FilterControlBar
            viewType={viewType}
            handleChange={handleChange}
            toggleDrawer={() => {
              if (isDrawerOpen) handleDrawerClose();
              else handleDrawerOpen();
            }}
          />
          {viewType === 'list' && <MemberListView />}
          {viewType === 'grid' && <MemberGridView />}
          {viewType === 'org-chart' && <MemberOrgChartView />}
        </Stack>
      </Paper>
    </Stack>
  );
};

export default Member;
