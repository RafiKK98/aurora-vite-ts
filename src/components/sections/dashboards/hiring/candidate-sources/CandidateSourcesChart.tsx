import { useMemo } from 'react';
import { type SxProps, type Theme, useTheme } from '@mui/material/styles';
import EChartsReactCore from 'echarts-for-react/lib/core';
import { PieChart } from 'echarts/charts';
import { GridComponent, LegendComponent, TooltipComponent } from 'echarts/components';
import * as echarts from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { useSettingsContext } from 'providers/SettingsProvider';
import { CandidateSource } from 'types/hiring';
import ReactEchart from 'components/base/ReactEchart';

echarts.use([TooltipComponent, GridComponent, PieChart, CanvasRenderer, LegendComponent]);

interface CandidateSourcesChartProps {
  sx?: SxProps<Theme>;
  data: CandidateSource[];
  ref?: React.Ref<null | EChartsReactCore>;
}

const CandidateSourcesChart = ({ data, sx, ref }: CandidateSourcesChartProps) => {
  const { getThemeColor } = useSettingsContext();
  const { vars } = useTheme();

  const getOptions = useMemo(
    () => ({
      legend: {
        show: false,
        top: 0,
      },
      color: [
        getThemeColor(vars.palette.chBlue[200]),
        getThemeColor(vars.palette.chBlue[100]),
        getThemeColor(vars.palette.chOrange[200]),
        getThemeColor(vars.palette.chGreen[100]),
        getThemeColor(vars.palette.chLightBlue[100]),
        getThemeColor(vars.palette.chRed[100]),
      ],
      series: [
        {
          name: 'Nightingale Chart',
          type: 'pie',
          radius: [70, 160],
          center: ['50%', '100%'],
          startAngle: 180,
          endAngle: 360,
          roseType: 'radius',
          itemStyle: {
            borderRadius: 0,
          },
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            label: {
              show: false,
            },
          },
          labelLine: {
            show: false,
          },
          data: data,
        },
      ],
    }),
    [data, vars.palette, getThemeColor],
  );

  return <ReactEchart ref={ref} echarts={echarts} option={getOptions} sx={sx} />;
};

export default CandidateSourcesChart;
