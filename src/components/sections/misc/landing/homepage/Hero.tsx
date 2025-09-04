import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import heroDark from 'assets/images/sections/misc/landing/hero/hero-img-dark.webp';
import hero from 'assets/images/sections/misc/landing/hero/hero-img.webp';
import { cssVarRgba } from 'lib/utils';
import { useBreakpoints } from 'providers/BreakpointsProvider';
import Image from 'components/base/Image';
import DashedLine from '../common/DashedLine';
import { Dot } from '../common/PageHeader';
import { StripedBackground } from '../common/StripedBackground';

const Hero = () => {
  const { up } = useBreakpoints();
  const { vars, typography } = useTheme();

  const upLg = up('lg');

  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        mt: { sm: 7 },
        py: 10.5,
        px: { xs: 3, md: 5 },
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: 1400,
          position: 'relative',
          px: { xs: 0 },
          textAlign: 'center',
          bgcolor: 'background.paper',

          '&::after': {
            content: '""',
            position: 'absolute',
            width: 260,
            height: 96,
            bottom: -96,
            left: -260,
            background: (theme) =>
              `linear-gradient(to bottom left, ${cssVarRgba(theme.vars.palette.background.elevation2Channel, 1)} 0%, transparent 50%)`,
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            width: 260,
            height: 96,
            top: -96,
            right: -260,
            background: (theme) =>
              `linear-gradient(to top right, ${cssVarRgba(theme.vars.palette.background.elevation2Channel, 1)} 0%, transparent 50%)`,
          },
        }}
      >
        <DashedLine
          orientation="vertical"
          sx={{
            zIndex: 10,
            position: 'absolute',
            left: 0,
            top: -72,
            bottom: -72,
          }}
        />
        <DashedLine
          orientation="vertical"
          sx={{
            zIndex: 10,
            position: 'absolute',
            right: 0,
            top: -72,
            bottom: -72,
          }}
        />
        {upLg && (
          <DashedLine
            orientation="vertical"
            sx={{
              zIndex: 10,
              position: 'absolute',
              left: '50%',
              top: -72,
              bottom: -72,
            }}
          />
        )}
        <DashedLine
          sx={{
            width: '100vw',
            zIndex: 20,
            position: 'absolute',
            left: '50%',
            transform: 'translate(-50%)',
            top: 0,
          }}
        />
        <DashedLine
          sx={{
            width: 200,
            position: 'absolute',
            left: -200,
            zIndex: 10,
            bottom: 0,
          }}
        />
        <DashedLine
          sx={{
            width: 200,
            position: 'absolute',
            right: -200,
            zIndex: 10,
            bottom: 0,
          }}
        />

        <Stack
          direction={{ xs: 'column', lg: 'row' }}
          sx={{
            '&> *': {
              flex: '1 1 50%',
              minWidth: 0,
            },
          }}
        >
          <StripedBackground
            fadeWidth="0"
            sx={() => ({
              p: { xs: 3, sm: 6, md: 10 },
              position: 'relative',
            })}
          >
            <Dot placement="top-left" />
            <Dot placement="top-right" />
            <Dot placement="bottom-right" />
            <Dot placement="bottom-left" />
            <Stack direction="column" gap={{ xs: 3, sm: 4.5 }} alignItems="flex-start">
              <Stack direction="column" gap={{ xs: 2, sm: 3 }} alignItems="flex-start">
                <Stack direction="column" gap={{ xs: 1.5, sm: 2 }} alignItems="flex-start">
                  <Typography
                    variant="h2"
                    textAlign="left"
                    sx={{
                      lineHeight: 1.14,
                      fontSize: {
                        xs: typography.h4.fontSize,
                        sm: typography.h3.fontSize,
                        md: typography.h2.fontSize,
                      },
                    }}
                  >
                    Ultimate web app to{' '}
                    <Box component="span" color="primary.main">
                      enhances productivity.
                    </Box>
                  </Typography>
                  <Typography
                    variant="h5"
                    color="textSecondary"
                    textAlign="left"
                    sx={{
                      fontSize: {
                        xs: typography.h6.fontSize,
                        sm: typography.h5.fontSize,
                      },
                    }}
                  >
                    Try our app for a simpler, organized workflow.
                  </Typography>
                </Stack>
                <Typography variant="body2" color="textSecondary" textAlign="left">
                  Our web app offers a seamless experience, allowing you to manage projects
                  effortlessly while collaborating with your team in real-time.
                </Typography>
              </Stack>
              <Stack gap={1}>
                <Button variant="contained">Start today</Button>
                <Button variant="soft" color="neutral">
                  Contact us
                </Button>
              </Stack>
            </Stack>
            <DashedLine
              gradientOrientation="none"
              sx={{
                width: 1,
                position: 'absolute',
                zIndex: 10,
                bottom: 0,
                left: 0,
              }}
            />
          </StripedBackground>
          <Box
            sx={{
              position: 'relative',
              width: 1,
              backgroundImage: `linear-gradient(to bottom, transparent, ${vars.palette.common.background})`,
            }}
          >
            <Dot placement="top-right" />
            <Dot placement="bottom-right" />
            <Dot placement="bottom-left" />
            <Image
              src={{
                light: hero,
                dark: heroDark,
              }}
              sx={{
                position: { lg: 'absolute' },
                inset: 0,
                width: 1,
                height: 1,
                minHeight: { lg: 617 },
                maskImage: `linear-gradient(to bottom, black 75%, transparent)`,
              }}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
