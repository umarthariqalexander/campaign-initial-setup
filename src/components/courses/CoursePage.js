import React,{PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseListPage from './CourseListPage.jsx';
import AddCoursePage from './AddCoursePage.jsx';

class CoursePage extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state={
            courseList:['courseName','Maths','teacher','Vijay']
        };
        this.onSaveText=this.onSaveText.bind(this);
        // console.log(`CoursePage Props ${props.courses}`);
    }
    onSaveText(value) {
        this.props.courseActions.createCourse(value);
    }

    render(){
        return(
            <div>
                <h1>Course</h1>
                {this.props.courses.courseName}
                <CourseListPage courseList={this.state.courseList} name="Stateless props"/>
                <AddCoursePage onSaveText={this.onSaveText}/>
            </div>
        );
    }
}

CoursePage.propTypes = {
    courses:PropTypes.object.isRequired,
    courseActions:PropTypes.object.isRequired
};

function mapStateToProps(state,ownProps) {
    return{
        courses:state.courses
    };
}

function mapDispatchToProps(dispatch) {
    return {
        courseActions:bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
