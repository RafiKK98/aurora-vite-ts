import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { cssVarRgba } from 'lib/utils';
import { useSettingsContext } from 'providers/SettingsProvider';

interface StripedBackgroundProps {
  direction?: string;
  baseColor?: string;
  fadeWidth?: string;
}

/**
 * params
 * @param {string} direction   default '-45deg'
 * @param {string} baseColor   default 'transparent'
 * @param {string} fadeWidth   default '48px'  (left/right fade size)
 */
export const StripedBackground = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== 'direction' && prop !== 'stripeColor' && prop !== 'baseColor' && prop !== 'fadeWidth',
})<StripedBackgroundProps>(({
  theme,
  direction = '-45deg',
  baseColor = 'transparent',
  fadeWidth = '20%',
}) => {
  const {
    config: { textDirection },
  } = useSettingsContext();

  return {
    background: `repeating-linear-gradient(
      ${textDirection === 'rtl' ? direction.replace('-', '') : direction},
      ${baseColor},
      ${baseColor} 5px,
      ${cssVarRgba(theme.vars.palette.dividerChannel, 0.4)} 5px,
      ${cssVarRgba(theme.vars.palette.dividerChannel, 0.4)} 7px
    )`,
    maskImage: `linear-gradient(
      to right,
      transparent 0,
      black ${fadeWidth},
      black calc(100% - ${fadeWidth}),
      transparent 100%
    )`,
    WebkitMaskImage: `linear-gradient(
      to right,
      transparent 0,
      black ${fadeWidth},
      black calc(100% - ${fadeWidth}),
      transparent 100%
    )`,
    maskSize: '100% 100%',
    WebkitMaskSize: '100% 100%',
    maskRepeat: 'no-repeat',
    WebkitMaskRepeat: 'no-repeat',
  };
});
