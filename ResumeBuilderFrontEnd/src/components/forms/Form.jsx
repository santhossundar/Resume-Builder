import React from 'react'
import FormBody from './FormBody';
import Button from '../Button';
import { useSelector } from 'react-redux';

const Form = () => {
    const page = useSelector((state) => state.value);

    const formTitles = [
        "Personal Information",
        "Working Experiences",
        "Education Details",
    ]

    console.log(page)

    return (
        <div className='form m-5'>
            <div className="progress-menu"></div>

            <div className="form-container m-5">
                <div className="header">
                    <div className="form-title">
                        <h4 className=''>{formTitles[page]}</h4>
                    </div>
                </div>

                <div className="body">
                    <FormBody pageId={page} />
                </div>

                <div className="footer m-5 p-2 d-flex justify-content-center">
                    <Button text="Prev" />
                    <Button text="Next" />

                </div>
            </div>
        </div>
    )
}

export default Form
