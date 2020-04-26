import React from "react";
import GameStats from "./GameStats";
import GameQuestions from "./GameQuestions";
import GameStates from "../../constants/GameStates";
import getQuestions from "../../api/OpenTriviaAPI";
import Lottie from "react-lottie";
import LoadingAnim from "../../../assets/loading-anim.json";

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
    }

    changeGameState(newGameState = GameStates.ANSWER_RESULT) {
        this.setState({
            gameState: newGameState
        });
    }

    componentDidMount() {
        getQuestions(
            (questions) => {
                console.log(questions);
                this.setState({
                    gameState: GameStates.GAME
                });
            }, {
                amount: 10,
                type: "multiple"
            }
        );
    }

    render() {
        return (
            <div id="game">
                <GameStats />
                {
                    this.state.gameState == GameStates.GAME ?
                        <GameQuestions /> :
                        <div><Lottie options={this.state.loadingAnimConfig} width={300} height={300} /></div>
                }
            </div>
        );
    }
}
