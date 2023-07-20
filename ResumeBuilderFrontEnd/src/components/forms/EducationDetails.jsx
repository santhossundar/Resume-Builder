import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TextView from '../TextView';

const EducationDetails = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <div className='education-details mt-4 ms-2 p-2'>
            <div className="container p-4 shadow">
                <Formik>
                    {({ isSubmitting }) => (
                        <Form>
                            <div className="row g-4">
                                <div className="col-md-12">
                                    <div className="form-field">
                                        <div className="row">
                                            <div className="col-2">
                                                <label htmlFor='firstname ms-3'>
                                                    Institute/College
                                                </label>
                                            </div>

                                            <div className="col-10">
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
                                                <label htmlFor='startat'>
                                                    Start at
                                                </label>
                                            </div>

                                            <div className="col-8">
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


                                <div className="col-md-6">
                                    <div className="form-field">
                                        <div className="row">
                                            <div className="col-4">
                                                <label htmlFor='endat'>
                                                    End at
                                                </label>
                                            </div>

                                            <div className="col-8">
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

                                <div className="col-md-12">
                                    <div className="form-field">
                                        <div className="row">
                                            <div className="col-2">
                                                <label htmlFor='endat'>
                                                    Qualification
                                                </label>
                                            </div>

                                            <div className="col-10">
                                                <Field
                                                    type="text"
                                                    name="description"
                                                    className="w-100 form-control"
                                                />
                                                <ErrorMessage name="description" component="div" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="form-field">
                                        <div className="row">
                                            <div className="col-2">
                                                <label htmlFor='endat'>
                                                    Description
                                                </label>
                                            </div>

                                            <div className="col-10">
                                                <Field
                                                    type="text"
                                                    name="description"
                                                    className="w-100 form-control"
                                                />
                                                <ErrorMessage name="description" component="div" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="form-field">
                                        <div className="row">
                                            <div className="col d-flex justify-content-end">
                                                <button className='btn btn-secondary ms-2 me-1 pt-2 pb-2 ps-4 pe-4 shadow'>ADD</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>

            <div className="container p-4 shadow">
                <div className="list-group">
                    <div className="list-group-item">
                        <TextView />
                    </div>

                    <div className="list-group-item">
                        <TextView />
                    </div>

                    <div className="list-group-item">
                        <TextView />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EducationDetails
