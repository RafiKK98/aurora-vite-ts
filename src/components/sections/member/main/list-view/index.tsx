// components/MemberListView.tsx
import {
  Avatar,
  Box,
  Chip,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Typography,
} from '@mui/material';
import { SortField, useMemberContext } from 'providers/MemberProvider';
import { PaletteColorKey } from 'theme/palette';
import { Member } from 'types/member';
import CustomTablePaginationAction from 'components/pagination/CustomTablePaginationAction';

const MemberListView = () => {
  const { state, handlePageChange, handleRowsPerPageChange, totalCount, handleSort } =
    useMemberContext();

  const getStatusColor = (status: Member['job']['status']): PaletteColorKey => {
    switch (status) {
      case 'Active':
        return 'success';
      case 'Probation':
        return 'info';
      case 'Intern':
        return 'warning';
      case 'Contract':
        return 'neutral';
      case 'Resigned':
        return 'error';
      default:
        return 'primary';
    }
  };

  const createSortHandler = (field: SortField) => () => {
    handleSort(field);
  };

  return (
    <Stack direction="column">
      <TableContainer component={Box} sx={{ maxHeight: 'calc(100vh - 200px)' }}>
        <Table stickyHeader sx={{ minWidth: 650 }} size="medium">
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: 60 }}>Avatar</TableCell>
              <TableCell sortDirection={state.sortField === 'id' ? state.sortDirection : false}>
                <TableSortLabel
                  active={state.sortField === 'id'}
                  direction={state.sortField === 'id' ? state.sortDirection : 'asc'}
                  onClick={createSortHandler('id')}
                >
                  ID No
                </TableSortLabel>
              </TableCell>
              <TableCell sortDirection={state.sortField === 'name' ? state.sortDirection : false}>
                <TableSortLabel
                  active={state.sortField === 'name'}
                  direction={state.sortField === 'name' ? state.sortDirection : 'asc'}
                  onClick={createSortHandler('name')}
                >
                  Name
                </TableSortLabel>
              </TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell
                sortDirection={state.sortField === 'job.title' ? state.sortDirection : false}
              >
                <TableSortLabel
                  active={state.sortField === 'job.title'}
                  direction={state.sortField === 'job.title' ? state.sortDirection : 'asc'}
                  onClick={createSortHandler('job.title')}
                >
                  Job Title
                </TableSortLabel>
              </TableCell>
              <TableCell
                sortDirection={state.sortField === 'job.team' ? state.sortDirection : false}
              >
                <TableSortLabel
                  active={state.sortField === 'job.team'}
                  direction={state.sortField === 'job.team' ? state.sortDirection : 'asc'}
                  onClick={createSortHandler('job.team')}
                >
                  Team
                </TableSortLabel>
              </TableCell>
              <TableCell
                sortDirection={state.sortField === 'job.status' ? state.sortDirection : false}
              >
                <TableSortLabel
                  active={state.sortField === 'job.status'}
                  direction={state.sortField === 'job.status' ? state.sortDirection : 'asc'}
                  onClick={createSortHandler('job.status')}
                >
                  Status
                </TableSortLabel>
              </TableCell>
              <TableCell sortDirection={state.sortField === 'city' ? state.sortDirection : false}>
                <TableSortLabel
                  active={state.sortField === 'city'}
                  direction={state.sortField === 'city' ? state.sortDirection : 'asc'}
                  onClick={createSortHandler('city')}
                >
                  City
                </TableSortLabel>
              </TableCell>
              <TableCell
                sortDirection={state.sortField === 'job.hiredDate' ? state.sortDirection : false}
              >
                <TableSortLabel
                  active={state.sortField === 'job.hiredDate'}
                  direction={state.sortField === 'job.hiredDate' ? state.sortDirection : 'asc'}
                  onClick={createSortHandler('job.hiredDate')}
                >
                  Hired Date
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {state.paginatedMembers.length === 0 ? (
              <TableRow>
                <TableCell colSpan={10} align="center" sx={{ py: 4 }}>
                  <Typography variant="h6" color="text.secondary">
                    No members found
                  </Typography>
                </TableCell>
              </TableRow>
            ) : (
              state.paginatedMembers.map((member) => (
                <TableRow
                  key={member.id}
                  sx={{
                    '&:last-child td, &:last-child th': { border: 0 },
                    '&:hover': { backgroundColor: 'action.hover' },
                  }}
                >
                  <TableCell>
                    <Avatar src={member.avatar} sx={{ width: 40, height: 40 }} alt={member.name} />
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" fontWeight="medium">
                      {member.id}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" fontWeight="medium">
                      {member.name}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" color="text.secondary">
                      {member.email}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" color="text.secondary">
                      {member.phone}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">{member.job.title}</Typography>
                  </TableCell>
                  <TableCell>
                    <Chip label={member.job.team} size="small" variant="outlined" />
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={member.job.status}
                      color={getStatusColor(member.job.status) as any}
                      size="small"
                    />
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">{member.city}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" color="text.secondary">
                      {new Date(member.job.hiredDate).toLocaleDateString()}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Enhanced Pagination */}

      <TablePagination
        component="div"
        count={totalCount}
        page={state.page}
        onPageChange={(_, newPage) => handlePageChange(newPage)}
        rowsPerPage={state.rowsPerPage}
        onRowsPerPageChange={(event) => handleRowsPerPageChange(parseInt(event.target.value, 10))}
        rowsPerPageOptions={[5, 10, 25, 50]}
        ActionsComponent={(props) => (
          <CustomTablePaginationAction
            {...props}
            onPrevClick={() => handlePageChange(state.page - 1)}
            onNextClick={() => handlePageChange(state.page + 1)}
          />
        )}
        sx={{
          border: 'none',
          '& .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows': {
            marginBottom: 0,
          },
        }}
      />
    </Stack>
  );
};

export default MemberListView;
