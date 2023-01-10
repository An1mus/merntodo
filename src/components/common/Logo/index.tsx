import React from 'react';
import styles from './Logo.module.scss';

interface Props {
}

const Index: React.FC<Props> = () => {
    return <div className={styles.logo}><div/><div/><div/><div/></div>;
}

export default Index;
