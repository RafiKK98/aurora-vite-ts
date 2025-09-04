import Stack, { StackOwnProps } from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

interface SectionHeaderProps extends StackOwnProps {
  title: string;
  subtitle: string;
}

const SectionHeader = ({ title, subtitle, sx, ...rest }: SectionHeaderProps) => {
  return (
    <Stack direction="column" gap={1} sx={{ textAlign: 'center', ...sx }} {...rest}>
      <Typography variant="overline" color="text.disabled" sx={{ fontWeight: 700 }}>
        {title}
      </Typography>
      <Typography variant="h4">{subtitle}</Typography>
    </Stack>
  );
};

export default SectionHeader;
