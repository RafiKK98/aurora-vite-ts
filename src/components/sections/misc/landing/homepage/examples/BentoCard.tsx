import Paper, { PaperProps } from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { type SxProps, type Theme, styled } from '@mui/material/styles';

const BentoCard = styled(({ background = 1, ...props }: PaperProps) => (
  <Paper background={background} {...props} />
))(({ theme }) => ({
  outline: `1px solid ${theme.vars.palette.chBlue[100]}`,
  borderRadius: 24,
  height: '100%',
  overflow: 'hidden',
}));

const BentoCardHeader = ({
  title,
  subtitle,
  sx,
}: {
  title: string;
  subtitle: string;
  sx?: SxProps<Theme>;
}) => {
  return (
    <Stack direction="column" gap={0.5} sx={{ ...sx }}>
      <Typography variant="subtitle1" sx={{ color: 'primary.darker', fontWeight: 700 }}>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ color: 'primary.darker' }}>
        {subtitle}
      </Typography>
    </Stack>
  );
};

export { BentoCard, BentoCardHeader };
