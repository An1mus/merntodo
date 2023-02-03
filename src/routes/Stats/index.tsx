import React, {useEffect, useState} from 'react';
import Heatmap from "./Heatmap";
import {formatDate} from "../../utils";
import {HistoricalData} from "../../types";
import {db} from "../../api";

interface Props {
}

const Stats: React.FC<Props> = () => {
    const today = new Date();
    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    const [heatMapData, setHeatMapData] = useState<HistoricalData[]>([]);

    useEffect(() => {
        (async () => {
            const dbResponse = await db.getHistoricalData();
            const emptyDays = 365 - dbResponse.length;
            const arrayOfEmptyDays = Array.from({length: emptyDays}, (_, i) => {
                const prevDate = new Date(today.getTime() - (i + dbResponse.length) * millisecondsPerDay);
                return {
                    date: formatDate(prevDate),
                    count: 0
                };
            })

            setHeatMapData([...arrayOfEmptyDays, ...dbResponse]);
        })()
    }, []);

    return <>
        <h1>Stats</h1>
        {heatMapData.length > 0 && <Heatmap data={heatMapData}/>}
    </>;
}

export default Stats;
