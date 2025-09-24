import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface FilterSliderProps {
  title: string;
}

const FilterSlider = ({ title }: FilterSliderProps) => {
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

export default FilterSlider;
