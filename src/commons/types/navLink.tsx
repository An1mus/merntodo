import React from 'react';

export type NavLink = {
    id: number,
    title: string,
    to: string,
    icon: React.FunctionComponent | null,
};
