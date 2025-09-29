import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import StyledTextField from 'components/styled/StyledTextField';

interface FilterSelectProps {
  title: string;
  options?: string[];
}

const FilterSelect = ({ title, options }: FilterSelectProps) => {
  return (
    <div>
      <Box sx={{ px: 2 }}>
        <Typography variant="caption" fontWeight={500}>
          {title}
        </Typography>
      </Box>
      <FormControl fullWidth sx={{ px: '1px' }}>
        <StyledTextField
          select
          placeholder="Select"
          defaultValue={options?.[0]}
          slotProps={{
            input: {
              'aria-label': 'Filter Select',
            },
          }}
        >
          {options?.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </StyledTextField>
      </FormControl>
    </div>
  );
};

export default FilterSelect;
