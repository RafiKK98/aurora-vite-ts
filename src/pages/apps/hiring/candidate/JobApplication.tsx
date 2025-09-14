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
    <Box sx={{ height: 1, px: { xs: 3, md: 5 }, py: 5 }}>
      <Container maxWidth="sm" disableGutters sx={{ height: 1 }}>
        <Stack direction="column" gap={4} height={1}>
          <Typography variant="h4">Job Application</Typography>
          <FormProvider {...methods}>
            <Stack
              component="form"
              id="jobApplicationFrom"
              onSubmit={handleSubmit(onSubmit)}
              direction="column"
              gap={2}
              height={1}
            >
              <PersonalInformation />
              <Documents />
              <Questionaries />
              <ActionBtns />
            </Stack>
          </FormProvider>
        </Stack>
      </Container>
    </Box>
  );
};

export default JobApplication;
