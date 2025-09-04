import { Ref } from 'react';
import { Stack } from '@mui/material';
import { useBreakpoints } from 'providers/BreakpointsProvider';
import Logo from 'components/common/Logo';
import MobileNav from './MobileNav';

interface HeaderBrandProps {
  logoRef: Ref<HTMLDivElement>;
}

const HeaderBrand = ({ logoRef }: HeaderBrandProps) => {
  const { up } = useBreakpoints();
  const upMd = up('md');
  const upSm = up('sm');

  return (
    <Stack gap={1.5} alignItems="center" ref={logoRef}>
      {!upMd && <MobileNav />}

      <Logo
        showName={upSm}
        sx={{
          '& + p': {
            background: 'none !important',
            WebkitTextFillColor: ({ vars }) => `${vars.palette.common.white} !important`,
          },
        }}
      />
    </Stack>
  );
};

export default HeaderBrand;
