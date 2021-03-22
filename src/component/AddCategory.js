import React, { useState } from 'react'
import PropTypes from 'prop-types';
export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');//useStates vacio es undefined

    const handleImputChange = (e) => {
        //console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit hecho');
        if (inputValue.trim().length > 2) {
            setCategories(categories => [inputValue, ...categories]);//agrega la nueva categoria ingrtesadaen el input, luego las que estaban previamente utilizando el operador spreed
            setInputValue('');
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2>AddCategory component</h2>

                <input type="text"
                    value={inputValue}
                    onChange={handleImputChange}
                ></input>
            </form>

        </>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}