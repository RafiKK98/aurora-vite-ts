import { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

interface FilterSliderProps {
  title: string;
}

const FilterSlider = ({ title }: FilterSliderProps) => {
  const [value, setValue] = useState<number[]>([50, 75]);

  const handleChange = (event: Event, newValue: number[]) => setValue(newValue);

  return (
    <div>
      <Box sx={{ px: 2 }}>
        <Typography variant="caption" fontWeight={500}>
          {title}
        </Typography>
      </Box>
      <Stack direction="column" sx={{ pl: 3.125 }}>
        <Slider
          getAriaLabel={() => 'Price range'}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={(value) => `$${value}`}
        />
        <Stack justifyContent="space-between" gap={1}>
          <Typography variant="body2" color="text.secondary" lineHeight={1.43}>
            $10
          </Typography>
          <Typography variant="body2" color="text.secondary" lineHeight={1.43}>
            $100
          </Typography>
        </Stack>
      </Stack>
    </div>
  );
};

export default FilterSlider;
