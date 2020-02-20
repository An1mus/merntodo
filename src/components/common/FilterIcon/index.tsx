import React from 'react';
import { Priority } from '../../../commons/types/Priority';
import {ReactComponent as FilterIconImage} from '../../../assets/icons/FilterIcon.svg'
import styled from 'styled-components';

const IconContainer = styled.div`
    --main-color:${props => props.color};
    height: 2rem;
    width: 2rem;
    
    svg {
        height: 100%;
        width: 100%;
    }
    .iconFill {
        fill: var(--main-color);
    }
    .iconStroke {
        stroke: var(--main-color);
    }
`;

interface FilterIconProps {
    priority: Priority,
}

const FilterIcon: React.FC<FilterIconProps> = ({priority}) => {
    const colors = {
        'Critical': '#F14146',
        'High': '#F35D2C',
        'Medium': '#4344E4',
        'Low': '#41F1C6',
    };
    return (
        <IconContainer color={colors[priority]}>
            <FilterIconImage />
        </IconContainer>
    );
};

export default FilterIcon;
