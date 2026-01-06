import React from 'react';
import PetsForm from '../components/PetsForm/PetsForm';
import styles from './pages.module.scss';

const CreatePetPage = () => {
    return (
        <div className={styles.wrapper}>
            <h2>Create Pet</h2>
            <PetsForm />
        </div>
    );
}

export default CreatePetPage;