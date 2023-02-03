import React, {useEffect, useRef, useState} from "react";
// @ts-ignore
import {SVGGraph} from 'calendar-graph';
import {formatDate} from "../../utils";
import styles from './Heatmap.module.scss';
import {HistoricalData} from "../../types";

interface Props {
    data: Array<HistoricalData>;
}

const HeatMap: React.FC<Props> = ({data}) => {
    const svgRef = useRef(null);
    const chart = useRef(null);
    const [count, setCount] = useState(0);
    const [date, setDate] = useState('');
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0})
    const [tooltipVisible, setTooltipVisible] = useState(false);
    const yearMs = 365 * 24 * 3600 * 1000;

    const handleMouseMove = (e: MouseEvent) => {
        if(e.offsetX > 0 && e.offsetY > 0) setMousePosition({x: e.offsetX, y: e.offsetY});
    }

    useEffect(() => {
        if (!svgRef.current) return;

        if (!chart.current) {
            chart.current = new SVGGraph(svgRef.current, data, {
                startDate: new Date(new Date().getTime() - yearMs),
                endDate: new Date(),
                colorFun: (v: HistoricalData) => {
                    return `rgba(108, 198, 68, ${v.count}%)`;
                },
                onHover: (v: HistoricalData) => {
                    setCount(v.count);
                    setDate(v.date.toString());
                }
            })
        }

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        }
    }, [])

    return <div className={styles.heatmapContainer} onMouseEnter={() => setTooltipVisible(true)} onMouseLeave={() => setTooltipVisible(false)}>
        <div className={styles.svgContainer} ref={svgRef}></div>
        {
            tooltipVisible && <div
                style={{top: `${mousePosition.y}px`, left:`${mousePosition.x}px`}}
                className={styles.tooltip}
            >
                <p>{count}% Done</p>
                <small>{formatDate(date)}</small>
            </div>}
    </div>
};

export default HeatMap;
