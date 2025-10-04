import * as yup from 'yup';

export interface ContractFormValues {
  email: string;
  phoneNo: string;
}

export const contractFormSchema = yup.object().shape({
  email: yup.string().email('Invalid email format').required('This field is required'),
  phoneNo: yup.string().required('This field is required'),
});

const Contract = () => {
  return <div>Contract</div>;
};

export default Contract;
