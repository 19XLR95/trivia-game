import React from "react";
import * as GameUtils from "../../utils/GameUtils";

export default class RadioButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <select defaultValue={this.props.options[0].name} 
                disabled={this.props.disabled}
                onChange={(event) => {this.props.onChanged(event.target.value)}}>
                {
                    this.props.options.map(
                        (e, i) => <option
                            key={GameUtils.randomKey()}
                            value={JSON.stringify(e)}>
                                {e.name}
                            </option>
                    )
                }
            </select>
        );
    }
}
