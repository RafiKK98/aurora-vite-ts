import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface FilterCheckboxProps {
  title: string;
}

const FilterCheckbox = ({ title }: FilterCheckboxProps) => {
  return (
    <div>
      <Box sx={{ px: 2 }}>
        <Typography variant="caption" fontWeight={500}>
          {title}
        </Typography>
      </Box>
    </div>
  );
};

export default FilterCheckbox;
