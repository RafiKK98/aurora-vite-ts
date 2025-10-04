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
      //   jobInformation,
      //   candidateData,
      //   options,
      //   hiringManager,
      //   teamMember,
      //   boards,
    },
  });

  return methods;
};

export default useNewMemberForm;
