import React from 'react';

interface OverviewItemProps {
    items: number,
    header: string
}

const OverviewItem: React.FC<OverviewItemProps> = ({items, header}) => {
    return <p>{{header}}: {{items}}</p>
};

export default OverviewItem;
