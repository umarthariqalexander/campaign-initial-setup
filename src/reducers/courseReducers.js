import * as types from '../actions/actionTypes';

export default function courseReducer(state={},action){
    switch(action.type){
        case types.CREATE_COURSE:
            return Object.assign({}, action.course);
        // case types.SET_API_DATA:
        //     return Object.assign({}, action.response);
        // case types.LIST_COURSES:
        //     return action.listCourses;
        default:
            return state;
    }
}
