import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPetsThunk, getTypesThunk } from '../../store/petsSlice';
import styles from './PetsList.module.scss';

const PetsList = () => {
    const dispatch = useDispatch();
    const { pets, petTypes } = useSelector((state) => state.pets);
    useEffect(() => {
        dispatch(getTypesThunk());
        dispatch(getPetsThunk());
    }, [dispatch]);
    return (
        <article className={styles.wrapper}>
            <h2>Pets List</h2>
            <ul className={styles['pets-list']}>
                {pets.map(p => (
                    <li key={p.id}>
                        <p><b>Pet's name:</b> {p.name}</p>
                        <p><b>Description:</b> {p.description}</p>
                        <p><b>Owner:</b> {p.owner}, {p.ownerContacts}, {p.city}</p>
                        <p><b>Lost date:</b> {p.lostDate}</p>
                        <p><b>Pet type:</b> {petTypes.find(t => t.id === p.petTypeId).type}</p>
                    </li>
                ))}
            </ul>
        </article>
    );
}

export default PetsList;