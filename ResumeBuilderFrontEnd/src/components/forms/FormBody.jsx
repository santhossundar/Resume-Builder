import React from 'react'
import EducationDetails from './EducationDetails'
import PersonalInformation from './PersonalInformation'
import WorkingExperiences from './WorkingExperiences'
import {useSelector} from 'react-redux';

const FormBody = () => {
    const page = useSelector((state) => state.value);

    return (
        <div className='form-body'>
            {page===1?<WorkingExperiences/>:page===2?<EducationDetails/>:<PersonalInformation/>}
        </div>
    )
}

export default FormBody
