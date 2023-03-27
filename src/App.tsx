import React, {useEffect, useState} from 'react';
import './App.css';
import {Field} from "./Components/Field";
import {Button} from "./Components/Button";
import Display from "./Components/Display";

function App() {
    // const [edit, editNum] = useState<boolean>(true)
    const [num, setNum] = useState<number>(() => Number(localStorage.getItem('count')) || 1)
    const [up, setUp] = useState<number>(() => Number(localStorage.getItem('up_limit')) || 5)
    const [down, setDown] = useState<number>(() => Number(localStorage.getItem('down_limit')) || 1)
    const [errOrEnter, setErrOrEnter] = useState<boolean>(false)
    const [isDisable, setIsDisable] = useState<boolean>(false)

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

    useEffect(() => {
        if (up === down || up < 0 || down < 0 || up < down) {
            setErrOrEnter(true)
        } else {
            setErrOrEnter(false)
        }
    }, [up, down])

    const inc = () => {
        const newCount = num + 1
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
        setIsDisable(true)
        // localStorage.setItem('up_limit', JSON.stringify(value))
    }
    const onChangeDown = (value: number) => {
        setDown(value)
        setIsDisable(true)
        // setNum(value)
        // localStorage.setItem('down_limit', JSON.stringify(value))
        // localStorage.setItem('count', JSON.stringify(value))
    }
    const set = () => {
        localStorage.setItem('up_limit', JSON.stringify(up))
        localStorage.setItem('down_limit', JSON.stringify(down))
        localStorage.setItem('count', JSON.stringify(down))
        setNum(down)
        setIsDisable(false)
    }


    return (
        <div className="App flex">
            <div className="block">
                <Field callback={onChangeUp} value={up} err={errOrEnter}/>
                <Field callback={onChangeDown} value={down} err={errOrEnter}/>
                <Button name={'set'} callback={set} isDisable={errOrEnter}/>

            </div>

            <div className={"block"} style={{width: 100}}>
                <Display up={up} num={num} settingMode={isDisable} errMode={errOrEnter}/>
                <div>
                    <Button name={'inc'} callback={inc} isDisable={num === up || isDisable}/>
                    <Button name={'res'} callback={res} isDisable={isDisable}/>
                </div>
            </div>

        </div>
    );
}

export default App;
