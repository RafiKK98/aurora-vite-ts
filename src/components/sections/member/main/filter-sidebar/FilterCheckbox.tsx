import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

interface FilterCheckboxProps {
  title: string;
  options?: string[];
}

const FilterCheckbox = ({ title, options }: FilterCheckboxProps) => {
  return (
    <div>
      <Box sx={{ px: 2 }}>
        <Typography variant="caption" fontWeight={500}>
          {title}
        </Typography>
      </Box>
      <Stack direction="column" sx={{ pl: 2 }}>
        {options?.map((option) => (
          <FormControlLabel
            key={option}
            label={option}
            control={<Checkbox />}
            sx={{
              mx: 0,
            }}
          />
        ))}
      </Stack>
    </div>
  );
};

export default FilterCheckbox;
