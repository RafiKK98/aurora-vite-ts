import Box from '@mui/material/Box';
import img from 'assets/images/sections/misc/landing/landing-footer.webp';
import { cssVarRgba } from 'lib/utils';
import CTA from './CTA';
import NavSection from './NavSection';

const LandingFooter = () => {
  return (
    <Box
      component="footer"
      sx={({ vars }) => ({
        bgcolor: 'background.elevation1',
        position: 'relative',
        '&:after': {
          content: '""',
          position: 'absolute',
          inset: 0,
          opacity: 0.5,
          background: `url(${img}) no-repeat, linear-gradient(to bottom, color-mix(in srgb, ${cssVarRgba(vars.palette.primary.lighterChannel, 1)} 80%, transparent), ${cssVarRgba(vars.palette.background.defaultChannel, 1)})`,
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
        },

        '& > *': {
          position: 'relative',
          zIndex: 1,
        },
      })}
    >
      <CTA />
      <NavSection />
    </Box>
  );
};

export default LandingFooter;
