import React from 'react';

type ButtonType = {
    name: string
    callback: ()=>void
    isDisable: boolean
}

export const Button = (props: ButtonType) => {
    return (
        <div>
            <button onClick={props.callback}
                    disabled={props.isDisable}
            >{props.name}</button>
        </div>
    );
};

