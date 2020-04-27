import React from "react";
import GameStats from "./GameStats";
import GameQuestions from "./GameQuestions";
import GameStates from "../../constants/GameStates";
import * as OpenTriviaAPI from "../../api/OpenTriviaAPI";
import Lottie from "react-lottie";
import LoadingAnim from "../../../assets/loading-anim.json";
import AnswerResult from "./AnswerResult";

export default class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            gameState: GameStates.FETCHING_QUESTIONS,
            loadingAnimConfig: {
                animationData: LoadingAnim,
                loop: true,
                rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice'
                }
            }
        };

        this.changeGameState = this.changeGameState.bind(this);
        this.nextQuestion = this.nextQuestion.bind(this);
    }

    changeGameState(newGameState = GameStates.WELCOME, answerResult = false) {
        this.setState({
            gameState: newGameState,
            answerResult: answerResult
        });
    }

    nextQuestion() {
        this.setState(
            (prevState, prevProps) => {
                return {
                    gameState: GameStates.GAME,
                    currentQuestionIndex: ++prevState.currentQuestionIndex
                };
            }
        );
    }

    componentDidMount() {
        OpenTriviaAPI.getQuestions(
            (questions) => {
                if(questions != null && questions.response_code == OpenTriviaAPI.responseConstants.SUCCESS) {
                    this.setState({
                        gameState: GameStates.GAME,
                        questions: questions.results,
                        currentQuestionIndex: 0
                    });
                } else {
                    // TODO: questions cannot retrieved
                }
            }, {
                amount: 5,
                type: "multiple",
                difficulty: "easy",
                category: 9
            }
        );
    }

    render() {
        return (
            <div id="game">
                <GameStats />
                {
                    this.state.gameState == GameStates.FETCHING_QUESTIONS ?
                        <div><Lottie options={this.state.loadingAnimConfig} width={300} height={300} /></div> :
                    this.state.gameState == GameStates.GAME ?
                        <GameQuestions question={this.state.questions[this.state.currentQuestionIndex]} changeGameState={this.changeGameState} /> : 
                        <AnswerResult 
                            answerResult={this.state.answerResult} 
                            correctOnClick={this.nextQuestion}
                            correctOnClickParam=""
                            wrongOnClick={this.props.onClick}
                            wrongOnClickParam={this.props.onClickParam} />
                }
            </div>
        );
    }
}
