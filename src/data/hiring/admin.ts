import { users } from 'data/users';
import { JobOpening, PipelineList } from 'types/hiring';

export const jobOpenings: JobOpening[] = [
  {
    id: 1,
    title: 'Customer Support Manager',
    field: 'Support',
    branch: 'Chicago',
    vacancy: 1,
    candidates: 12,
    hiringLead: 'Mason Rivers',
    tags: [
      {
        label: 'Fulltime',
        color: 'primary',
      },
      {
        label: 'Remote',
        color: 'warning',
      },
      {
        label: 'Day Shift',
        color: 'info',
      },
    ],
    postedDate: '2024-10-23',
  },
  {
    id: 2,
    title: 'Sales Executive',
    field: 'Sales',
    branch: 'UK',
    vacancy: 4,
    candidates: 30,
    hiringLead: 'Oliver Stone',
    tags: [
      {
        label: 'Fulltime',
        color: 'primary',
      },
      {
        label: 'Onsite',
        color: 'warning',
      },
      {
        label: 'Night Shift',
        color: 'info',
      },
    ],
    postedDate: '2024-08-21',
  },
  {
    id: 3,
    title: 'Data Scientist',
    field: 'Data & Analytics',
    branch: 'UK',
    vacancy: 10,
    candidates: 8,
    hiringLead: 'Lucas Grant',
    tags: [
      {
        label: 'Fulltime',
        color: 'primary',
      },
      {
        label: 'Hybrid',
        color: 'warning',
      },
      {
        label: 'Day Shift',
        color: 'info',
      },
    ],
    postedDate: '2024-06-22',
  },
  {
    id: 4,
    title: 'Customer Support Manager',
    field: 'Support',
    branch: 'Chicago',
    vacancy: 1,
    candidates: 12,
    hiringLead: 'Mason Rivers',
    tags: [
      {
        label: 'Contract',
        color: 'primary',
      },
      {
        label: 'Onsite',
        color: 'warning',
      },
    ],
    postedDate: '2024-10-23',
  },
  {
    id: 5,
    title: 'Sales Executive',
    field: 'Sales',
    branch: 'UK',
    vacancy: 4,
    candidates: 30,
    hiringLead: 'Oliver Stone',
    tags: [
      {
        label: 'Parttime',
        color: 'primary',
      },
      {
        label: 'Remote',
        color: 'warning',
      },
    ],
    postedDate: '2024-08-21',
  },
  {
    id: 6,
    title: 'Data Scientist',
    field: 'Data & Analytics',
    branch: 'UK',
    vacancy: 10,
    candidates: 8,
    hiringLead: 'Lucas Grant',
    tags: [
      {
        label: 'Fulltime',
        color: 'primary',
      },
      {
        label: 'Onsite',
        color: 'warning',
      },
      {
        label: 'Day Shift',
        color: 'info',
      },
    ],
    postedDate: '2024-06-22',
  },
  {
    id: 7,
    title: 'Customer Support Manager',
    field: 'Support',
    branch: 'Chicago',
    vacancy: 1,
    candidates: 12,
    hiringLead: 'Mason Rivers',
    tags: [
      {
        label: 'Fulltime',
        color: 'primary',
      },
      {
        label: 'Onsite',
        color: 'warning',
      },
      {
        label: 'Night Shift',
        color: 'info',
      },
    ],
    postedDate: '2024-10-23',
  },
  {
    id: 8,
    title: 'Sales Executive',
    field: 'Sales',
    branch: 'UK',
    vacancy: 4,
    candidates: 30,
    hiringLead: 'Oliver Stone',
    tags: [
      {
        label: 'Parttime',
        color: 'primary',
      },
      {
        label: 'Onsite',
        color: 'warning',
      },
      {
        label: 'Day Shift',
        color: 'info',
      },
    ],
    postedDate: '2024-08-21',
  },
  {
    id: 9,
    title: 'Data Scientist',
    field: 'Data & Analytics',
    branch: 'UK',
    vacancy: 10,
    candidates: 8,
    hiringLead: 'Lucas Grant',
    tags: [
      {
        label: 'Parttime',
        color: 'primary',
      },
      {
        label: 'Remote',
        color: 'warning',
      },
      {
        label: 'Night Shift',
        color: 'info',
      },
    ],
    postedDate: '2024-06-22',
  },
  {
    id: 10,
    title: 'Customer Support Manager',
    field: 'Support',
    branch: 'Chicago',
    vacancy: 1,
    candidates: 12,
    hiringLead: 'Mason Rivers',
    tags: [
      {
        label: 'Parttime',
        color: 'primary',
      },
      {
        label: 'Hybrid',
        color: 'warning',
      },
    ],
    postedDate: '2024-10-23',
  },
  {
    id: 11,
    title: 'Sales Executive',
    field: 'Sales',
    branch: 'UK',
    vacancy: 4,
    candidates: 30,
    hiringLead: 'Oliver Stone',
    tags: [
      {
        label: 'Fulltime',
        color: 'primary',
      },
      {
        label: 'Remote',
        color: 'warning',
      },
      {
        label: 'Day Shift',
        color: 'info',
      },
    ],
    postedDate: '2024-08-21',
  },
  {
    id: 12,
    title: 'Data Scientist',
    field: 'Data & Analytics',
    branch: 'UK',
    vacancy: 10,
    candidates: 8,
    hiringLead: 'Lucas Grant',
    tags: [
      {
        label: 'Contract',
        color: 'primary',
      },
      {
        label: 'Onsite',
        color: 'warning',
      },
    ],
    postedDate: '2024-06-22',
  },
];

