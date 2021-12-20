import React from 'react'
import PropTypes from 'prop-types';
import Button from './Button';

function Header({ title, onAdd, showAdd }) {
    const onClick = () =>{
        console.log('clicked')
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button 
            onClick={onAdd}
            color={showAdd ? 'red' : 'green'} 
            text={showAdd ? 'Close' : 'Add'} />
        </header>
    )
}

Header.defaultProps = {
    title: ' Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

const headingStyle = {
    color: 'red', backgroundColor: 'gray'
}

export default Header
