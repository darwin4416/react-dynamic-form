import React from 'react';

const Header = (props) => {

    return (
        <div className="header">
            <div className="col-h">
                <div>
                    <p>CATEGORY</p>
                    <span>Page Heading</span>
                </div>
            </div>
            <div className="col-h">
                <button>BUTTON</button>
            </div>
        </div>
    )
}

export default Header;