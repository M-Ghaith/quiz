import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Question from './Questions.jsx';


class QuestionList extends Component{
    render(){
        return(
            <div className="question ">
                {
                    this.props.questions.map(question => {
                        if(question.id == this.props.current){
                         return <Question question={question} key={question.id} {...this.props} /> }
                            }
                    )}
            </div>
        )
    }
}

export default QuestionList