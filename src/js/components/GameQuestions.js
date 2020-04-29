import React from "react";
import Button from "./Button";
import GameStates from "../../constants/GameStates";

export default class GameQuestions extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            shuffledChoices: this.shuffleChoices(props.question),
            userAnswer: -1
        };

        this.checkAnswer = this.checkAnswer.bind(this);
    }

    shuffleChoices(question) {
        return [
            {id: 0, choice: question.correct_answer, isCorrect: true},
            ...question.incorrect_answers.map((e, i) => {return {id: i + 1, choice: e, isCorrect: false};})
        ].sort((o1, o2) => Math.floor(Math.random() * 100) % 2 == 0 ? 1 : -1);
    }

    checkAnswer(answer) {
        this.setState({
            userAnswer: answer.id
        });
        
        setTimeout(
            () => {
                this.props.changeGameState(GameStates.ANSWER_RESULT, answer.isCorrect);
            }, 1500
        );
    }

    render() {
        return (
            <div>
                <p>{decodeURIComponent(this.props.question.question)}</p>
                <div>
                    {
                        this.state.userAnswer == -1 ?
                        this.state.shuffledChoices.map(
                            e => <Button
                                    key={e.id} 
                                    buttonName={decodeURIComponent(e.choice)}
                                    onClick={this.checkAnswer}
                                    onClickParam={[e]}
                                    classes="medium natural"
                                />
                        ) :
                        this.state.shuffledChoices.map(
                            e => <Button
                                    key={e.id} 
                                    buttonName={decodeURIComponent(e.choice)}
                                    onClick={this.checkAnswer}
                                    onClickParam={[e]}
                                    classes={
                                        this.state.userAnswer == e.id && !e.isCorrect ? "medium fail" : 
                                        e.isCorrect ? "medium success" : 
                                        "medium natural"
                                    } 
                                    disabled={true}
                                />
                        )
                    }
                </div>
            </div>
        );
    }
}
