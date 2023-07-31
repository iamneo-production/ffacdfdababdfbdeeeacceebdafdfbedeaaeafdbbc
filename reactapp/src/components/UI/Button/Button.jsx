import React, { useState } from "react";
import './Button.css'

export default function Button(props) {
    const [click, setClick] = useState(false);
    function handleClick() {
        if (props.result == 'Show Results') {
            props.setStart(false);
            props.setShow(true);
            props.setResult('Start Quiz');
        } else if (props.result == 'Start Quiz') {
            props.setShow(false);
            props.setResult('Show Results');
            props.setRes(0);
            window.location.reload(false);
        }
        else  {
            if (props.option == props.answer) {
                props.setRes(props.res + 1);
            }
            props.setBtns(props.btns + 1);
            let arr = [1,1,1,1];
            arr[props.ans] = 0;
            props.setIsDis(arr);
            setClick(true);
        }
    }
    return <> 
    <button 
        disabled={props.result == 'Start Quiz' ? false : props.dis} onClick={!click ? handleClick : null}  className="qOptions">
        {props.text}
    </button>
    </>
}
