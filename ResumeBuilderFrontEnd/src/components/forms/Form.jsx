import React, { useState } from 'react'
import FormBody from './FormBody';

const Form = () => {
    const [page, setPage] = useState(0);

    const formTitles = [
        "Personal Information",
        "Workplace Experiences",
        "Education Details",
    ]

    return (
        <div className='form m-5'>
            <div className="progress-menu"></div>

            <div className="form-container m-5">
                <div className="header">
                    <div className="form-title">
                        <h5>{formTitles[page]}</h5>
                    </div>
                </div>

                <div className="body">
                    <FormBody pageId={page} />
                </div>

                <div className="footer m-5 p-2 d-flex justify-content-center">
                    <button className='btn btn-secondary ms-2 me-1 pt-2 pb-2 ps-4 pe-4 shadow' onClick={() => {
                        setPage((currentPage) => currentPage - 1);
                    }}>
                        Prev
                    </button>

                    <button className='btn btn-secondary ms-1 me-2 pt-2 pb-2 ps-4 pe-4' onClick={() => {
                        setPage((currentPage) => currentPage + 1)
                    }}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Form
