import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { memberProfile } from 'data/member';
import dayjs from 'dayjs';

const PersonalTab = (props: (typeof memberProfile)['details']['personal']) => {
  const { overview, education, experiences } = props;
  return (
    <Grid container spacing={{ xs: 3, md: 5 }}>
      <Grid size={{ xs: 12, md: 8 }}>
        <PersonalTabMain experiences={experiences} education={education} />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <PersonalTabAside {...overview} />
      </Grid>
    </Grid>
  );
};

export default PersonalTab;

const PersonalTabMain = ({
  experiences,
  education,
}: {
  experiences: (typeof memberProfile)['details']['personal']['experiences'];
  education: (typeof memberProfile)['details']['personal']['education'];
}) => {
  return (
    <Stack direction="column" gap={3} sx={{ py: 3 }}>
      <Stack direction="column" gap={2} sx={{ pr: 3 }}>
        <Typography variant="subtitle1" fontWeight={600}>
          Experiences
        </Typography>
        <Stack direction="column" gap={3}>
          {experiences.map((experience, index) => (
            <Stack key={index} gap={2} alignItems="flex-start">
              <Avatar
                src={experience.logo}
                sx={{ width: 40, height: 40, bgcolor: 'transparent' }}
              />
              <Stack direction="column" gap={1}>
                <Typography variant="subtitle2">
                  <Box component="span" fontWeight={700}>
                    {experience.designation}
                  </Box>
                  <Box component="span" fontWeight={400}>
                    {` `}at{` `}
                  </Box>
                  <Box component="span" fontWeight={700}>
                    {experience.company}
                  </Box>
                </Typography>
                <Typography variant="subtitle2" fontWeight={400} color="textSecondary">
                  {experience.location}
                </Typography>
                <Typography variant="subtitle2" fontWeight={700} color="textSecondary">
                  {experience.startDate} - {experience.endDate}
                </Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>
      <Stack direction="column" gap={2} sx={{ pr: 3 }}>
        <Typography variant="subtitle1" fontWeight={600}>
          Education
        </Typography>
        <Stack direction="column" gap={3}>
          {education.map((education, index) => (
            <Stack key={index} gap={2} alignItems="flex-start">
              <Avatar src={education.logo} sx={{ width: 40, height: 40, bgcolor: 'transparent' }} />
              <Stack direction="column" gap={1}>
                <Typography variant="subtitle2">
                  <Box component="span" fontWeight={400}>
                    Studied at{` `}
                  </Box>
                  <Box component="span" fontWeight={700}>
                    {education.institute}
                  </Box>
                </Typography>
                <Typography variant="subtitle2" fontWeight={400} color="textSecondary">
                  {education.location}
                </Typography>
                <Typography variant="subtitle2" fontWeight={700} color="textSecondary">
                  {education.startDate} - {education.endDate}
                </Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

const PersonalTabAside = (props: (typeof memberProfile)['details']['personal']['overview']) => {
  const {
    fullName,
    nationality,
    gender,
    permanentAddress,
    birthday,
    maritalStatus,
    religion,
    presentAddress,
  } = props;
  return (
    <Paper background={1} sx={{ height: 1, outline: 0, p: 3, borderRadius: 4 }}>
      <Stack direction="column" gap={3}>
        <Stack direction="column" gap={2}>
          <Stack direction="column" gap={0.5}>
            <Typography variant="subtitle2" fontWeight={400} color="textSecondary">
              Full Name
            </Typography>
            <Typography variant="subtitle2" fontWeight={600}>
              {fullName}
            </Typography>
          </Stack>
          <Stack direction="column" gap={0.5}>
            <Typography variant="subtitle2" fontWeight={400} color="textSecondary">
              Nationality
            </Typography>
            <Typography variant="subtitle2" fontWeight={600}>
              {nationality}
            </Typography>
          </Stack>
          <Stack direction="column" gap={0.5}>
            <Typography variant="subtitle2" fontWeight={400} color="textSecondary">
              Gender
            </Typography>
            <Typography variant="subtitle2" fontWeight={600}>
              {gender}
            </Typography>
          </Stack>
          <Stack direction="column" gap={0.5}>
            <Typography variant="subtitle2" fontWeight={400} color="textSecondary">
              Permanent Address
            </Typography>
            <Typography variant="subtitle2" fontWeight={600}>
              {permanentAddress}
            </Typography>
          </Stack>
        </Stack>
        <Stack direction="column" gap={2}>
          <Stack direction="column" gap={0.5}>
            <Typography variant="subtitle2" fontWeight={400} color="textSecondary">
              Birthday
            </Typography>
            <Typography variant="subtitle2" fontWeight={600}>
              {dayjs(birthday).format('DD MMM, YYYY')}
            </Typography>
          </Stack>
          <Stack direction="column" gap={0.5}>
            <Typography variant="subtitle2" fontWeight={400} color="textSecondary">
              Marital Status
            </Typography>
            <Typography variant="subtitle2" fontWeight={600}>
              {maritalStatus}
            </Typography>
          </Stack>
          <Stack direction="column" gap={0.5}>
            <Typography variant="subtitle2" fontWeight={400} color="textSecondary">
              Religion
            </Typography>
            <Typography variant="subtitle2" fontWeight={600}>
              {religion}
            </Typography>
          </Stack>
          <Stack direction="column" gap={0.5}>
            <Typography variant="subtitle2" fontWeight={400} color="textSecondary">
              Present Address
            </Typography>
            <Typography variant="subtitle2" fontWeight={600}>
              {presentAddress}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
};
