import React from "react";
import GameStats from "./GameStats";
import GameQuestions from "./GameQuestions";
import GameStates from "../../constants/GameStates";
import * as OpenTriviaAPI from "../../api/OpenTriviaAPI";
import Lottie from "react-lottie";
import LoadingAnim from "../../../assets/loading-anim.json";
import AnswerResult from "./AnswerResult";
import GameFinish from "./GameFinish";
import GameConstants from "../../constants/GameConstants";

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
            },
            totalPoint: 0,
            questions: null,
            currentQuestionIndex: 0,
            currentEarnedPoint: 0
        };

        this.changeGameState = this.changeGameState.bind(this);
        this.nextQuestion = this.nextQuestion.bind(this);
    }

    changeGameState(newGameState = GameStates.WELCOME, answerResult = false) {
        this.setState(
            (prevState, prevProps) => {
                const earnedPoint = answerResult ? GameConstants.POINTS[prevState.questions[prevState.currentQuestionIndex].difficulty] : 0

                return {
                    gameState: newGameState,
                    answerResult: answerResult,
                    totalPoint: prevState.totalPoint + earnedPoint,
                    currentEarnedPoint: earnedPoint
                };
            }
        );
    }

    nextQuestion() {
        this.setState(
            (prevState, prevProps) => {
                if(prevState.questions.length == (prevState.currentQuestionIndex + 1)) {
                    return {
                        gameState: GameStates.FINISHED
                    };
                } else {
                    return {
                        gameState: GameStates.GAME,
                        currentQuestionIndex: ++prevState.currentQuestionIndex
                    };
                }
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
                <GameStats 
                    totalPoint={this.state.totalPoint} 
                    currentQuestionNumber={this.state.questions ? this.state.currentQuestionIndex + 1 : 0}
                    totalQuestions={this.state.questions ? this.state.questions.length : 0} />
                {
                    this.state.gameState == GameStates.FETCHING_QUESTIONS ?
                        <div><Lottie options={this.state.loadingAnimConfig} width={300} height={300} /></div> :
                    this.state.gameState == GameStates.GAME ?
                        <GameQuestions 
                            question={this.state.questions[this.state.currentQuestionIndex]} 
                            changeGameState={this.changeGameState} /> :
                    this.state.gameState == GameStates.ANSWER_RESULT ?
                        <AnswerResult 
                            answerResult={this.state.answerResult} 
                            correctOnClick={this.nextQuestion}
                            correctOnClickParam=""
                            wrongOnClick={this.props.onClick}
                            wrongOnClickParam={this.props.onClickParam}
                            totalPoint={this.state.totalPoint}
                            currentEarnedPoint={this.state.currentEarnedPoint} /> :
                    <GameFinish startAgainClick={this.props.onClick} startAgainClickParam={this.props.onClickParam} />
                }
            </div>
        );
    }
}
