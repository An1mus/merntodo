import React from 'react';

interface OverviewChartProps {
    chartData: number // TODO: this is a temp data placeholder
}

const OverviewChart: React.FC<OverviewChartProps> = ({chartData}) => {
    return <>
        <p>Chart: {chartData}</p>
    </>
};

export default OverviewChart;
