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

                <div className="footer">
                    <button onClick={() => {
                        setPage((currentPage) => currentPage - 1);
                    }}>
                        Prev
                    </button>

                    <button onClick={() => {
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
