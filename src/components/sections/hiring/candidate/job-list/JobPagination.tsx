import Link from '@mui/material/Link';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Job } from 'types/hiring';
import TableLabelDisplayedRows from 'components/pagination/TableLabelDisplayedRows';

const JobPagination = ({ jobs }: { jobs: Job[] }) => {
  return (
    <Stack alignItems="center" gap={1} sx={{ py: 1, px: 3 }}>
      <TableLabelDisplayedRows count={jobs.length} from={1} to={jobs.length} />
      <Stack alignItems="center" flexGrow={1} justifyContent="space-between">
        <Link variant="caption" href="#!" sx={{ fontWeight: 700, flexShrink: 0 }}>
          Show all
        </Link>
        <Pagination
          variant="solid"
          color="primary"
          showFirstButton
          showLastButton
          count={3}
          siblingCount={1}
        />
      </Stack>
    </Stack>
  );
};

export default JobPagination;
