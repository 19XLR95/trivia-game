import React from "react";

export default class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button disabled={this.props.disabled && true} className={this.props.classes} onClick={() => {this.props.onClick(...this.props.onClickParam)}}>
                {this.props.buttonName}
            </button>
        );
    }
}
