import { RefObject, useMemo } from 'react';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { DataGrid } from '@mui/x-data-grid/DataGrid';
import { GRID_CHECKBOX_SELECTION_COL_DEF } from '@mui/x-data-grid/colDef';
import { GridApiCommunity } from '@mui/x-data-grid/internals';
import { GridColDef } from '@mui/x-data-grid/models';
import dayjs from 'dayjs';
import { Member } from 'types/member';
import DashboardMenu from 'components/common/DashboardMenu';
import DataGridPagination from 'components/pagination/DataGridPagination';

interface MemberTableProps {
  apiRef: RefObject<GridApiCommunity | null>;
  data: Member[];
}

const MemberTable = ({ apiRef, data }: MemberTableProps) => {
  const columns: GridColDef<Member>[] = useMemo(
    () => [
      {
        ...GRID_CHECKBOX_SELECTION_COL_DEF,
        width: 64,
      },
      {
        field: 'name',
        headerName: 'Member',
        valueGetter: ({ name }) => name,
        minWidth: 250,
        renderCell: (params) => {
          return (
            <Stack alignItems="center" gap={1.5}>
              <Avatar src={params.row.avatar} alt="avatar" sx={{ width: 24, height: 24 }} />
              <Typography variant="subtitle2" color="text.secondary" fontWeight={400}>
                {params.row.name}
              </Typography>
            </Stack>
          );
        },
      },
      {
        field: 'id',
        headerName: 'ID No',
        renderCell: (params) => (
          <Typography variant="body2" color="text.secondary">
            {params.row.id}
          </Typography>
        ),
        minWidth: 110,
      },
      {
        field: 'job-title',
        headerName: 'Job title',
        renderCell: (params) => <Typography variant="subtitle2">{params.row.job.title}</Typography>,
        minWidth: 190,
      },
      {
        field: 'team',
        headerName: 'Team',
        renderCell: (params) => (
          <Typography variant="body2" color="text.secondary">
            {params.row.job.team}
          </Typography>
        ),
        minWidth: 180,
      },
      {
        field: 'email',
        headerName: 'Email',
        renderCell: (params) => <Link href={`mailto:${params.row.email}`}>{params.row.email}</Link>,
        minWidth: 200,
      },
      {
        field: 'phone',
        headerName: 'Phone No',
        minWidth: 180,
      },
      {
        field: 'city',
        headerName: 'City',
        minWidth: 140,
      },
      {
        field: 'status',
        headerName: 'Status',
        minWidth: 120,
        renderCell: (params) => {
          <Stack alignItems="flex-start">
            <Chip variant="soft" label={params.row.job.status} color="success" />;
          </Stack>;
        },
      },
      {
        field: 'hiredDate',
        headerName: 'Hired Date',
        minWidth: 100,
        renderCell: (params) => (
          <Typography variant="body2" color="text.secondary">
            {dayjs(params.row.job.hiredDate).format()}
          </Typography>
        ),
      },
      {
        field: 'action',
        headerName: '',
        sortable: false,
        width: 60,
        align: 'right',
        headerAlign: 'right',
        renderCell: () => <DashboardMenu />,
      },
    ],
    [],
  );
  return (
    <DataGrid
      rowHeight={64}
      rows={data}
      apiRef={apiRef}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 7,
          },
        },
      }}
      pageSizeOptions={[7]}
      checkboxSelection
      slots={{
        basePagination: (props) => <DataGridPagination showAllHref="#!" {...props} />,
      }}
      sx={{
        '& .margin': {
          pr: 5,
        },
      }}
    />
  );
};

export default MemberTable;
