import { Divider, Stack, Tooltip } from '@mui/material';
import figma from 'assets/images/logo/figma.webp';
import js from 'assets/images/logo/javascript.webp';
import mui from 'assets/images/logo/mui_v7.webp';
import next from 'assets/images/logo/next_15.webp';
import react from 'assets/images/logo/react_19.webp';
import ts from 'assets/images/logo/typescript.webp';
import vite from 'assets/images/logo/vite_js.webp';
import { cssVarRgba } from 'lib/utils';
import { useBreakpoints } from 'providers/BreakpointsProvider';
import { darkShadows } from 'theme/shadows';
import Image from 'components/base/Image';

const techLogos = [
  { src: js, title: 'JavaScript' },
  { src: ts, title: 'TypeScript' },
  { src: figma, title: 'Figma' },
  { src: vite, title: 'Vite' },
];

const mainTechs = [
  { src: next, title: 'Nextjs 15' },
  { src: react, title: 'React 19' },
  { src: mui, title: 'MUI v7' },
];

const TechStack = () => {
  const { up } = useBreakpoints();
  const size = up('sm') ? 30 : 22;

  return (
    <Stack
      divider={<Divider flexItem orientation="vertical" />}
      sx={({ vars }) => ({
        bgcolor: cssVarRgba(vars.palette.common.whiteChannel, 0.04),
        borderRadius: 3.5,
        p: 2,
        gap: { xs: 1, sm: 2 },
        boxShadow: darkShadows[0],
      })}
    >
      <Stack gap={{ xs: 1, sm: 1.5 }}>
        {techLogos.map(({ src, title }) => (
          <Tooltip key={title} title={title} placement="top">
            <Image src={src} width={size} height={size} />
          </Tooltip>
        ))}
      </Stack>

      {mainTechs.map(({ src, title }) => (
        <Tooltip key={title} title={title} placement="top">
          <Image src={src} height={size} />
        </Tooltip>
      ))}
    </Stack>
  );
};

export default TechStack;
