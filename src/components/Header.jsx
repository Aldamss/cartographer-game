import React from 'react';

import ModalBtn from './shared/ModalBtn'
import Dropdown from './shared/Dropdown';

function Header() {
    return (
        <header className="header">
            <Dropdown icon="bi-list" title="M" />
            <div className="logo" />
            <div>
                <h3>Mapple </h3>
                <h6>A Mapping Game</h6>
            </div>
            <ModalBtn />
        </header>
    );
};

export default Header;