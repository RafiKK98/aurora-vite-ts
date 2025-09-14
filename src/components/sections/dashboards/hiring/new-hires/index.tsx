import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import { newHiresData as data } from 'data/hiring/dashboard';
import DashboardMenu from 'components/common/DashboardMenu';
import SectionHeader from 'components/common/SectionHeader';
import SectionPaper from '../common/Section';
import Hire from './Hire';

const NewHires = () => {
  return (
    <Stack component={SectionPaper} direction="column">
      <SectionHeader
        title="New Hires"
        subTitle="Recent joiners by date, role"
        actionComponent={<DashboardMenu size="medium" />}
      />
      <Stack
        direction="column"
        gap={1}
        justifyContent="space-between"
        divider={<Divider flexItem sx={{ borderColor: 'dividerLight' }} />}
        sx={{ py: 1, height: 1 }}
      >
        {data.map((item) => (
          <Hire key={item.id} hire={item} />
        ))}
      </Stack>
    </Stack>
  );
};

export default NewHires;
