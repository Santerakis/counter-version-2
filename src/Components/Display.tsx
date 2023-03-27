import React from 'react';

type DisplayPropsType = {
    up: number
    num: number
    settingMode: boolean
    errMode: boolean
}

const Display = (props: DisplayPropsType) => {
    return (
        <div className="">
            {props.settingMode ? props.errMode ? <span>incorrect</span> : <span>press set</span>
                : <span className={props.num === props.up ? 'equal' : ''}>{props.num}</span>}
        </div>
    );
};

export default Display;

// {props.settingMode
//     ? <div className={'error'}>{errOrEnter}</div>
//     : {!errOrEnter
//     ? <div className={num === up ? 'red' : ''}>{num}</div>
//     : <div>Incorrect</div>}}