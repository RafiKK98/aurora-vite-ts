import Grid from '@mui/material/Grid';
import { kpiData } from 'data/hiring/dashboard';
import SectionPaper from '../common/Section';
import Header from './Header';
import KPI from './KPI';

const Welcome = () => {
  return (
    <SectionPaper>
      <Header title="Welcome, John Carter!" subTitle="Have a Productive Day!" sx={{ mb: 4 }} />
      <Grid container spacing={2}>
        {kpiData.map((kpi) => (
          <Grid key={kpi.title} size={{ xs: 6, sm: 4 }}>
            <KPI title={kpi.title} subTitle={kpi.subTitle} value={kpi.value} icon={kpi.icon} />
          </Grid>
        ))}
      </Grid>
    </SectionPaper>
  );
};

export default Welcome;
