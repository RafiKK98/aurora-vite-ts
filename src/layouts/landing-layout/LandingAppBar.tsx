import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import AppBar, { AppBarOwnProps } from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThemeToggler from 'layouts/main-layout/common/ThemeToggler';
import SearchBox, { SearchBoxButton } from 'layouts/main-layout/common/search-box/SearchBox';
import { useBreakpoints } from 'providers/BreakpointsProvider';
import Logo from 'components/common/Logo';

gsap.registerPlugin(ScrollTrigger);

const LandingAppBar = (props: AppBarOwnProps) => {
  const { up } = useBreakpoints();
  const upSm = up('sm');
  const upMd = up('md');
  const appBarRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!appBarRef.current) return;

    gsap.fromTo(
      appBarRef.current,
      {
        '--bg-opacity': 0,
      },
      {
        '--bg-opacity': 1,
        scrollTrigger: {
          trigger: 'body',
          start: 'top top',
          end: '200px top',
          scrub: true,
          invalidateOnRefresh: true,
        },
      },
    );
  }, []);

  return (
    <AppBar
      ref={appBarRef}
      sx={{
        outline: 0,
        bgcolor: 'transparent',
        transition: 'none',
        '--bg-opacity': 0,
        background: ({ vars }) =>
          `rgba(${vars.palette.background.paperChannel} / var(--bg-opacity))`,
      }}
      {...props}
    >
      <Toolbar
        variant="appbarSlim"
        sx={{
          px: { xs: 3, md: 5 },
          maxWidth: 1448,
          mx: 'auto',
          minHeight: 56,
          width: 1,
          justifyContent: 'space-between',
          gap: 2,
        }}
      >
        <Stack gap={{ xs: 1, sm: 2 }} sx={{ flex: 1, alignItems: 'center' }}>
          <Logo showName={upMd} />
          {upSm ? (
            <SearchBox
              sx={{
                width: 1,
                maxWidth: 364,
              }}
            />
          ) : (
            <SearchBoxButton />
          )}
        </Stack>
        <Stack gap={1}>
          <ThemeToggler />
          <Button variant="contained" sx={{ minWidth: 120 }}>
            Log In
          </Button>
          {upSm && (
            <Button variant="soft" sx={{ minWidth: 120 }}>
              Book a Demo
            </Button>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default LandingAppBar;
