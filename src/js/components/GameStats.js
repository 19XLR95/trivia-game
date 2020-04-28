import React from "react";

export default class GameStats extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>Question {this.props.currentQuestionNumber}/{this.props.totalQuestions}</div>
                <div>
                    <div>{this.props.totalPoint}</div>
                    <div>Points</div>
                </div>
            </div>
        );
    }
}
