import React from "react";
import Welcome from "./Welcome";
import GameStates from "../../constants/GameStates";
import Game from "./Game";
import GameConstants from "../../constants/GameConstants";

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            gameState: GameStates.WELCOME,
            params: GameConstants.DEFAULT_QUERY
        };

        this.changeGameState = this.changeGameState.bind(this);
        this.changeParams = this.changeParams.bind(this);
    }

    changeGameState(newGameState = GameStates.WELCOME) {
        this.setState({
            gameState: newGameState
        });
    }

    changeParams(params) {
        this.setState({
            params: params
        });
    }

    render() {
        return (
            this.state.gameState == GameStates.WELCOME ? 
                <Welcome onClickParam={[GameStates.FETCHING_QUESTIONS]} onClick={this.changeGameState} 
                    changeParams={this.changeParams} /> : 
                <Game onClickParam={[GameStates.WELCOME]} onClick={this.changeGameState} params={this.state.params} />
        );
    }
}
