
import React, {Component} from "react";
import Options from "./Option";
import './style.css'

class Question extends Component{
    render() {
        const {question, selectedOption, onOptionChange, onSubmit} = this.props;

        return(
            <div className="">
                <h3>Question {question.id}</h3>
                <h5 className="question">{question.question}</h5>
                <form onSubmit={onSubmit} className="mt-2 mb-2">
                    <Options
                        options={question.options}
                        selectedOption={selectedOption}
                        onOptionChange={onOptionChange}
                    />
                    <button type="submit" className="question-button btn btn-primary">
                        SUBMIT
                    </button>
                </form>
                
            </div>
        )
    }
}

export default Question;
