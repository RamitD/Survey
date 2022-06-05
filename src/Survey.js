import React, { Component } from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
var uuid = require('uuid');

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC8brM9XdsZ4nC3WznSYiEgau1Ny1XMlMw",
    authDomain: "survey-b754e.firebaseapp.com",
    projectId: "survey-b754e",
    storageBucket: "survey-b754e.appspot.com",
    messagingSenderId: "352162664203",
    appId: "1:352162664203:web:9449514a6324c83c7a5c0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

class Survey extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uid: uuid.v1(),
            studentName: '',
            answer: {
                answer1: '',
                answer2: '',
                answer3: ''
            },
            isSubmitted: false
        }
        this.name = React.createRef();
        this.answer1 = React.createRef();
        this.answer2 = React.createRef();
        this.answer3 = React.createRef();
        this.nameSubmit = this.nameSubmit.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
        this.fieldSelected = this.fieldSelected.bind(this);
    }

    nameSubmit(event) {
        alert(this.name.current.value);
        this.setState({ studentName: this.name.current.value }, () => {
            console.log(this.state);
        });
    }

    fieldSelected(event) {
        var answers = this.state.answer;
        if (event.target.name === 'answer1') {
            answers.answer1 = event.target.value;
        }
        else if (event.target.name === 'answer2') {
            answers.answer2 = event.target.value;
        }
        else if (event.target.name === 'answer3') {
            answers.answer3 = event.target.value;
        }
        this.setState({ answer: answers }, () => {
            console.log(this.state);
        });
    }

    formSubmit(event) {
        // firebase
        // TODO: firebase data push and set isSubmitted to true
    }

    render() {
        var studentName;
        var questions;

        if (this.state.studentName === '' && this.state.isSubmitted === false) {
            studentName = <div>
                <h3>Hey Student, please enter your name :</h3>
                <form onSubmit={this.nameSubmit}>
                    <div>
                        <input className="namy" type="text" placeholder="Enter your name" ref={this.name} />
                    </div>
                </form>
            </div>;
            questions = ''
        }
        else if (this.state.studentName != '' && this.state.isSubmitted === false) {
            studentName = <div>
                <h3>Welcome {this.state.studentName}</h3>
            </div>;
            questions = <div>
                <h2>Here are some questions :</h2>
                <form onSubmit={this.formSubmit}>
                    <div className="card">
                        <label>What kind of course you like?</label><br />
                        <input type="radio" name="answer1" value="Technology" ref={this.answer1} onChange={this.fieldSelected} />Technology
                        <input type="radio" value="Design" name="answer1" ref={this.answer1} onChange={this.fieldSelected} />Design
                        <input type="radio" value="Marketing" name="answer1" ref={this.answer1} onChange={this.fieldSelected} />Marketing
                    </div>
                    <div className="card">
                        <label>Are you a :</label><br />
                        <input type="radio" name="answer2" value="Student" ref={this.answer2} onChange={this.fieldSelected} />Student
                        <input type="radio" name="answer2" value="Professional" ref={this.answer2} onChange={this.fieldSelected} />Professional
                        <input type="radio" name="answer2" value="Expert" ref={this.answer2} onChange={this.fieldSelected} />Expert
                    </div>
                    <div className="card">
                        <label>Are you satisfied with online courses</label><br />
                        <input type="radio" name="answer3" value="yes" ref={this.answer3} onChange={this.fieldSelected} />Yes
                        <input type="radio" name="answer3" value="no" ref={this.answer3} onChange={this.fieldSelected} />No
                        <input type="radio" name="answer3" value="maybe" ref={this.answer3} onChange={this.fieldSelected} />Maybe
                    </div>
                    <input type="submit" value="submit" className="feedback-button" />
                </form>
            </div>
        }
        else if (this.state.studentName != '' && this.state.isSubmitted === true) {
            studentName = <div>
                <h3>Welcome {this.state.studentName}</h3>
            </div>;
            questions = <div>
                <h2>Thanks for your feedback, {this.state.studentName}</h2>
            </div>
        }

        return (
            <div>
                <h1>Welcome to the Survey!!!</h1>
                <div>
                    {studentName}
                    ---------------------------------------------------
                    {questions}
                </div>
            </div>
        );
    }
}

export default Survey;