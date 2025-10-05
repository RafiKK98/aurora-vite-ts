import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { AddressFormValues, addressFormSchema } from './steps/Address';
import { ContractFormValues, contractFormSchema } from './steps/Contract';
import { JobInformationFormValues, jobInformationFormSchema } from './steps/JobInformation';
import { PayFormValues, payFormSchema } from './steps/Pay';
import {
  PersonalInformationFormValues,
  personalInformationFormSchema,
} from './steps/PersonalInformation';

export interface NewMemberFormValues
  extends PersonalInformationFormValues,
    JobInformationFormValues,
    AddressFormValues,
    ContractFormValues,
    PayFormValues {}

export const newMemberFormSchema = [
  personalInformationFormSchema,
  jobInformationFormSchema,
  addressFormSchema,
  contractFormSchema,
  payFormSchema,
] as yup.ObjectSchema<NewMemberFormValues>[];

const useNewMemberForm = (activeStep: number) => {
  const methods = useForm<NewMemberFormValues>({
    resolver: newMemberFormSchema[activeStep]
      ? yupResolver(newMemberFormSchema[activeStep])
      : undefined,
    defaultValues: {
      // ...personalInformation,
      // ...jobInformation,
      // ...address,
      // ...contract,
      // ...pay,
    },
  });

  return methods;
};

export default useNewMemberForm;

// const personalInformation: Partial<PersonalInformationFormValues> = {
//   avatar: '',
//   firstName: '',
//   lastName: '',
//   displayName: '',
//   IDNo: '',
//   birthday: dayjs().format(),
//   religion: 'Islam',
//   gender: 'Male',
//   maritalStatus: 'Single',
// };

// const jobInformation: Partial<JobInformationFormValues> = {
//   designation: '',
//   joiningDate: dayjs().format(),
//   department: '',
//   team: '',
//   branch: '',
//   shift: '',
//   supervisor: '',
//   employmentStatus: '',
//   employmentType: 'In Office',
// };

// const address: Partial<AddressFormValues> = {
//   permanent: {
//     country: '',
//     state: '',
//     city: '',
//     street: '',
//     zip: '',
//   },
//   present: {
//     country: '',
//     state: '',
//     city: '',
//     street: '',
//     zip: '',
//   },
// };

// const contract: Partial<ContractFormValues> = {
//   email: '',
//   phoneNo: '',
// };

// const pay: Partial<PayFormValues> = {
//   payType: '',
//   paySchedule: dayjs().format(),
//   salaryRate: '',
// };
