import React from 'react';
import { Priority } from '../../../commons/types/Priority';
import {ReactComponent as FilterIconImage} from '../../../assets/icons/FilterIcon.svg'
import styled from 'styled-components';

const IconContainer = styled.div`
    --main-color:${props => props.color};
    
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
        [Priority.Critical]: '#F14146',
        [Priority.High]: '#F35D2C',
        [Priority.Medium]: '#4344E4',
        [Priority.Low]: '#41F1C6',
    };
    return (
        <IconContainer color={colors[priority]}>
            <FilterIconImage />
        </IconContainer>
    );
};

export default FilterIcon;
