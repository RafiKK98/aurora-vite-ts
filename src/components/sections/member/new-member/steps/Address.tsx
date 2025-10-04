import * as yup from 'yup';

export interface AddressFormValues {
  permanent: {
    country: string;
    state: string;
    city: string;
    street: string;
    zip: string;
  };
  present: {
    country: string;
    state: string;
    city: string;
    street: string;
    zip: string;
  };
}

export const addressFormSchema = yup.object().shape({
  permanent: yup.object().shape({
    country: yup.string().required('This field is required'),
    state: yup.string().required('This field is required'),
    city: yup.string().required('This field is required'),
    street: yup.string().required('This field is required'),
    zip: yup.string().required('This field is required'),
  }),
  present: yup.object().shape({
    country: yup.string().required('This field is required'),
    state: yup.string().required('This field is required'),
    city: yup.string().required('This field is required'),
    street: yup.string().required('This field is required'),
    zip: yup.string().required('This field is required'),
  }),
});

const Address = () => {
  return <div>Address</div>;
};

export default Address;
