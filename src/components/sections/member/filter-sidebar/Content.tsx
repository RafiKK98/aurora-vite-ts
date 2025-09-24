import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconifyIcon from 'components/base/IconifyIcon';
import SimpleBar from 'components/base/SimpleBar';
import FilterCheckbox from './FilterCheckbox';
import FilterSelect from './FilterSelect';
import FilterSlider from './FilterSlider';

interface ContentProps {
  toggleDrawer: () => void;
}

const Content = ({ toggleDrawer }: ContentProps) => {
  return (
    <SimpleBar>
      <div>
        <Stack justifyContent="space-between" sx={{ mb: 2 }}>
          <Typography variant="h6" lineHeight={1.5}>
            Filter
          </Typography>
          <IconButton onClick={toggleDrawer}>
            <IconifyIcon icon="material-symbols:close" sx={{ fontSize: 20 }} />
          </IconButton>
        </Stack>
        <Stack direction="column" gap={1}>
          <FilterSelect title="Department" options={['IT', 'HR', 'Sales', 'Marketing']} />
          <FilterSelect title="Team" />
          <FilterCheckbox title="Employment" />
          <FilterCheckbox title="Status" />
          <FilterCheckbox title="Gender" />
          <FilterCheckbox title="Religion" />
          <FilterSlider title="Pay range" />
        </Stack>
      </div>
    </SimpleBar>
  );
};

export default Content;
