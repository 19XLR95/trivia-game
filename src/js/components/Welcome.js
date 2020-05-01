import React from "react";
import Button from "./Button";
import X from "../../../assets/X.png";
import Select from "./Select";
import GameConstants from "../../constants/GameConstants";
import * as OpenTriviaAPI from "../../api/OpenTriviaAPI";

export default class Welcome extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            questionCategories: [],
            params: GameConstants.DEFAULT_QUERY
        };

        this.updateParams = this.updateParams.bind(this);
    }

    componentDidMount() {
        OpenTriviaAPI.getQuestionCategories(
            (categories) => {
                if(categories != null && categories.trivia_categories && categories.trivia_categories.length > 0) {
                    const buildCategories = categories.trivia_categories.map(
                        e => {
                            return {
                                id: e.id,
                                name: e.name,
                                param: "category"
                            };
                        }
                    );

                    this.setState({
                        questionCategories: buildCategories
                    });
                }
            }
        );
    }

    updateParams(option) {
        this.setState(
            (prevState, prevProps) => {
                const parsedOption = JSON.parse(option);
                const updatedParams = JSON.parse(JSON.stringify(prevState.params));
                updatedParams[parsedOption.param] = parsedOption.id;

                this.props.changeParams(updatedParams);

                return {
                    params: updatedParams
                };
            }
        );
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.questionCategories.length != nextState.questionCategories.length;
    }

    render () {
        return (
            <div id="welcome">
                <img src={X} />
                <h1>Welcome to the best trivia game of the world!</h1>
                <div>
                    <Select onChanged={this.updateParams} options={GameConstants.DIFFICULTIES} disabled={false} />
                    <Select onChanged={this.updateParams} options={[...GameConstants.CATEGORIES, ...this.state.questionCategories]} disabled={this.state.questionCategories.length == 0} />
                    <Select onChanged={this.updateParams} options={GameConstants.TYPES} disabled={false} />
                    <Select onChanged={this.updateParams} options={GameConstants.AMOUNTS} disabled={false} />
                </div>
                <Button buttonName="Start" classes="large success" onClickParam={this.props.onClickParam} onClick={this.props.onClick} />
            </div>
        );
    }
}
