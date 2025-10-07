import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Banner from 'components/sections/member/profile/Banner';
import Content from 'components/sections/member/profile/content';

const MemberProfile = () => {
  return (
    <Paper sx={{ p: { xs: 3, md: 5 }, height: 1 }}>
      <Container disableGutters maxWidth="md">
        <Banner />

        <Content sx={{ mt: '-26px', zIndex: 1, position: 'relative' }} />
      </Container>
    </Paper>
  );
};

export default MemberProfile;
