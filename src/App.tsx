import React, {useState} from 'react';
import './App.css';
import {Field} from "./Components/Field";
import {Button} from "./Components/Button";

function App() {
    const [num, setNum] = useState(0)
    const [up, setUp] = useState(4)
    const [value, setValue] = useState<number>(() =>Number(localStorage.getItem('counterValue')) || 0)

    const inc = () => num < up && setNum(num + 1)
    const res = () => setNum(0)
    // const set = () => setUp()
    const onChange = (title: string) => setUp(+title)

    return (
        <div className="App flex">
            <div>
                <Field callback={onChange}/>
                {/*<Button name={'set'} callback={set}/>*/}
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
