import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home Page</Link>
                    </li>
                    <li>
                        <Link to='/pet/create'>Add Pet</Link>
                    </li>
                    <li>
                        <Link to='/pets'>Pets List</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;