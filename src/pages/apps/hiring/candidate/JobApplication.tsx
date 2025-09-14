import { FormProvider, SubmitHandler } from 'react-hook-form';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ActionBtns from 'components/sections/hiring/candidate/job-application/ActionBtns';
import Documents from 'components/sections/hiring/candidate/job-application/documents';
import PersonalInformation from 'components/sections/hiring/candidate/job-application/personal-information';
import Questionaries from 'components/sections/hiring/candidate/job-application/questionaries';
import useJobApplicationForm, {
  JobApplicationFormValues,
} from 'components/sections/hiring/candidate/job-application/useJobApplicationForm';

const JobApplication = () => {
  const { methods } = useJobApplicationForm();
  const { handleSubmit, reset } = methods;

  const onSubmit: SubmitHandler<JobApplicationFormValues> = (data) => {
    console.log(data);
    reset();
  };
  return (
    <Box sx={{ px: { xs: 3, md: 5 }, py: 5 }}>
      <Container maxWidth="sm" disableGutters>
        <Typography variant="h4" sx={{ mb: 4 }}>
          Job Application
        </Typography>
        <FormProvider {...methods}>
          <Stack
            component="form"
            id="jobApplicationFrom"
            onSubmit={handleSubmit(onSubmit)}
            direction="column"
            gap={2}
          >
            <PersonalInformation />
            <Documents />
            <Questionaries />
            <ActionBtns />
          </Stack>
        </FormProvider>
      </Container>
    </Box>
  );
};

export default JobApplication;
