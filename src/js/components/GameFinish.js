import React from "react";
import Lottie from "react-lottie";
import FinishAnim from "../../../assets/finish-anim.json";
import Button from "./Button";

export default class GameFinish extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            finishAnimConfig: {
                animationData: FinishAnim,
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
                <Lottie isClickToPauseDisabled={true} options={this.state.finishAnimConfig} width={200} height={200} />
                <p>Congratulations!</p>
                <p>You finished the game successfully.</p>
                <p>Total: {this.props.totalPoint} points</p>
                <Button buttonName="Start Again" classes="medium success"
                    onClick={this.props.startAgainClick} onClickParam={this.props.startAgainClickParam} />
            </div>
        );
    }
}
