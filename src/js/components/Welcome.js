import React from "react";
import Button from "./Button";
import X from "../../../assets/X.png";

export default class Welcome extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div id="welcome">
                <img src={X} style={{width: "128px", height: "auto", maxWidth: "100%"}} />
                <h1>Welcome to the best trivia game of the world!</h1>
                <Button buttonName="Start" classes="large success" onClickParam={this.props.onClickParam} onClick={this.props.onClick} />
            </div>
        );
    }
}
