import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { createPetThunk, getTypesThunk } from '../../store/petsSlice';
import CONSTANTS from '../../constants';
import styles from './PetsForm.module.scss';

// TODO VALIDATION

const PetsForm = ({ petTypes }) => {
    const dispatch = useDispatch();
    const onSubmit = (values, formikBag) => {
    const dataToSend = {
        ...values,
        petTypeId: Number(values.petTypeId)
    };
        dispatch(createPetThunk(dataToSend));
        formikBag.resetForm();
    };
    useEffect(() => {
        dispatch(getTypesThunk());
    }, [dispatch]);
    return (
        <Formik initialValues={{
            name: '',
            owner: '',
            ownerContacts: '',
            description: '',
            city: CONSTANTS.CITIES[0],
            lostDate: '',
            petTypeId: petTypes.length > 0 ? petTypes[0].id : '',
        }} onSubmit={onSubmit}>
            {formikProps => <Form className={styles.form}>
                <label>
                    <Field name="name" type="text" placeholder="Pet's name" autoFocus />
                    <ErrorMessage name="name" />
                </label>
                <label>
                    <Field name="owner" type="text" placeholder="Your name" />
                    <ErrorMessage name="owner" />
                </label>
                <label>
                    <Field name="ownerContacts" type="text" placeholder="+XX XXX XXX XX XX" />
                    <ErrorMessage name="ownerContacts" />
                </label>
                <label>
                    <Field name="description" type="text" placeholder="Description" />
                    <ErrorMessage name="description" />
                </label>
                <label>
                    <select name="city" value={formikProps.values.city} onChange={formikProps.handleChange}>
                        {CONSTANTS.CITIES.map((c, i) => <option key={i} value={c}>{c}</option>)}
                    </select>
                </label>
                <label>
                    <Field name="lostDate" type="date" />
                    <ErrorMessage name="lostDate" />
                </label>
                {petTypes.length !== 0 && <label>
                    <select name="petTypeId" value={formikProps.values.petTypeId} onChange={formikProps.handleChange}>
                        {petTypes.map((t) => <option key={t.id} value={t.id}>{t.type}</option>)}
                    </select>
                </label>}
                <button type='submit'>Add Pet</button>
            </Form>}
        </Formik>
    );
}

const mapStateToProps = ({ pets: { petTypes } }) => ({ petTypes });

export default connect(mapStateToProps) (PetsForm);