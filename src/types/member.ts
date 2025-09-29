export type Member = {
  avatar: string;
  id: string;
  name: string;
  email: string;
  phone: string;
  job: {
    title: string;
    team: string;
    status: 'Active' | 'Resigned' | 'Intern' | 'Contract' | 'Probation';
    hiredDate: string;
  };
  city: string;
};
