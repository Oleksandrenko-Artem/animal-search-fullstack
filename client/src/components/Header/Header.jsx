import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
    return (
        <header>
            <nav>
                <ul className={styles.links}>
                    <li>
                        <Link to='/'>Home Page</Link>
                    </li>
                    <li>
                        <Link to='/pets'>Pets List</Link>
                    </li>
                    <li>
                        <Link to='/pet/create'>Add Pet</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;