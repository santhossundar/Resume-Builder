import React from 'react'
import EducationDetails from './EducationDetails'
import PersonalInformation from './PersonalInformation'
import WorkPlaceDetails from './WorkPlaceDetails'

const FormBody = ({pageId}) => {
    return (
        <div className='form-body'>
            {pageId===1?<WorkPlaceDetails/>:pageId===2?<EducationDetails/>:<PersonalInformation/>}
        </div>
    )
}

export default FormBody
