import React from "react";
import Lottie from "react-lottie";
import ErrorAnim from "../../../assets/error-anim.json";
import Button from "./Button";

export default class GameError extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            errorAnimConfig: {
                animationData: ErrorAnim,
                loop: true,
                rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice'
                }
            }
        };
    }

    render() {
        return (
            <div>
                <Lottie isClickToPauseDisabled={true} options={this.state.errorAnimConfig} width={200} height={200} />
                <p>{this.props.errorMessage}</p>
                <Button buttonName="Home" classes="medium fail" 
                    onClick={this.props.onClick} onClickParam={this.props.onClickParam} />
            </div>
        );
    }
}
