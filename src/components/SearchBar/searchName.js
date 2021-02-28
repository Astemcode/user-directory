import React from "react";
import "./searchName.css";

const SearchName = (props) => {
    return (
        <nav className='navbar navbar-light bg-light justify-content-center'>
        <form className='form-inline m-2' onSubmit={props.handleFormSubmit}>
            <input
                onChange={props.handleInputChange}
                value={props.value}
                name='search'
                type='search'
                className='form-control'
                placeholder='Search directory for Employee'
                id='search'
            />
        </form>
        </nav>
    );
}

export default SearchName;