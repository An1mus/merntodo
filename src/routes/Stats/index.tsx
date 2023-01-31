import React from 'react';
import Heatmap from "./Heatmap";
import {formatDate} from "../../utils";

interface Props {}

const Stats: React.FC<Props> = () => {
    const today = new Date();
    const startOfYear = new Date(today.getFullYear(), 0, 1);
    const millisecondsPerDay = 24 * 60 * 60 * 1000;

    const data = Array.from({ length: 365 }, (_, i) => {
        const prevDate = new Date(startOfYear.getTime() - i * millisecondsPerDay);
        return {
            date: formatDate(prevDate),
            count: Math.floor(Math.random() * 100) // replace with actual data
        };
    });

    return <>
        <h1>Stats</h1>
        <Heatmap data={data} />
    </>;
}

export default Stats;
