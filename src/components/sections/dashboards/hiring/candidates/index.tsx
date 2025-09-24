import { useRef } from 'react';
import { candidatesData as data } from 'data/hiring/dashboard';
import EChartsReactCore from 'echarts-for-react/lib/core';
import DashboardSelectMenu from 'components/common/DashboardSelectMenu';
import SectionHeader from 'components/common/SectionHeader';
import SectionPaper from '../common/Section';
import CandidatesChart from './CandidatesChart';

const Candidates = () => {
  const chartRef = useRef<null | EChartsReactCore>(null);
  return (
    <SectionPaper>
      <SectionHeader
        title="Candidates"
        subTitle="Summary of candidate engagement"
        direction={{ xs: 'column', sm: 'row' }}
        actionComponent={
          <DashboardSelectMenu
            size="medium"
            defaultValue={30}
            sx={{ width: { xs: '50%', sm: 150 } }}
            options={[
              {
                value: 7,
                label: 'Last Day',
              },
              {
                value: 15,
                label: 'Last 6 Days',
              },
              {
                value: 30,
                label: 'Last 30 Days',
              },
            ]}
          />
        }
      />
      <CandidatesChart ref={chartRef} data={data} sx={{ height: '240px !important' }} />
    </SectionPaper>
  );
};

export default Candidates;
