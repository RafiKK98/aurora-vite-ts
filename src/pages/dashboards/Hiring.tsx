import Grid from '@mui/material/Grid';
import CandidateSources from 'components/sections/dashboards/hiring/candidate-sources';
import Candidates from 'components/sections/dashboards/hiring/candidates';
import Meetings from 'components/sections/dashboards/hiring/meetings';
import MyPositions from 'components/sections/dashboards/hiring/my-positions';
import NewHires from 'components/sections/dashboards/hiring/new-hires';
import Pipeline from 'components/sections/dashboards/hiring/pipeline';
import Welcome from 'components/sections/dashboards/hiring/welcome';

const Hiring = () => {
  return (
    <Grid container>
      <Grid size={12} container>
        <Grid size={{ xs: 12, xl: 8 }}>
          <Welcome />
        </Grid>
        <Grid size={{ xs: 12, md: 6, xl: 4 }}>
          <CandidateSources />
        </Grid>
        <Grid size={{ xs: 12, md: 6, xl: 4 }}>
          <MyPositions />
        </Grid>
        <Grid size={{ xs: 12, xl: 8 }} container>
          <Grid size={{ xs: 12, sm: 6 }}>
            <NewHires />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Meetings />
          </Grid>
          <Grid size={12}>
            <Candidates />
          </Grid>
        </Grid>
      </Grid>
      <Grid size={12}>
        <Pipeline />
      </Grid>
    </Grid>
  );
};

export default Hiring;
