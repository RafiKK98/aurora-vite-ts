import { PropsWithChildren } from 'react';
import { Button, ButtonProps, Link } from '@mui/material';
import { cssVarRgba } from 'lib/utils';

interface NeutralButtonProps extends ButtonProps {
  active?: boolean;
}

const NeutralButton = ({
  active,
  children,
  ref,
  ...props
}: PropsWithChildren<NeutralButtonProps>) => {
  return (
    <Button
      {...props}
      ref={ref}
      LinkComponent={Link}
      sx={[
        {
          color: 'common.white',
          opacity: active ? 1 : 0.5,
          bgcolor: ({ vars }) => cssVarRgba(vars.palette.common.whiteChannel, 0.16),
          backdropFilter: 'blur(4px)',

          '&:hover': {
            opacity: 1,
            bgcolor: ({ vars }) =>
              `${cssVarRgba(vars.palette.common.whiteChannel, 0.26)} !important`,
          },
        },

        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    >
      {children}
    </Button>
  );
};

export default NeutralButton;
