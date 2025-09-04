import { Stack, Typography } from '@mui/material';

interface InfoRowProps {
  label: string;
  value: string;
}

const InfoRow = ({ label, value }: InfoRowProps) => {
  return (
    <Stack spacing={1} sx={{ mb: 2 }}>
      <Typography variant="subtitle2" sx={{ fontWeight: 700, textWrap: 'nowrap' }}>
        {label} :
      </Typography>
      <Typography variant="subtitle2" color="textSecondary" sx={{ fontWeight: 400 }}>
        {value || ''}
      </Typography>
    </Stack>
  );
};

export default InfoRow;
