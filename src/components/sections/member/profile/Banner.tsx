import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { memberProfile } from 'data/member';
import IconifyIcon from 'components/base/IconifyIcon';
import Image from 'components/base/Image';

const Banner = () => {
  return (
    <Figure sx={{ maxHeight: 200 }}>
      <Image src={memberProfile.profileInfo.coverPhoto} sx={{ width: 1, height: 1 }} />
      <Button shape="square" color="neutral" sx={{ position: 'absolute', top: 24, right: 24 }}>
        <IconifyIcon icon="material-symbols:edit-outline-rounded" sx={{ fontSize: 20 }} />
      </Button>
    </Figure>
  );
};

export default Banner;

const Figure = styled('figure')(({ theme }) => ({
  width: '100%',
  height: '100%',
  borderRadius: Number(theme.shape.borderRadius) * 6,
  overflow: 'hidden',
  margin: 0,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
}));
