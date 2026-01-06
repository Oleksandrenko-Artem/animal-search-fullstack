import React from 'react';
import styles from './pages.module.scss';

const NotFoundPage = () => {
    return (
        <div className={styles.wrapper}>
            <h2>Error 404: Page not found.</h2>
        </div>
    );
}

export default NotFoundPage;