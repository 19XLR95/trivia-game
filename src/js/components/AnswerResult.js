import React from "react";
import Lottie from "react-lottie";
import SuccessAnim from "../../../assets/success-anim.json";
import FailAnim from "../../../assets/fail-anim.json";
import Button from "./Button";

export default class AnswerResult extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            successAnimConfig: {
                animationData: SuccessAnim,
                loop: false,
                rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice'
                }
            },
            failAnimConfig: {
                animationData: FailAnim,
                loop: false,
                rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice'
                }
            }
        };
    }

    render() {
        return (
            <div>
                <Lottie options={this.state.failAnimConfig} width={200} height={200} />
                <p>Correct!</p>
                <p>You have earned 100 points</p>
                <p>Total: 300 points</p>
                <Button buttonName="Next Question" classes="medium success" />
            </div>
        );
    }
}
