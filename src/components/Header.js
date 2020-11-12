import React from 'react'
import {HeaderWrapper} from './StyledComponents';
import * as fa from 'react-icons/fa';





function Header({onClick ,  show}) {
    const handleClick =() => {
        onClick();
    }
    

    return (
        <HeaderWrapper show={show}>
            <fa.FaBars onClick={handleClick} />
        </HeaderWrapper>
    )
}

export default Header
