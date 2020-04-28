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
            this.props.answerResult ? 
                <div>
                    <Lottie isClickToPauseDisabled={true} options={this.state.successAnimConfig} width={200} height={200} />
                    <p>Correct!</p>
                    <p>You have earned {this.props.currentEarnedPoint} points.</p>
                    <p>Total: {this.props.totalPoint} points</p>
                    <Button buttonName="Next Question" classes="medium success" 
                        onClick={this.props.correctOnClick} onClickParam={this.props.correctOnClickParam} />
                </div> :
                <div>
                    <Lottie isClickToPauseDisabled={true} options={this.state.failAnimConfig} width={200} height={200} />
                    <p>Wrong!</p>
                    <p>But don't worry, let's try again.</p>
                    <p>Total: {this.props.totalPoint} points</p>
                    <Button buttonName="Try Again" classes="medium fail" 
                        onClick={this.props.wrongOnClick} onClickParam={this.props.wrongOnClickParam} />
                </div>
        );
    }
}
