import Stack from '@mui/material/Stack';
import MemberProvider, { useMemberContext } from 'providers/MemberProvider';
import FilterControlBar from './FilterControlBar';
import MemberGridView from './grid-view';
import MemberListView from './list-view';
import MemberOrgChartView from './org-chart-view';

const index = ({ isDrawerOpen, handleDrawerClose, handleDrawerOpen }: Props) => {
  return (
    <MemberProvider>
      <MemberMain
        isDrawerOpen={isDrawerOpen}
        handleDrawerClose={handleDrawerClose}
        handleDrawerOpen={handleDrawerOpen}
      />
    </MemberProvider>
  );
};

interface Props {
  isDrawerOpen: boolean;
  handleDrawerClose: () => void;
  handleDrawerOpen: () => void;
}
const MemberMain = ({ isDrawerOpen, handleDrawerClose, handleDrawerOpen }: Props) => {
  const { state, handleViewTypeChange } = useMemberContext();
  const handleChange = (event: MouseEvent, newView: 'list' | 'grid' | 'org-chart') => {
    handleViewTypeChange(newView);
  };
  return (
    <Stack direction="column" gap={5} sx={{ px: { xs: 3, md: 5 }, pb: { xs: 3, md: 5 } }}>
      <FilterControlBar
        viewType={state.viewType}
        handleChange={handleChange}
        toggleDrawer={() => {
          if (isDrawerOpen) handleDrawerClose();
          else handleDrawerOpen();
        }}
      />
      {state.viewType === 'list' && <MemberListView />}
      {state.viewType === 'grid' && <MemberGridView />}
      {state.viewType === 'org-chart' && <MemberOrgChartView />}
    </Stack>
  );
};

export default index;
