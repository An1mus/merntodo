import React from 'react';
import styled from 'styled-components';

const CategoryLabelContainer = styled.div`
    display: flex;
    align-items: center;
    
    .categoryLabelDot {
        background-color: ${props => props.color};
        border-radius: 50%;
        height: 0.5rem;
        width: 0.5rem;
        margin-right: 0.5rem;
    }
    
    p {
        margin: 0;
    }
`;

interface CategoryLabelProps {
    name: string;
    color: string;
}

const CategoryLabel: React.FC<CategoryLabelProps> = ({name, color}) => {
    return (
        <CategoryLabelContainer color={color} className={'categoryLabel'}>
            <span className={'categoryLabelDot'} />
            <p>{name}</p>
        </CategoryLabelContainer>
    )
};

export default CategoryLabel;
