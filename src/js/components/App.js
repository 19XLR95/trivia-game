import React from "react";
import Welcome from "./Welcome";
import GameStates from "../../constants/GameStates";
import Game from "./Game";

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            gameState: GameStates.WELCOME
        };

        this.changeGameState = this.changeGameState.bind(this);
    }

    changeGameState(newGameState = GameStates.WELCOME) {
        this.setState({
            gameState: newGameState
        });
    }

    render() {
        return (
            this.state.gameState == GameStates.WELCOME ? 
                <Welcome onClickParam={GameStates.FETCHING_QUESTIONS} onClick={this.changeGameState} /> : 
                <Game onClickParam={GameStates.WELCOME} onClick={this.changeGameState} />
        );
    }
}
