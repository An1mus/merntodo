import React from 'react';
import {Link} from "react-router-dom";
import styles from './NavLink.module.scss';

interface Props {
    path: string;
    name: string;
    icon: any
}

const NavLink: React.FC<Props> = ({path, name, icon}) => {
    return <Link
        className={styles.navLink}
        to={path}
    >
        {icon} <span>{name}</span>
    </Link>;
}

export default NavLink;
