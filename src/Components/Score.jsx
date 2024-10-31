import React, { Component } from 'react';
import '../App.css'

class Score extends Component {
    render() {
        const { score, onNextQuestion } = this.props;

        let message = '';
        let messageColor = '';

        if (score >= 18) {
            message = 'Congrats! You did an amazing job!';
            messageColor = 'green'
        } else if (score >= 15) {
            message = 'Good job! You’re getting there!';
            messageColor = 'yellow';
        } else if (score >= 10) {
            message = 'You need improvement, but don’t worry!';
            messageColor = 'orange';
        } else if (score >= 5) {
            message = 'Best luck next time! Keep practicing!';
            messageColor = 'red';
        } else {
            message = 'You are very pathetic; you need improvement.';
            messageColor = '#B71C1C';
        }

        return (
            <div>
                <h2>Results</h2>
                <p style={{color:messageColor}}>{message}</p>
                <h4>Your score: {score}</h4>
            </div>
        );
    }
}

export default Score;
