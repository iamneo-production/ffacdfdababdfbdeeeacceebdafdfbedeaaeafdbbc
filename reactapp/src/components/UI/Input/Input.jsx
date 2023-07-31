import React from "react";
import './Input.css'

export default function Banner(props) {
    return <h4 className="banner">
        You have answered {props.ans} / 5 Correctly
    </h4>
}