import React, {useEffect, useState} from 'react';
import './App.css';
import {Field} from "./Components/Field";
import {Button} from "./Components/Button";

function App() {
    const [num, setNum] = useState<number>(() => Number(localStorage.getItem('count')) || 1)
    const [up, setUp] = useState<number>(() => Number(localStorage.getItem('up_limit')) || 5)
    const [down, setDown] = useState<number>(() => Number(localStorage.getItem('down_limit')) || 1)

    // useEffect(() => {
    //     const storedCount = localStorage.getItem('count')
    //     storedCount && setNum(JSON.parse(storedCount))         //+ ; parsInt
    // },[])

    // useEffect(() => {
    //     const storedLimit = localStorage.getItem('up_limit')
    //     storedLimit && setUp(JSON.parse(storedLimit))
    // }, [])
    // useEffect(() => {
    //     const storedLimit = localStorage.getItem('down_limit')
    //     storedLimit && setDown(JSON.parse(storedLimit))
    // },[])


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
        // localStorage.setItem('up_limit', JSON.stringify(value))
    }
    const onChangeDown = (value: number) => {
        setDown(value)
        // setNum(value)
        // localStorage.setItem('down_limit', JSON.stringify(value))
        // localStorage.setItem('count', JSON.stringify(value))
    }
    const set = () => {
        localStorage.setItem('up_limit', JSON.stringify(value))
        localStorage.setItem('down_limit', JSON.stringify(value))
        localStorage.setItem('count', JSON.stringify(value))
        setNum(value)
    }

    return (
        <div className="App flex">
            <div>
                <Field callback={onChangeUp} value={up}/>
                <Field callback={onChangeDown} value={down}/>
                <Button name={'set'} callback={set} isDisable={false}/>

            </div>

            <div>
                <div className={num === up ? 'red' : ''}>{num}</div>
                <div>
                    <Button name={'inc'} callback={inc} isDisable={num === up}/>
                    <Button name={'res'} callback={res} isDisable={num === down}/>
                </div>
            </div>

        </div>
    );
}

export default App;
