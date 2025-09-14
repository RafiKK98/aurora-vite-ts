import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export interface JobApplicationFormValues {
  personalInfo: {
    basic: {
      avatar: File | string;
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      currentAddress: string;
      permanentAddress: string;
    };
    education: {
      institutionName: string;
      degree: string;
      location: string;
      timePeriod: (Date | null)[];
    }[];
    experience: {
      institutionName: string;
      position: string;
      location: string;
      timePeriod: (Date | null)[];
    }[];
    additionalInfo: {
      desiredSalary: number;
      refferedBy: string;
      website: string;
    };
  };
  documents: {
    resume: { id: string; file: File }[];
    coverLetter: { id: string; file: File }[];
  };
  questionaries: {
    preScreen: {
      applyingReason: string;
      greatestStrengths: string;
      workPreference: 'independent' | 'collaborative' | 'clear-deadline' | 'creative-freedom';
      remoteWork: 'yes' | 'no';
    };
    videoResponse: {
      strengthsAndWeaknesses: { id: string; file: File }[];
      applyingReason: { id: string; file: File }[];
    };
  };
}

export const jobApplicationFormSchema: yup.ObjectSchema<JobApplicationFormValues> = yup.object({
  personalInfo: yup
    .object({
      basic: yup
        .object({
          avatar: yup.mixed<File>().required('Avatar is required'),
          firstName: yup.string().required('First name is required'),
          lastName: yup.string().required('Last name is required'),
          email: yup.string().email('Invalid email').required('Email is required'),
          phone: yup.string().required('Phone number is required'),
          currentAddress: yup.string().required('Current address is required'),
          permanentAddress: yup.string().required('Permanent address is required'),
        })
        .required(),

      education: yup
        .array()
        .of(
          yup
            .object({
              institutionName: yup.string().required('Institution name is required'),
              degree: yup.string().required('Degree is required'),
              location: yup.string().required('Location is required'),
              timePeriod: yup
                .array()
                .of(yup.date().nullable().required())
                .length(2, 'Both start and end dates are required')
                .required('Please select a date range')
                .test('both-dates-present', 'Both start and end dates are required', (value) => {
                  return Array.isArray(value) && value[0] !== null && value[1] !== null;
                }),
            })
            .required(),
        )
        .required(),

      experience: yup
        .array()
        .of(
          yup
            .object({
              institutionName: yup.string().required('Institution name is required'),
              position: yup.string().required('Degree is required'),
              location: yup.string().required('Location is required'),
              timePeriod: yup
                .array()
                .of(yup.date().nullable().required())
                .length(2, 'Both start and end dates are required')
                .required('Please select a date range')
                .test('both-dates-present', 'Both start and end dates are required', (value) => {
                  return Array.isArray(value) && value[0] !== null && value[1] !== null;
                }),
            })
            .required(),
        )
        .required(),

      additionalInfo: yup
        .object({
          desiredSalary: yup
            .number()
            .typeError('Salary must be a number')
            .positive('Salary must be greater than 0')
            .required('Salary is required'),
          refferedBy: yup.string().required('Reffered by is required'),
          website: yup.string().required('Website is required'),
        })
        .required(),
    })
    .required(),

  documents: yup
    .object({
      resume: yup
        .array()
        .of(
          yup
            .object({
              id: yup.string().required(),
              file: yup.mixed<File>().required(),
            })
            .required(),
        )
        .min(1, 'Resume is required')
        .required(),
      coverLetter: yup
        .array()
        .of(
          yup
            .object({
              id: yup.string().required(),
              file: yup.mixed<File>().required(),
            })
            .required(),
        )
        .required(),
    })
    .required(),

  questionaries: yup
    .object({
      preScreen: yup
        .object({
          applyingReason: yup.string().required('Applying reason is required'),
          greatestStrengths: yup.string().required('Greatest strengths is required'),
          workPreference: yup
            .string()
            .oneOf(
              ['independent', 'collaborative', 'clear-deadline', 'creative-freedom'],
              'Invalid work preference',
            )
            .required('Work preference is required'),
          remoteWork: yup.string().oneOf(['yes', 'no']).required(),
        })
        .required(),
      videoResponse: yup
        .object({
          strengthsAndWeaknesses: yup
            .array()
            .of(
              yup
                .object({
                  id: yup.string().required(),
                  file: yup.mixed<File>().required(),
                })
                .required(),
            )
            .required(),
          applyingReason: yup
            .array()
            .of(
              yup
                .object({
                  id: yup.string().required(),
                  file: yup.mixed<File>().required(),
                })
                .required(),
            )
            .required(),
        })
        .required(),
    })
    .required(),
});

const useJobApplicationForm = () => {
  const methods = useForm<JobApplicationFormValues>({
    resolver: yupResolver(jobApplicationFormSchema),
    defaultValues: {
      personalInfo: {
        education: [{}, {}],
        experience: [{}, {}],
      },
    },
  });
  return { methods };
};

export default useJobApplicationForm;
