import React from "react";
import { useGame } from "../../GameContext";

const Prompt = () => {
    const {
        gameOver,
        submitStatus
    } = useGame();

    let promptMessage = '😓';

    if (gameOver) {
        promptMessage = 'Game is over!';
    } 
    else if (submitStatus == 'win') {
        promptMessage = 'Congratulations! Would you like to try again?';
    } 

    else if (submitStatus == 'short') {
        promptMessage = 'Word length is invalid.';
    }

    else if (submitStatus == 'invalid') {
        promptMessage = 'Word is invalid.';
    }


    // Use promptMessage here, not hintMessage
    return <div className="prompt">{promptMessage}</div>;
};

export default Prompt;