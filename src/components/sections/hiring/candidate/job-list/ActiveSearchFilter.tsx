import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const ActiveSearchFilter = ({ search }: { search: string }) => {
  return (
    <Stack justifyContent="space-between" mb={2}>
      <Stack gap={1.5}>
        <Typography variant="subtitle1" fontWeight={700}>
          Searched for
        </Typography>
        <Typography variant="subtitle1" fontWeight={500}>
          '{search}'
        </Typography>
      </Stack>
      <Stack gap={1.5}>
        <Typography variant="subtitle1" fontWeight={700}>
          10,000
        </Typography>
        <Typography variant="subtitle1" fontWeight={500}>
          Jobs Matched
        </Typography>
      </Stack>
    </Stack>
  );
};

export default ActiveSearchFilter;
