import React from "react";
import Button from "./Button";

export default class GameQuestions extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>What is the title of The Allman Brothers Band instrumental used as the theme to the BBC motoring show, &#039;Top Gear&#039;?</p>
                <div>
                    <Button buttonName="Once you have their money, you never give it back." classes="medium natural" />
                    <Button buttonName="Regular Show" classes="medium natural" />
                    <Button buttonName="Rudolph the Red-Nosed Reindeer" classes="medium natural" />
                    <Button buttonName="The Amazing World of Gumball" classes="medium natural" />
                </div>
            </div>
        );
    }
}
