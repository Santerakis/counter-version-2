import React, {useEffect, useState} from 'react';
import './App.css';
import {Field} from "./Components/Field";
import {Button} from "./Components/Button";

function App() {
    const [num, setNum] = useState(1)
    const [up, setUp] = useState(5)
    const [down, setDown] = useState(0)

    useEffect(() => {
        const storedCount = localStorage.getItem('count')
        storedCount && setNum(JSON.parse(storedCount))         //+ ; parsInt
    },[])

    useEffect(() => {
        const storedLimit = localStorage.getItem('up_limit')
        storedLimit && setUp(JSON.parse(storedLimit))
    }, [])
    useEffect(() => {
        const storedLimit = localStorage.getItem('down_limit')
        storedLimit && setDown(JSON.parse(storedLimit))
    },[])


    const inc = () => {
        const newCount =  num + 1
        if (num < up) {
            setNum(newCount)
            localStorage.setItem('count', JSON.stringify(newCount))
        }
    }
    const res = () => {
        setNum(down)
        localStorage.setItem('count', JSON.stringify(down))
    }
    const onChangeUp = (value: number) => {
        setUp(value)
        localStorage.setItem('up_limit', JSON.stringify(value))
    }
    const onChangeDown = (value: number) => {
        setDown(value)
        localStorage.setItem('down_limit', JSON.stringify(value))
    }

    return (
        <div className="App flex">
            <div>
                <Field callback={onChangeUp}/>
                <Field callback={onChangeDown}/>
            </div>

            <div>
                <div>{num}</div>
                <div>
                    <Button name={'inc'} callback={inc}/>
                    <Button name={'res'} callback={res}/>
                </div>
            </div>

        </div>
    );
}

export default App;
