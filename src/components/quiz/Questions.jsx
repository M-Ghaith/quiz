import React, {Component} from 'react';
import ReactDOM from 'react-dom';
//import QuestionList from './QuestionList.jsx';

class Question extends Component {

    onChange(e){
     e.preventDefault();
     const {setCurrent, setScore, question} = this.props;
        // this is how we grab data from input onChange 
     let selected = e.target.value;

     if(selected == question.correct){
            setScore(this.props.score+1);
        }
        setCurrent(this.props.current+1);
    }

    render(){
        const {question} = this.props;
        return(
            <div className="well">
                <h3>{question.text}</h3>
                <hr/>
                <ul className="list-group">
                    {
                        this.props.question.choices.map(choice => {
                            return(
                                <li className="list-group-item" key={choice.id} >
                                    {choice.id}  &nbsp;
                                    <input type="radio" onChange={this.onChange.bind(this)} name={question.id} value={choice.id} />
                                    &nbsp; {choice.text}
                                </li>
                            )
                        })
                    }
                </ul>
                <hr/>
            </div>
        )
    }
}

export default Question