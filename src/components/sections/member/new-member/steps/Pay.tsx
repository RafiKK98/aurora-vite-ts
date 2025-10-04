import * as yup from 'yup';

export interface PayFormValues {
  payType: string;
  paySchedule: string;
  salaryRate: string;
}

export const payFormSchema = yup.object().shape({
  payType: yup.string().required(),
  paySchedule: yup.string().required(),
  salaryRate: yup.string().required(),
});

const Pay = () => {
  return <div>Pay</div>;
};

export default Pay;
