import avatar1 from 'assets/images/avatar/avatar_1.webp';
import avatar4 from 'assets/images/avatar/avatar_4.webp';
import avatar5 from 'assets/images/avatar/avatar_5.webp';
import avatar6 from 'assets/images/avatar/avatar_6.webp';
import avatar9 from 'assets/images/avatar/avatar_9.webp';
import Logo from 'assets/images/logo/Uploader.webp';
import ThemewagonLogo from 'assets/images/logo/themewagon_logo.webp';
import {
  InvoiceHistoryItem,
  InvoicePreviewItem,
  InvoiceTableRow,
  RecipientItem,
} from 'types/invoice';
import { users } from './users';

export const invoiceListTableRowData: InvoiceTableRow[] = [
  {
    id: '212440',
    client: users[0],
    issueDate: {
      date: '2025-3-19',
      time: '1:10 PM',
    },
    status: 'sent',
    paymentDate: '2025-3-22',
    requiredAmount: 210,
    paidAmount: 0,
  },
  {
    id: '212441',
    client: users[1],
    issueDate: {
      date: '2025-2-5',
      time: '4:20 PM',
    },
    status: 'paid',
    paymentDate: '2025-2-15',
    requiredAmount: 210,
    paidAmount: 210,
  },
  {
    id: '212442',
    client: users[2],
    issueDate: {
      date: '2025-2-20',
      time: '12:10 PM',
    },
    status: 'late',
    paymentDate: '2025-3-22',
    requiredAmount: 210,
    paidAmount: 0,
  },
  {
    id: '212443',
    client: users[3],
    issueDate: {
      date: '2025-2-10',
      time: '2:10 PM',
    },
    status: 'draft',
    paymentDate: '2025-3-22',
    requiredAmount: 210,
    paidAmount: 110,
  },
  {
    id: '212444',
    client: users[4],
    issueDate: {
      date: '2025-3-22',
      time: '3:15 PM',
    },
    status: 'sent',
    paymentDate: '2025-3-22',
    requiredAmount: 210,
    paidAmount: 210,
  },
  {
    id: '212445',
    client: users[5],
    issueDate: {
      date: '2025-3-25',
      time: '10:10 AM',
    },
    status: 'paid',
    paymentDate: '2025-3-1',
    requiredAmount: 210,
    paidAmount: 210,
  },
  {
    id: '212446',
    client: users[6],
    issueDate: {
      date: '2025-1-10',
      time: '11:20 PM',
    },
    status: 'sent',
    paymentDate: '2025-3-22',
    requiredAmount: 210,
    paidAmount: 210,
  },
  {
    id: '212447',
    client: users[7],
    issueDate: {
      date: '2025-1-10',
      time: '11:20 PM',
    },
    status: 'sent',
    paymentDate: '2025-3-22',
    requiredAmount: 210,
    paidAmount: 210,
  },
  {
    id: '212448',
    client: users[8],
    issueDate: {
      date: '2025-2-18',
      time: '03:45 PM',
    },
    status: 'draft',
    paymentDate: '2025-4-10',
    requiredAmount: 350,
    paidAmount: 100,
  },
  {
    id: '212449',
    client: users[9],
    issueDate: {
      date: '2025-3-5',
      time: '09:10 AM',
    },
    status: 'late',
    paymentDate: '2025-3-25',
    requiredAmount: 500,
    paidAmount: 0,
  },
  {
    id: '212450',
    client: users[10],
    issueDate: {
      date: '2025-4-1',
      time: '12:30 PM',
    },
    status: 'sent',
    paymentDate: '2025-5-15',
    requiredAmount: 420,
    paidAmount: 420,
  },
  {
    id: '212451',
    client: users[11],
    issueDate: {
      date: '2025-1-25',
      time: '06:15 PM',
    },
    status: 'late',
    paymentDate: '2025-2-20',
    requiredAmount: 300,
    paidAmount: 0,
  },
  {
    id: '212452',
    client: users[12],
    issueDate: {
      date: '2025-5-12',
      time: '08:05 AM',
    },
    status: 'sent',
    paymentDate: '2025-6-10',
    requiredAmount: 180,
    paidAmount: 180,
  },
  {
    id: '212453',
    client: users[13],
    issueDate: {
      date: '2025-6-30',
      time: '10:20 AM',
    },
    status: 'sent',
    paymentDate: '2025-7-15',
    requiredAmount: 600,
    paidAmount: 200,
  },
  {
    id: '212454',
    client: users[14],
    issueDate: {
      date: '2025-7-5',
      time: '02:50 PM',
    },
    status: 'draft',
    paymentDate: '2025-8-1',
    requiredAmount: 250,
    paidAmount: 50,
  },
  {
    id: '212455',
    client: users[15],
    issueDate: {
      date: '2025-8-1',
      time: '07:40 PM',
    },
    status: 'sent',
    paymentDate: '2025-9-12',
    requiredAmount: 100,
    paidAmount: 100,
  },
  {
    id: '212456',
    client: users[1],
    issueDate: {
      date: '2025-8-6',
      time: '01:25 PM',
    },
    status: 'sent',
    paymentDate: '2025-9-15',
    requiredAmount: 220,
    paidAmount: 220,
  },
  {
    id: '212457',
    client: users[2],
    issueDate: {
      date: '2025-7-30',
      time: '04:40 PM',
    },
    status: 'late',
    paymentDate: '2025-8-10',
    requiredAmount: 310,
    paidAmount: 0,
  },
  {
    id: '212458',
    client: users[3],
    issueDate: {
      date: '2025-7-18',
      time: '09:55 AM',
    },
    status: 'draft',
    paymentDate: '2025-8-20',
    requiredAmount: 150,
    paidAmount: 80,
  },
  {
    id: '212459',
    client: users[4],
    issueDate: {
      date: '2025-7-22',
      time: '07:20 PM',
    },
    status: 'sent',
    paymentDate: '2025-8-30',
    requiredAmount: 190,
    paidAmount: 190,
  },
  {
    id: '212460',
    client: users[5],
    issueDate: {
      date: '2025-6-28',
      time: '06:10 PM',
    },
    status: 'late',
    paymentDate: '2025-7-20',
    requiredAmount: 275,
    paidAmount: 125,
  },
  {
    id: '212461',
    client: users[6],
    issueDate: {
      date: '2025-7-15',
      time: '03:05 PM',
    },
    status: 'sent',
    paymentDate: '2025-8-1',
    requiredAmount: 400,
    paidAmount: 200,
  },
  {
    id: '212462',
    client: users[7],
    issueDate: {
      date: '2025-7-1',
      time: '11:45 AM',
    },
    status: 'sent',
    paymentDate: '2025-8-5',
    requiredAmount: 180,
    paidAmount: 180,
  },
  {
    id: '212463',
    client: users[8],
    issueDate: {
      date: '2025-8-2',
      time: '08:30 AM',
    },
    status: 'sent',
    paymentDate: '2025-9-10',
    requiredAmount: 260,
    paidAmount: 160,
  },
];

