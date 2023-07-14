import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const PersonalInformation = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <div className='personal-information mt-4 ms-2 p-4 shadow'>
            <Formik>
                {({ isSubmitting }) => (
                    <Form>
                        <div className="row g-4">
                            <div className="col-md-6">
                                <div className="form-field">
                                    <div className="row">
                                        <div className="col-4">
                                            <label htmlFor='firstname ms-3'>First Name</label>
                                        </div>

                                        <div className="col-8">
                                            <Field
                                                type="text"
                                                name="firstname"
                                                className="w-100 form-control"
                                            />
                                            <ErrorMessage name="firstname" component="div" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-field">
                                    <div className="row">
                                        <div className="col-4">
                                            <label htmlFor='lastname'>
                                                Last Name
                                            </label>
                                        </div>

                                        <div className="col-8">
                                            <Field
                                                type="text"
                                                name="lastname"
                                                className="w-100 form-control"
                                            />
                                            <ErrorMessage name="lastname" component="div" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="form-field">
                                    <div className="row">
                                        <div className="col-2">
                                            <label htmlFor='address'>Address</label>
                                        </div>

                                        <div className="col-10">
                                            <Field
                                                type="text"
                                                name="address"
                                                className="w-100 form-control"
                                            />
                                            <ErrorMessage name="address" component="div" />
                                        </div>
                                    </div></div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-field">
                                    <div className="row">
                                        <div className="col-4">
                                            <label htmlFor='telephonenumber'>Telephone</label>
                                        </div>

                                        <div className="col-8">
                                            <Field
                                                type="number"
                                                name="telephonenumber"
                                                className="w-100 form-control"
                                            />
                                            <ErrorMessage name="telephonenumber" component="div" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-field">
                                    <div className="row">
                                        <div className="col-4">
                                            <label htmlFor='mobilenumber'>Mobile</label>
                                        </div>

                                        <div className="col-8">
                                            <Field
                                                type="text"
                                                name="MobileNumber"
                                                className="w-100 form-control"
                                            />
                                            <ErrorMessage name="mobilenumber" component="div" />

                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-field">
                                    <div className="row">
                                        <div className="col-4">
                                            <label htmlFor='email'>E-mail</label>
                                        </div>

                                        <div className="col-8">
                                            <Field
                                                type="email"
                                                name="email"
                                                className="w-100 form-control"
                                            />
                                            <ErrorMessage name="email" component="div" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-field">
                                    <div className="row">
                                        <div className="col-4">
                                            <label htmlFor='country'>Country</label>
                                        </div>

                                        <div className="col-8">
                                            <Field
                                                type="text"
                                                name="country"
                                                className="w-100 form-control"
                                            />
                                            <ErrorMessage name="country" component="div" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="form-field">
                                    <div className="row">
                                        <div className="col-2">
                                            <label htmlFor='gender'>Gender</label>
                                        </div>

                                        <div className="col-4">
                                            <div className="gender">
                                                <div className="gender-item">
                                                    <Field
                                                        component="select"
                                                        name="gender"
                                                        placeholder="Select Gender"
                                                        className="w-50 form-control"
                                                    >
                                                        <option value="male">Male</option>
                                                        <option value="female">Female</option>
                                                    </Field>

                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-2">
                                            <label htmlFor='dateofbirth'>Date of Birth</label>
                                        </div>

                                        <div className="col-4">
                                            <DatePicker
                                                selected={selectedDate}
                                                onChange={handleDateChange}
                                                dateFormat="dd/MM/yyyy"
                                                placeholderText="Select a date"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default PersonalInformation
