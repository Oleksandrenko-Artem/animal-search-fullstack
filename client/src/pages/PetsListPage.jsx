import React from 'react';
import PetsList from '../components/PetsList/PetsList';
import styles from './pages.module.scss';

const PetsListPage = () => {
    return (
        <div className={styles.wrapper}>
            <PetsList />
        </div>
    );
}

export default PetsListPage;