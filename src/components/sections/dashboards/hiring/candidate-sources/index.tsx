import { useRef } from 'react';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { candidateSourcesData as data } from 'data/hiring/dashboard';
import EChartsReactCore from 'echarts-for-react/lib/core';
import useNumberFormat from 'hooks/useNumberFormat';
import useToggleChartLegends from 'hooks/useToggleChartLegends';
import DashboardMenu from 'components/common/DashboardMenu';
import SectionHeader from 'components/common/SectionHeader';
import SectionPaper from '../common/Section';
import CandidateSourcesChart from './CandidateSourcesChart';

const legends = [
  { name: 'Boards', color: 'chBlue.200', value: 19444 },
  { name: 'Referrals', color: 'chBlue.100', value: 13889 },
  { name: 'Agency', color: 'chOrange.200', value: 11111 },
  { name: 'Socials', color: 'chGreen.100', value: 25000 },
  { name: 'Website', color: 'chLightBlue.100', value: 16667 },
  { name: 'Others', color: 'chRed.100', value: 13889 },
];

const CandidateSources = () => {
  const chartRef = useRef<null | EChartsReactCore>(null);
  const { legendState, handleLegendToggle } = useToggleChartLegends(chartRef);
  const { numberFormat } = useNumberFormat();

  return (
    <SectionPaper background={1}>
      <SectionHeader
        title="Candidate Sources"
        subTitle="Applications by source last month"
        actionComponent={<DashboardMenu size="medium" />}
      />
      <Stack direction="column" gap={4}>
        <Box sx={{ position: 'relative' }}>
          <CandidateSourcesChart data={data} ref={chartRef} sx={{ height: '160px !important' }} />
          <Stack
            direction="column"
            gap={0.5}
            sx={{
              position: 'absolute',
              top: '90%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <Typography variant="subtitle1" fontWeight={700}>
              {numberFormat(data.reduce((acc, item) => acc + item.value, 0))}
            </Typography>
            <Typography variant="caption" color="text.disabled">
              Candidates
            </Typography>
          </Stack>
        </Box>
        <Grid container spacing={2}>
          {legends.map((legend) => (
            <Grid key={legend.name} size={4}>
              <ButtonBase
                type="button"
                disableRipple
                onClick={() => handleLegendToggle(legend.name)}
                sx={{ gap: 1, alignItems: 'stretch', opacity: legendState[legend.name] ? 0.5 : 1 }}
              >
                <Box sx={{ width: 4, bgcolor: legend.color, borderRadius: 0.5 }} />
                <Stack
                  direction="column"
                  justifyContent="space-between"
                  alignItems="flex-start"
                  gap={0.5}
                >
                  <Typography variant="caption" color="text.secondary">
                    {legend.name}
                  </Typography>
                  <Typography variant="caption" color="text.secondary" fontWeight={600}>
                    {numberFormat(legend.value)}
                  </Typography>
                </Stack>
              </ButtonBase>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </SectionPaper>
  );
};

export default CandidateSources;