export const recipientLists: RecipientItem[] = [
  {
    id: 1,
    name: 'Aurora',
    avatar: avatar6,
    email: 'aurora@themewagon.com',
    status: 'Active',
    phone: '+123456789012',
    location: 'Apt: 6/B, 192 Edsel Road, Van Nuys, California, USA 96580',
  },
  {
    id: 2,
    name: 'Liam Johnson',
    avatar: avatar1,
    email: 'liam.johnson@example.com',
    status: 'Inactive',
    phone: '+1 987 654 3210',
    location: 'Los Angeles, USA',
  },
  {
    id: 3,
    name: 'Sofia Martinez',
    avatar: avatar4,
    email: 'sofia.martinez@example.com',
    status: 'Active',
    phone: '+44 20 7946 0958',
    location: 'London, UK',
  },
  {
    id: 4,
    name: 'Ethan Brown',
    avatar: avatar5,
    email: 'ethan.brown@example.com',
    status: 'Active',
    phone: '+61 2 9374 4000',
    location: 'Sydney, Australia',
  },
  {
    id: 5,
    name: 'Isabella Rossi',
    avatar: avatar9,
    email: 'isabella.rossi@example.com',
    status: 'Pending',
    phone: '+39 06 698 83229',
    location: 'Rome, Italy',
  },
];

export const invoiceData: InvoicePreviewItem = {
  organizationImage: { id: 1, file: Logo },
  invoiceFrom: {
    name: 'Themewagon',
    phone: '+123456789012',
    email: 'themewagon@gmail.com',
    address: 'Wilmington, DE, US 19802-4447',
    issueDate: '2025-04-20',
  },
  invoiceTo: {
    name: 'Aurora',
    phone: '+123456789564',
    email: 'aurora@themewagon.com',
    address: '192 Edsel Road, California, USA 96580',
    issueDate: '2025-03-25',
  },
  invoiceDetails: {
    invoiceNumber: 212041,
    status: 'Paid',
    amount: 266,
  },
  shippingCost: 4.49,
  discount: 4.49,
  tax: 4.49,
  purpose:
    '2 services (Web design & Facebook ad campaign) and 1 product (Sofa set) was provided to Jane Doe',
  itemDetails: [
    {
      id: 1,
      type: 'service',
      description: 'Web design service',
      quantity: 3,
      price: 50,
    },
    {
      id: 2,
      type: 'product',
      description: 'Sofa set',
      quantity: 2,
      price: 80.0,
    },
    {
      id: 3,
      type: 'service',
      description: 'Facebook and campaign',
      quantity: 1,
      price: 50.0,
    },
  ],
  note: 'Thank you for your business. If you have any questions concerning this invoice, contact customer service +1 302 433 6002 or send an email at info@themewagon.com.',
};

export const invoiceHistories: InvoiceHistoryItem[] = [
  {
    id: 1,
    date: '2025-03-18T14:02:00',
    companyName: 'Themewagon',
    message: 'has sent invoice to ',
    image: ThemewagonLogo,
    email: 'janedoe@gmail.com',
  },
  {
    id: 2,
    date: '2025-03-18T14:02:00',
    companyName: 'Themewagon',
    message: 'has updated the invoice.',
    image: ThemewagonLogo,
  },
  {
    id: 3,
    date: '2025-03-18T14:02:00',
    companyName: 'Themewagon',
    message: 'has created the invoice. ',
    image: ThemewagonLogo,
    isLast: true,
  },
];
