import Box from '@mui/material/Box';
import { type SxProps, type Theme } from '@mui/material/styles';
import Image, { ThemeAwareImageSource } from 'components/base/Image';

interface ShowcaseItemImgProps {
  src: string | ThemeAwareImageSource;
  sx?: SxProps<Theme>;
}

const ShowcaseItemImg = ({ src, sx }: ShowcaseItemImgProps) => {
  return (
    <Box className="media" sx={{ flex: '1 1 50%', overflow: 'hidden', ...sx }}>
      <Image src={src} sx={{ height: 1, width: 1, objectFit: 'cover', verticalAlign: 'middle' }} />
    </Box>
  );
};

export default ShowcaseItemImg;
