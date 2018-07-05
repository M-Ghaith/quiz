import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './quiz/QuestionList.jsx';
import Scorebox from './quiz/Scorebox.jsx';
import Result from './quiz/Results.jsx';

class App extends Component{
    constructor(props){
        super(props);
        this.state={
            questions:[
                {
                    id:1,
                    text: 'What is your name?',
                    choices: [
                        {
                            id: 'a',
                            text:'John'
                        },
                        {
                            id: 'b',
                            text:'Bob'
                        },
                        {
                            id: 'c',
                            text:'Ghaith'
                        }
                    ],
                    correct: 'c'
                },
                {
                    id:2,
                    text: 'What is your Age?',
                    choices: [
                        {
                            id: 'a',
                            text:'15'
                        },
                        {
                            id: 'b',
                            text:'26'
                        },
                        {
                            id: 'c',
                            text:'24'
                        }
                    ],
                    correct: 'b'
                },
                {
                    id:3,
                    text: 'What is your mothers name?',
                    choices: [
                        {
                            id: 'a',
                            text:'Sara'
                        },
                        {
                            id: 'b',
                            text:'Maya'
                        },
                        {
                            id: 'c',
                            text:'Dana'
                        }
                    ],
                    correct: 'a'
                },
                {
                    id:4,
                    text: 'What is your fathers name?',
                    choices: [
                        {
                            id: 'a',
                            text:'John'
                        },
                        {
                            id: 'b',
                            text:'Bob'
                        },
                        {
                            id: 'c',
                            text:'mazen'
                        }
                    ],
                    correct: 'c'
                }
            ],
            score: 0,
            current: 1
        }
    }

    setCurrent(current){
        this.setState({current})
    }
    setScore(score){
        this.setState({score})
    }
    render(){
        if(this.state.current > this.state.questions.length){
            var scorebox = '';
            var results = <Result {...this.state}/>
        }else{
            var scorebox = <Scorebox {...this.state} />;
            var results = '';
        }

        return(
            <div>
                {scorebox}
                <QuestionList {...this.state} setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)} />
                {results}
            </div>
        )
    }
}

export default App