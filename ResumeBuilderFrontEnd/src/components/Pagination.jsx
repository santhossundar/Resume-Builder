import React from 'react';
import { useDispatch } from 'react-redux';
import { prev, next } from '../redux/reducers/paginationReducer';

const Button = ({ text }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        let action;
        if (text === "Prev") {
            action = prev
        } else if (text === "Next") {
            action = next
        }
        dispatch(action());
    }

    return (
        <button
            className='btn btn-secondary ms-2 me-1 pt-2 pb-2 ps-4 pe-4 shadow'
            onClick={() => { handleClick() }}>
            {text}
        </button>
    )
}

export default Button;
