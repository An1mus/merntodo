import React, {useEffect, useRef, useState} from "react";
// @ts-ignore
import {SVGGraph} from 'calendar-graph';
import {formatDate} from "../../utils";
import styles from './Heatmap.module.scss';

interface HeatmapDay { count: number; date: string }

interface Props {
    data: Array<HeatmapDay>;
}

const HeatMap: React.FC<Props> = ({ data }) => {
    const svgRef = useRef(null);
    const chart = useRef(null);
    const [count, setCount] = useState(0);
    const [date, setDate] = useState('');
    const [tooltipVisible, setTooltipVisible] = useState(false);
    const yearMs = 365*24*3600*1000;

    useEffect(() => {
        if(!svgRef.current) return;

        if(!chart.current) {
            chart.current = new SVGGraph(svgRef.current, data, {
                startDate: new Date(formatDate(new Date(new Date().getTime() - yearMs))),
                endDate: new Date(formatDate(new Date())),
                colorFun: (v: HeatmapDay) => {
                    return `rgba(108, 198, 68, .${v.count})`;
                },
                onHover: (v: HeatmapDay) => {
                    setCount(v.count);
                    setDate(v.date.toString());
                    setTooltipVisible(true);
                }
            })
        }
    }, [])

    return <>
        <div className={styles.container} ref={svgRef} onMouseLeave={() => setTooltipVisible(false)}></div>
        {tooltipVisible && <div className={styles.tooltip}>{count}:{formatDate(date)}</div>}
    </>
};

export default HeatMap;
