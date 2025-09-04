import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import member1 from 'assets/images/sections/misc/landing/team/1.webp';
import member2 from 'assets/images/sections/misc/landing/team/2.webp';
import member3 from 'assets/images/sections/misc/landing/team/3.webp';
import member4 from 'assets/images/sections/misc/landing/team/4.webp';
import member5 from 'assets/images/sections/misc/landing/team/5.webp';
import member6 from 'assets/images/sections/misc/landing/team/6.webp';
import member7 from 'assets/images/sections/misc/landing/team/7.webp';
import member8 from 'assets/images/sections/misc/landing/team/8.webp';
import member9 from 'assets/images/sections/misc/landing/team/9.webp';
import { useBreakpoints } from 'providers/BreakpointsProvider';
import Image from 'components/base/Image';
import SectionHeader from '../common/SectionHeader';

const members = [
  { id: 1, name: 'Madeline Wuntch', designation: 'CEO & Founder', image: member1 },
  { id: 2, name: 'Sophia Perez', designation: 'Lead Developer', image: member2 },
  { id: 3, name: 'Terry Jeffords', designation: 'Product Manager', image: member3 },
  { id: 4, name: 'Jake Peralta', designation: 'UI/UX Designer', image: member4 },
  { id: 5, name: 'Amy Santiago', designation: 'Backend Engineer', image: member5 },
  { id: 6, name: 'Rosa Diaz', designation: 'DevOps Engineer', image: member6 },
  { id: 7, name: 'Gina Linetti', designation: 'Marketing Director', image: member7 },
  { id: 8, name: 'Raymond Holt', designation: 'CTO', image: member8 },
  { id: 9, name: 'Charles Boyle', designation: 'QA Engineer', image: member9 },
];

const Team = () => {
  const { up } = useBreakpoints();
  const upSm = up('md');
  return (
    <Box sx={{ px: { xs: 3, md: 5 } }}>
      <Container maxWidth={false} sx={{ maxWidth: 946, px: { xs: 0 } }}>
        <Stack direction="column" gap={3} py={5}>
          <SectionHeader subtitle="Our brilliant teammates" title="TEAM" />

          {upSm ? (
            <Grid
              container
              columns={5}
              spacing={{ xs: 2, md: 3 }}
              sx={{ display: { xs: 'none', sm: 'flex' } }}
            >
              <Grid size={1} container sx={{ placeContent: 'center' }}>
                <Grid size={12}>
                  <Member member={members[0]} />
                </Grid>
              </Grid>
              <Grid size={1} container sx={{ placeContent: 'center' }} columnSpacing={4}>
                <Grid size={12}>
                  <Member member={members[1]} />
                </Grid>
                <Grid size={12}>
                  <Member member={members[2]} />
                </Grid>
              </Grid>
              <Grid size={1} container sx={{ placeContent: 'center' }} columnSpacing={4}>
                <Grid size={12}>
                  <Member member={members[3]} />
                </Grid>
                <Grid size={12}>
                  <Member member={members[4]} />
                </Grid>
                <Grid size={12}>
                  <Member member={members[5]} />
                </Grid>
              </Grid>
              <Grid size={1} container sx={{ placeContent: 'center' }} columnSpacing={4}>
                <Grid size={12}>
                  <Member member={members[6]} />
                </Grid>
                <Grid size={12}>
                  <Member member={members[7]} />
                </Grid>
              </Grid>
              <Grid size={1} container sx={{ placeContent: 'center' }} columnSpacing={4}>
                <Grid size={12}>
                  <Member member={members[8]} />
                </Grid>
              </Grid>
            </Grid>
          ) : (
            <Grid
              container
              columns={3}
              columnSpacing={{ xs: 1, sm: 3 }}
              rowSpacing={{ xs: 3, sm: 4 }}
            >
              {members.map((member) => (
                <Grid size={1} key={member.id}>
                  <Member member={member} />
                </Grid>
              ))}
            </Grid>
          )}
        </Stack>
      </Container>
    </Box>
  );
};

const Member = ({ member }: { member: (typeof members)[0] }) => {
  return (
    <Box sx={{ width: 1 }}>
      <Box
        sx={{
          position: 'relative',
          width: 1,
          aspectRatio: '17 / 25',
          borderRadius: 4,
          overflow: 'hidden',
          bgcolor: 'background.elevation1',
          mb: 2,
        }}
      >
        <Image
          src={member.image}
          alt={member.name}
          sx={{
            width: 1,
            height: 1,
            filter: 'grayscale(100%)',
            transition: (theme) =>
              theme.transitions.create('filter', {
                duration: theme.transitions.duration.standard,
              }),
            '&:hover': {
              filter: 'grayscale(0%)',
            },
          }}
        />

        <Box
          sx={{
            position: 'absolute',
            width: 1,
            height: 1,
            left: 0,
            bottom: 0,
            pointerEvents: 'none',
            userSelect: 'none',
            background: (theme) =>
              `/* @noflip */ linear-gradient(to bottom, transparent 70%, ${theme.vars.palette.background.elevation1})`,
          }}
        />
      </Box>

      <Stack gap={0.5} direction="column" alignItems="center">
        <Typography
          variant="subtitle2"
          fontWeight={700}
          sx={{ fontSize: { xs: '10px', sm: '14px' } }}
        >
          {member.name}
        </Typography>
        <Typography
          variant="subtitle2"
          color="text.secondary"
          sx={{ fontSize: { xs: '8px', sm: '14px' } }}
        >
          {member.designation}
        </Typography>
      </Stack>
    </Box>
  );
};

export default Team;
