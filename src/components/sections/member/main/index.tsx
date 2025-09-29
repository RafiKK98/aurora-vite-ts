import { useState } from 'react';
import Stack from '@mui/material/Stack';
import FilterControlBar from './FilterControlBar';
import MemberGridView from './grid-view';
import MemberListView from './list-view';
import MemberOrgChartView from './org-chart-view';

interface MemberMainProps {
  isDrawerOpen: boolean;
  handleDrawerClose: () => void;
  handleDrawerOpen: () => void;
}
const MemberMain = ({ isDrawerOpen, handleDrawerClose, handleDrawerOpen }: MemberMainProps) => {
  const [viewType, setViewType] = useState<'list' | 'grid' | 'org-chart'>('list');
  const handleChange = (event: MouseEvent, newView: 'list' | 'grid' | 'org-chart') =>
    setViewType(newView);
  return (
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
  );
};

export default MemberMain;
