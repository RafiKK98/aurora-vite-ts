import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useHiringContext } from 'providers/HiringProvider';
import ActiveSearchFilter from 'components/sections/hiring/candidate/job-list/ActiveSearchFilter';
import FilterDrawer from 'components/sections/hiring/candidate/job-list/FilterDrawer';
import Header from 'components/sections/hiring/candidate/job-list/Header';
import JobListView from 'components/sections/hiring/candidate/job-list/JobListView';
import JobPagination from 'components/sections/hiring/candidate/job-list/JobPagination';

const JobList = () => {
  const {
    candidate: { jobs },
  } = useHiringContext();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [search, setSearch] = useState('');

  const toggleDrawer = (newOpen: boolean) => () => setIsDrawerOpen(newOpen);
  return (
    <Box sx={{ px: { xs: 3, md: 5 }, pb: { xs: 3, md: 5 }, pt: 3 }}>
      <Container maxWidth={false} disableGutters sx={{ maxWidth: 820 }}>
        <Header toggleDrawer={toggleDrawer} search={search} setSearch={setSearch} />
        {search.length > 0 && <ActiveSearchFilter search={search} />}
        <JobListView jobs={jobs} />
        <JobPagination jobs={jobs} />
      </Container>
      <FilterDrawer open={isDrawerOpen} handleClose={toggleDrawer(false)} />
    </Box>
  );
};

export default JobList;
