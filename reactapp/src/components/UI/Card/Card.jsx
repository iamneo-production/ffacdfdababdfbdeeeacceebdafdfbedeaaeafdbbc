import React, { useState } from "react";
import Button from '../Button/Button.jsx';
import './Card.css'

export default function Card(props) {
    const [isDis, setIsDis] = useState([0,0,0,0]);
    return <div className={"mycard mycard"+props.id}>
        <h4 className="qTitle">{props.question}</h4>
        {Object.keys(props.options).map((key, index) => {
            return <Button 
                    // options={props.options}
                    value={props.options[key]}
                    key={index} 
                    ans={index}
                    dis={isDis[index] === 1}
                    option={props.options[key]}
                    answer={props.answer} 
                    text={props.options[key]}
                    setRes={props.setRes}
                    res={props.res}
                    result='a'
                    setIsDis={setIsDis}
                    btns={props.btns}
                    setBtns={props.setBtns}
                    />
        })}
    </div>
}

// key={questionProp.questionId}
// question={questionProp.question}
// correctAnswerMarkUpdate={mockFunction}
// attempt={mockFunction}
// options={{
// option1: questionProp.option1,
// option2: questionProp.option2,
// option3: questionProp.option3,
// option4: questionProp.option4
// }}
// answer={questionProp.answer}