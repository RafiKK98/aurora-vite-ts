import { JSX, useState } from 'react';
import { FormProvider } from 'react-hook-form';
import { useNavigate } from 'react-router';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import StepContent from '@mui/material/StepContent';
import { stepLabelClasses } from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import { useSnackbar } from 'notistack';
import IconifyIcon from 'components/base/IconifyIcon';
import useNewOpeningForm from 'components/sections/hiring/admin/new-opening/useNewOpeningForm';
import Address from './steps/Address';
import Contract from './steps/Contract';
import JobInformation from './steps/JobInformation';
import Pay from './steps/Pay';
import PersonalInformation from './steps/PersonalInformation';

interface Step {
  label: string;
  content: JSX.Element;
}

const steps: Step[] = [
  {
    label: 'Personal Information',
    content: <PersonalInformation />,
  },
  {
    label: 'Job Information',
    content: <JobInformation />,
  },
  {
    label: 'Address',
    content: <Address />,
  },
  {
    label: 'Contract',
    content: <Contract />,
  },
  {
    label: 'Pay',
    content: <Pay />,
  },
];

const NewMemberStepper = () => {
  const _navigate = useNavigate();

  const [activeStep, setActiveStep] = useState<number>(0);
  const [completedSteps, setCompletedSteps] = useState<boolean[]>([]);
  const { enqueueSnackbar } = useSnackbar();

  const methods = useNewOpeningForm(activeStep);

  const { handleSubmit, trigger, watch } = methods;

  const data = watch();

  const handleNextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);

  const handlePreviousStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const onSubmit = handleSubmit((data) => {
    console.log({ data, activeStep });
    enqueueSnackbar('Job posted successfully', { variant: 'success', autoHideDuration: 3000 });
    //   navigate(paths.hiringJobOpening);
  });

  const handleProceed = async () => {
    const isValid = await trigger();
    console.log({ data, isValid, activeStep });

    if (isValid) {
      setCompletedSteps((prevCompletedSteps) => {
        const newCompleted = [...prevCompletedSteps];
        newCompleted[activeStep] = true;

        return newCompleted;
      });
      handleNextStep();
    }
  };

  return (
    <FormProvider {...methods}>
      <Box component="form" id="newOpeningForm" noValidate onSubmit={onSubmit}>
        <Stepper
          activeStep={activeStep}
          nonLinear
          connector={<Divider />}
          orientation="vertical"
          sx={{ gap: 4 }}
        >
          {steps.map((step, index) => {
            const isLastStep = activeStep === steps.length - 1;
            return (
              <Step key={step.label} completed={completedSteps[index]}>
                <StepButton
                  onClick={() => setActiveStep(index)}
                  sx={{
                    py: 0,
                    [`& .${stepLabelClasses.iconContainer}`]: {
                      pr: 2,
                      py: 0.5,
                      alignSelf: 'flex-start',
                    },
                  }}
                >
                  <Typography variant="h6" lineHeight={1.5}>
                    {step.label}
                  </Typography>
                </StepButton>
                <StepContent sx={{ border: 'none', m: 0, pl: { xs: 0, sm: 5 }, pr: 0 }}>
                  <Typography variant="body2" color="info">
                    Please fill out all the required fields to continue.
                  </Typography>
                  <Box
                    sx={{
                      my: 3,
                    }}
                  >
                    {step.content}
                  </Box>

                  <Stack
                    sx={[
                      {
                        rowGap: 5,
                        columnGap: 1,
                        width: 1,
                        justifyContent: 'flex-end',
                      },
                      isLastStep && { flexDirection: { xs: 'column', sm: 'row' } },
                    ]}
                  >
                    {activeStep !== 0 && (
                      <Button
                        type="button"
                        variant="soft"
                        color="neutral"
                        sx={{ alignSelf: 'flex-start' }}
                        onClick={handlePreviousStep}
                      >
                        Previous
                      </Button>
                    )}
                    {!isLastStep ? (
                      <Button
                        type="button"
                        variant="soft"
                        onClick={(e) => {
                          e.preventDefault();
                          handleProceed();
                        }}
                        endIcon={<IconifyIcon icon="material-symbols:chevron-right-rounded" />}
                      >
                        Continue
                      </Button>
                    ) : (
                      <Button
                        form="newOpeningForm"
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{ whiteSpace: 'nowrap' }}
                      >
                        Save
                      </Button>
                    )}
                  </Stack>
                </StepContent>
              </Step>
            );
          })}
        </Stepper>
      </Box>
    </FormProvider>
  );
};

export default NewMemberStepper;