export const pipelineData: PipelineList[] = [
  {
    id: 'pipeline-list-1',
    title: 'Applied',
    items: [
      {
        id: 'pipeline-item-1',
        user: users[2],
        rating: 0,
        appliedDate: '2025-03-23',
      },
      {
        id: 'pipeline-item-2',
        user: users[15],
        rating: 0,
        appliedDate: '2025-03-12',
      },
      {
        id: 'pipeline-item-3',
        user: users[13],
        rating: 0,
        appliedDate: '2025-03-14',
      },
      {
        id: 'pipeline-item-4',
        user: users[4],
        rating: 0,
        appliedDate: '2025-02-16',
      },
      {
        id: 'pipeline-item-5',
        user: users[14],
        rating: 0,
        appliedDate: '2025-02-14',
      },
      {
        id: 'pipeline-item-6',
        user: users[12],
        rating: 0,
        appliedDate: '2025-02-14',
        comments: 1,
      },
    ],
  },
  {
    id: 'pipeline-list-2',
    title: 'Reviewed',
    items: [
      {
        id: 'pipeline-item-7',
        user: users[3],
        rating: 3,
        appliedDate: '2025-04-4',
      },
      {
        id: 'pipeline-item-8',
        user: users[2],
        rating: 3,
        appliedDate: '2025-04-3',
      },
      {
        id: 'pipeline-item-9',
        user: users[1],
        rating: 3,
        appliedDate: '2025-04-2',
      },
      {
        id: 'pipeline-item-10',
        user: users[9],
        rating: 3,
        appliedDate: '2025-04-1',
      },
    ],
  },
  {
    id: 'pipeline-list-3',
    title: 'Mobile Screening',
    items: [
      {
        id: 'pipeline-item-11',
        user: users[12],
        rating: 3,
        appliedDate: '2025-04-15',
        comments: 1,
      },
      {
        id: 'pipeline-item-12',
        user: users[10],
        rating: 3,
        appliedDate: '2025-04-5',
      },
      {
        id: 'pipeline-item-13',
        user: users[11],
        rating: 3,
        appliedDate: '2025-04-12',
      },
      {
        id: 'pipeline-item-14',
        user: users[7],
        rating: 3,
        appliedDate: '2025-04-10',
        comments: 1,
      },
    ],
  },
  {
    id: 'pipeline-list-4',
    title: 'Interview',
    items: [
      {
        id: 'pipeline-item-15',
        user: users[5],
        rating: 3,
        appliedDate: '2025-04-13',
      },
      {
        id: 'pipeline-item-16',
        user: users[4],
        rating: 3,
        appliedDate: '2025-04-10',
        comments: 2,
      },
      {
        id: 'pipeline-item-17',
        user: users[15],
        rating: 3,
        appliedDate: '2025-04-5',
      },
      {
        id: 'pipeline-item-18',
        user: users[8],
        rating: 3,
        appliedDate: '2025-04-7',
        comments: 6,
      },
    ],
  },
  {
    id: 'pipeline-list-5',
    title: 'Offer',
    items: [
      {
        id: 'pipeline-item-19',
        user: users[2],
        rating: 3,
        appliedDate: '2025-04-9',
        comments: 4,
      },
      {
        id: 'pipeline-item-20',
        user: users[10],
        rating: 3,
        appliedDate: '2025-04-12',
        comments: 5,
      },
      {
        id: 'pipeline-item-21',
        user: users[3],
        rating: 3,
        appliedDate: '2025-04-8',
        comments: 6,
      },
      {
        id: 'pipeline-item-22',
        user: users[5],
        rating: 3,
        appliedDate: '2025-04-6',
        comments: 3,
      },
    ],
  },
  {
    id: 'pipeline-list-6',
    title: 'Hired',
    items: [
      {
        id: 'pipeline-item-23',
        user: users[13],
        rating: 4,
        appliedDate: '2025-04-11',
        comments: 12,
      },
      {
        id: 'pipeline-item-24',
        user: users[0],
        rating: 4,
        appliedDate: '2025-04-14',
        comments: 10,
      },
    ],
  },
];
