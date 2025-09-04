import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import { cssVarRgba } from 'lib/utils';
import Logo from 'components/common/Logo';
import { BentoCard } from './BentoCard';

const LogoCard = () => {
  const { vars } = useTheme();

  return (
    <BentoCard
      sx={{
        overflow: 'hidden',
        background: `
          repeating-linear-gradient(
            to right,
            ${vars.palette.dividerLight} 0,
            ${vars.palette.dividerLight} 1px,
            transparent 1px,
            transparent 12.5%
          ),
          repeating-linear-gradient(
            to bottom,
            ${vars.palette.dividerLight} 0,
            ${vars.palette.dividerLight} 1px,
            transparent 1px,
            transparent 25%
          )
        `,
      }}
    >
      <Stack
        direction="column"
        height={1}
        justifyContent="center"
        alignItems="center"
        sx={{
          background: `/* @noflip */ linear-gradient(45deg, transparent 0%, ${vars.palette.background.default} 40%, ${vars.palette.background.default} 60%, transparent 75%, ${cssVarRgba(vars.palette.success.mainChannel, 0.2)} 90%)`,
          py: 8.75,
        }}
      >
        <Logo />
      </Stack>
    </BentoCard>
  );
};

export default LogoCard;
