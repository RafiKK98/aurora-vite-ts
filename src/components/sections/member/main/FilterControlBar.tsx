// FilterControlBar.tsx
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useMemberContext } from 'providers/MemberProvider';
import IconifyIcon from 'components/base/IconifyIcon';
import StyledTextField from 'components/styled/StyledTextField';

interface FilterControlBarProps {
  toggleDrawer: () => void;
  viewType: string;
  handleChange: (event: any, value: any) => void;
}

const FilterControlBar = ({ viewType, handleChange, toggleDrawer }: FilterControlBarProps) => {
  const { state, handleSearch } = useMemberContext();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleSearch(event.target.value);
  };

  return (
    <Stack justifyContent="space-between" alignItems="center" direction="row">
      <Stack gap={1} alignItems="center" justifyContent="flex-start" flex={1} direction="row">
        <StyledTextField
          id="filter-search-box"
          type="search"
          placeholder="Search member"
          fullWidth
          value={state.searchTerm}
          onChange={handleSearchChange}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <IconifyIcon icon="material-symbols:search-rounded" />
                </InputAdornment>
              ),
            },
          }}
          sx={{ maxWidth: 230 }}
        />
        <Button
          variant="soft"
          color="neutral"
          startIcon={<IconifyIcon icon="material-symbols:filter-alt-outline" />}
          onClick={toggleDrawer}
        >
          Filter
        </Button>
      </Stack>

      <Stack gap={2} alignItems="center" justifyContent="flex-end" flex={1} direction="row">
        <ToggleButtonGroup
          color="primary"
          value={viewType}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
          size="small"
        >
          <ToggleButton value="list" sx={{ gap: 0.5 }}>
            <IconifyIcon icon="material-symbols:list" sx={{ fontSize: 24 }} />
            List
          </ToggleButton>
          <ToggleButton value="grid" sx={{ gap: 0.5 }}>
            <IconifyIcon icon="material-symbols:grid-view-outline" sx={{ fontSize: 24 }} />
            Grid
          </ToggleButton>
          <ToggleButton value="org-chart" sx={{ gap: 0.5 }}>
            <IconifyIcon icon="material-symbols:account-tree-outline" sx={{ fontSize: 24 }} />
            Org chart
          </ToggleButton>
        </ToggleButtonGroup>
        <Button variant="soft" color="neutral">
          Export
        </Button>
      </Stack>
    </Stack>
  );
};

export default FilterControlBar;
