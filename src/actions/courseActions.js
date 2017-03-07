import * as types from './actionTypes';
import { makeApiRequest } from '../utils/apiRequest';
import CourseApi from '../api/mockCourseApi';


export function getCourseList(){
    return dispatch => {
        return CourseApi.getAllCourses().then(listCourses => {dispatch(loadCourseSuccess(listCourses));
        }).catch(error => {
            throw(error);
            }
        );
    };
}

export function loadCourseSuccess(listCourses){
    return {type:types.LIST_COURSES, listCourses};
}


export function createCourse(course){
    return { type:types.CREATE_COURSE, course };
}

export function getApiData(){
    return (dispatch) => {
        let apiData = {
            method:'GET',
            url:'/json',
            successCallBack:(result)=>{
                dispatch(setApiData(result));
            },
            failureCallback: (err)=>{
                dispatch(setApiData(err.errorMessage || err.message));
            }
        };
        makeApiRequest(apiData, dispatch);
    };
}

export function setApiData(response) {
	return {
		type: types.SET_API_DATA,
		response
	};
}
