import { Dispatch, SetStateAction } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useBreakpoints } from 'providers/BreakpointsProvider';
import IconifyIcon from 'components/base/IconifyIcon';
import PageBreadcrumb from 'components/sections/common/PageBreadcrumb';
import StyledTextField from 'components/styled/StyledTextField';

interface HeaderProps {
  toggleDrawer: (newOpen: boolean) => () => void;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}

const Header = ({ toggleDrawer, search, setSearch }: HeaderProps) => {
  const { up } = useBreakpoints();

  const upLg = up('lg');
  return (
    <Stack justifyContent="space-between" alignItems="flex-end" mb={5}>
      <Stack direction="column" gap={2}>
        <PageBreadcrumb
          items={[
            { label: 'Home', url: '#!' },
            { label: 'Job List', active: true },
          ]}
        />
        <Typography variant="h4">Job List</Typography>
      </Stack>
      <Stack gap={1} flex={1} justifyContent="flex-end">
        <StyledTextField
          placeholder="Search"
          value={search}
          fullWidth
          onChange={(e) => setSearch(e.target.value)}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <IconifyIcon icon="material-symbols:search" sx={{ fontSize: 24 }} />
                </InputAdornment>
              ),
            },
          }}
          sx={{ maxWidth: 300 }}
        />
        <Button
          variant="soft"
          color="neutral"
          shape={upLg ? undefined : 'square'}
          size={upLg ? 'medium' : undefined}
          sx={{ flexShrink: 0 }}
          onClick={toggleDrawer(true)}
        >
          <IconifyIcon icon="material-symbols:filter-alt-outline" fontSize={20} />
          {upLg && <Box component="span">Filter</Box>}
        </Button>
      </Stack>
    </Stack>
  );
};

export default Header;
