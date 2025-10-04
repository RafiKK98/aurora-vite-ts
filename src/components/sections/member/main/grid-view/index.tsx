import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Pagination from '@mui/material/Pagination';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useMemberContext } from 'providers/MemberProvider';

const MemberGridView = () => {
  const { state, handlePageChange, handleRowsPerPageChange, totalCount, totalPages } =
    useMemberContext();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'success';
      case 'Probation':
        return 'warning';
      case 'Intern':
        return 'info';
      case 'Contract':
        return 'secondary';
      case 'Resigned':
        return 'error';
      default:
        return 'default';
    }
  };

  return (
    <Stack direction="column" gap={3}>
      <Grid container spacing={3}>
        {state.paginatedMembers.map((member) => (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={member.id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Avatar src={member.avatar} sx={{ width: 80, height: 80, mx: 'auto', mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  {member.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {member.job.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {member.job.team}
                </Typography>
                <Chip
                  label={member.job.status}
                  color={getStatusColor(member.job.status) as any}
                  size="small"
                  sx={{ mb: 2 }}
                />
                <Typography variant="body2" color="text.secondary">
                  {member.email}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {member.city}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Custom Pagination */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
        <FormControl size="small" sx={{ minWidth: 120 }}>
          <InputLabel>Rows per page</InputLabel>
          <Select
            value={state.rowsPerPage}
            label="Rows per page"
            onChange={(e) => handleRowsPerPageChange(Number(e.target.value))}
          >
            {[5, 10, 25, 50].map((size) => (
              <MenuItem key={size} value={size}>
                {size}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Pagination
          count={totalPages}
          page={state.page + 1}
          onChange={(_, value) => handlePageChange(value - 1)}
          color="primary"
        />

        <Typography variant="body2" color="text.secondary">
          {`${state.page * state.rowsPerPage + 1}-${Math.min((state.page + 1) * state.rowsPerPage, totalCount)} of ${totalCount}`}
        </Typography>
      </Box>
    </Stack>
  );
};

export default MemberGridView;
