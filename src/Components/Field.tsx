import React, {ChangeEvent, useState} from 'react';

type FieldType = {
    callback: (value: number) => void
}

export const Field = (props: FieldType) => {
    const [title, setTitle] = useState(0)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.valueAsNumber) //Number
        props.callback(+e.currentTarget.value)
    }

    return (
        <div>
            <input
                type={'number'}
                value={title}
                onChange={onChangeHandler}

            />
        </div>
    )
}