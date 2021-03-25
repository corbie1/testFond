import React, { useState } from 'react';
import './dropDown.scss'

export const DropDown = (props) => {
    const [isActive, setIsActive] = useState(false);
    const onClick = () => setIsActive(!isActive);
    return (
        <div className=" menu__container">
            <button onClick={onClick} className="button button__large menu__trigger">
                <span>DropDown</span>
            </button>
            <div className={`menu ${isActive ? 'active' : 'inactive'}`}>
                <div className="menu__item">Item</div>
                <div className="menu__item">Item</div>
                <div className="menu__item">Item</div>
            </div>
        </div >
    )
}