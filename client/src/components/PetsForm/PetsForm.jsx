import React from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import CONSTANTS from '../../constants';

// TODO VALIDATION

const PetsForm = ({ petTypes }) => {
    const onSubmit = (values, formikBag) => { 
        console.log(values);
        formikBag.resetForm();
    };
    return (
        <Formik initialValues={{
            name: '',
            owner: '',
            ownerContacts: '',
            description: '',
            city: CONSTANTS.CITIES[0],
            lostDate: '',
            petTypeId: petTypes[0]?.id ?? '',
        }} onSubmit={onSubmit}>
            {formikProps => <Form>
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