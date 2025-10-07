import { SyntheticEvent, useState } from 'react';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel, { TabPanelProps } from '@mui/lab/TabPanel';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { memberProfile } from 'data/member';
import IconifyIcon from 'components/base/IconifyIcon';
import DocumentsTab from './DocumentsTab';
import JobTab from './JobTab';
import PayInfoTab from './PayInfoTab';
import PersonalTab from './PersonalTab';
import TeamOverviewTab from './TeamOverviewTab';
import TimeOffTab from './TimeOffTab';

const ProfileTabs = (props: (typeof memberProfile)['details']) => {
  const { personal, job, teamOverview, timeOff, payInfo, documents } = props;
  const [value, setValue] = useState(1);

  const handleChange = (event: SyntheticEvent, newValue: number) => setValue(newValue);

  return (
    <TabContext value={value}>
      <div>
        <TabList onChange={handleChange}>
          <Tab value={1} label="Personal" />
          <Tab value={2} label="Job" />
          <Tab value={3} label="Team Overview" />
          <Tab value={4} label="Time Off" />
          <Tab value={5} label="Pay Info" />
          <Tab value={6} label="Documents" />
        </TabList>
        <CustomTabPanel value={1} label="Personal">
          <PersonalTab {...personal} />
        </CustomTabPanel>
        <CustomTabPanel value={2} label="Job">
          <JobTab {...job} />
        </CustomTabPanel>
        <CustomTabPanel value={3} label="Team Overview">
          <TeamOverviewTab {...teamOverview} />
        </CustomTabPanel>
        <CustomTabPanel value={4} label="Time Off">
          <TimeOffTab {...timeOff} />
        </CustomTabPanel>
        <CustomTabPanel value={5} label="Pay Info">
          <PayInfoTab {...payInfo} />
        </CustomTabPanel>
        <CustomTabPanel value={6} label="Documents">
          <DocumentsTab {...documents} />
        </CustomTabPanel>
      </div>
    </TabContext>
  );
};

export default ProfileTabs;

interface CustomTabPanelProps extends TabPanelProps {
  label: string;
}

const CustomTabPanel = ({ label, sx, children, ...rest }: CustomTabPanelProps) => {
  return (
    <TabPanel sx={{ p: 0, pt: 4, ...sx }} {...rest}>
      <Paper background={2} sx={{ outline: 0, py: 1, px: 2, mb: 3, borderRadius: 2 }}>
        <Stack justifyContent="space-between" alignItems="center">
          <Typography variant="h6" fontWeight={600}>
            {label}
          </Typography>
          <Button shape="square" color="neutral">
            <IconifyIcon icon="material-symbols:edit-outline-rounded" sx={{ fontSize: 20 }} />
          </Button>
        </Stack>
      </Paper>
      {children}
    </TabPanel>
  );
};
