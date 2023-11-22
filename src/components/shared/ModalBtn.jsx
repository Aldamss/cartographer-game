import * as React from 'react';
import IconButton from '@mui/material/IconButton';

function Header() {
    const open = Boolean();

    const handleClick = (event) => {

    };

    return (
        <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? 'long-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleClick}
        >
            <i className="bi bi-gear-fill"></i>
        </IconButton>
    );
};




export default Header;