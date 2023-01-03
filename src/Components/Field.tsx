import React, {ChangeEvent, useState} from 'react';

type FieldType = {
    callback: (title: string) => void
}

export const Field = (props: FieldType) => {
    const [title, setTitle] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        props.callback(e.currentTarget.value)
    }

    return (
        <div>
            <input
                value={title}
                onChange={onChangeHandler}

            />
        </div>
    )
}