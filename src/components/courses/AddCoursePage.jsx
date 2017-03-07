import React,{PropTypes} from 'react';
import {connect} from 'react-redux';


class AddCoursePage extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state={
            'course':{'courseName':''}
        }
        this.onTitleChange = this.onTitleChange.bind(this);
        this.updateText = this.updateText.bind(this);
        // this.onSaveText = props.onSaveText.bind(this);
    }
    onTitleChange(event) {
        const course = this.state.course;
        course.courseName = event.target.value;
        this.setState({course});
    }
    updateText(){
        this.props.onSaveText(this.state.course);
    }

    render(){
        return(
            <div>
                <h2> Add Course </h2>
                <input type="text" onChange={this.onTitleChange} value={this.state.course.courseName} />
                <input type="submit" value="Save" onClick={this.updateText}/>
            </div>
        );
    }
}

export default AddCoursePage;
