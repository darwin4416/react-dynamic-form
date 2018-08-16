import React from 'react';

const SecHeading = (props) => {
    let count = 0;
    props.labelCount.map((el) => {
        if (el == 1) {
            count++;
        }
    });
    function selectAll() {
        props.selectAll();
    }
    function removeAll() {
        props.removeAll();
    }
    return (
        <div className="ro">
            <div className="col col-1">
                <div className="checkbox" onClick={selectAll}
                    style={props.isAllSelected ? { background: '#3252C9' } : { background: 'transparent' }}>
                    <span id="line2"></span>
                </div>
            </div>
            <div className="col col-2 sel">
                <div>
                    <h2>Section Heading</h2>
                </div>
                <div style={{ float: 'right' }}>
                    <span style={count > 0 ? { display: 'block' } : { display: 'none' }}> {count} Labels Selected </span>
                </div>
            </div>
            <div className="col col-3">
                <button id="btn-section" onClick={removeAll}>Remove</button>
            </div>
        </div>
    )
}



export default SecHeading;