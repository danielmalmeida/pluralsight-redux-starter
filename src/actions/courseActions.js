import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
import { beginAjaxCall } from './ajaxStatusActions';

export function loadCoursesSuccess(courses) {
    return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function updateCouseSucess(course) {
    return { type: types.UPDATE_COURSES_SUCCESS, course };
}

export function createCouseSucess(course) {
    return { type: types.CREATE_COURSES_SUCCESS, course };
}

export function loadCourses() {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return courseApi.getAllCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
            throw (error);
        });
    };
}

export function saveCourse(course) {
    return function (dispatch, getState) {
        dispatch(beginAjaxCall());
        return courseApi.saveCourse(course).then(savedCourse => {
            savedCourse.id
                ? dispatch(updateCouseSucess(savedCourse))
                : dispatch(createCouseSucess(savedCourse));
        }).catch(error => {
            throw (error);
        });
    };
}