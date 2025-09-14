import { ChipProps } from '@mui/material/Chip';
import { User } from './users';

// Dashboard
export type KPI = {
  title: string;
  subTitle: string;
  value: string | number;
  icon: string;
};

export type CandidateSource = {
  name: string;
  value: number;
};

export type Position = {
  title: string;
  field: string;
  location: string;
  users: User[];
  status: {
    text: string;
    color: ChipProps['color'];
  };
};

export type NewHire = User & {
  designation: string;
  location: string;
  joiningDate: string;
};

export type Meeting = {
  type: string;
  title: string;
  time: string;
  duration: string;
  chip: {
    icon: string;
    color: 'primary' | 'success' | 'secondary' | 'error' | 'info' | 'warning' | 'default';
  };
};

export type PipelineRow = {
  id: number | string;
  jobPosition: {
    title: string;
    field: string;
  };
  vacancy: number;
  hiringManager: User;
  applied: number | null;
  reviewed: number | null;
  mobileScreen: number | null;
  interview: number | null;
  offer: number | null;
  hired: number | null;
  rejected: number | null;
};

// Candidate
export type Job = {
  id: number | string;
  title: string;
  company: {
    name: string;
    logo: string;
    type: string;
    employees: number;
    desc: string;
  };
  overview: {
    location: string;
    employmentType: 'Fulltime' | 'Parttime' | 'Contract';
    workMode: 'Hybrid' | 'Remote' | 'On-site';
    offeredSalary: number;
    experience: number;
    postedDate: string;
    deadline: string;
  };
  details: {
    aboutRole: string;
    responsibilities: string[];
    requirements: string[];
    bonusPoints: string[];
    benefits: string[];
  };
};
