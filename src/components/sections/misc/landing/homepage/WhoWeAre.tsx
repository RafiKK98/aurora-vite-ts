import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import whoWeAreImg from 'assets/images/sections/misc/landing/who-we-are-img.webp';
import { cssVarRgba } from 'lib/utils';

const WhoWeAre = () => {
  return (
    <Box sx={{ py: 5 }}>
      <Box
        sx={{
          position: 'relative',
          width: 1,
          py: 12,
          px: { xs: 3, md: 5 },
          zIndex: 1,

          '&:after': {
            content: '""',
            position: 'absolute',
            width: 1,
            height: 1,
            top: 0,
            left: 0,
            background: ({ vars }) =>
              `url(${whoWeAreImg}) no-repeat, linear-gradient(to bottom, color-mix(in srgb, ${cssVarRgba(vars.palette.background.elevation2Channel, 1)} 85%, transparent), ${cssVarRgba(vars.palette.common.backgroundChannel, 1)})`,
            backgroundPositionX: '50%',
            backgroundPositionY: '50%',
            backgroundBlendMode: 'overlay',
            filter: 'opacity(1) grayscale(0.5)',
            zoom: 0.675,
          },
        }}
      >
        <Box position="relative" textAlign="center" zIndex={2}>
          <Typography
            component="p"
            variant="overline"
            color="textSecondary"
            sx={{ fontWeight: 700, mb: 3 }}
          >
            Who are we
          </Typography>

          <Typography variant="h6" fontWeight={500} mb={0.5}>
            We are a team of professionals with an aim to
          </Typography>

          <Typography
            variant="h2"
            color="primary"
            sx={{
              fontStyle: 'italic',
            }}
          >
            make your life faster{' '}
            <Box
              component="span"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'nowrap',
                gap: 1,
              }}
            >
              <SvgIcon
                width="29"
                height="19"
                viewBox="0 0 29 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5.5 6H17.5" stroke="#3385F0" strokeWidth="2" strokeLinecap="round" />
                <path d="M3.75 12H27.75" stroke="#3385F0" strokeWidth="2" strokeLinecap="round" />
                <path d="M1.5 18H20.5" stroke="#3385F0" strokeWidth="2" strokeLinecap="round" />
              </SvgIcon>
            </Box>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default WhoWeAre;
