import React from 'react';

interface Props {
    name: string,
    description: string,
}

const ToDoItem: React.FC<Props> = ({name, description}) => {
    return <div>
        <p>
            {name}
        </p>
        <p>
            {description}
        </p>
    </div>;
}

export default ToDoItem;
