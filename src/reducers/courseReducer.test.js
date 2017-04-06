import expect from 'expect';
import courseReducer from './courseReducer';
import * as actions from '../actions/courseActions';

describe('Course Reducer', () => {
    it('should add course when passed CREATE_COURSES_SUCCESS', () => {
        //arrange
        const initialState = [
            { title: 'A' },
            { title: 'B' }
        ];
        const newCourse = { title: 'C' };
        const action = actions.createCouseSucess(newCourse);

        //act
        const newState = courseReducer(initialState, action);

        //assert
        expect(newState.length).toBe(3);
        expect(newState[0].title).toBe('A');
        expect(newState[1].title).toBe('B');
        expect(newState[2].title).toBe('C');

    });

    it('should add course when passed CREATE_UPDATE_SUCCESS', () => {
        //arrange
        const initialState = [
            { id: 'A', title: 'A' },
            { id: 'B', title: 'B' },
            { id: 'C', title: 'C' }
        ];
        const course = { id: 'C', title: 'new title' };
        const action = actions.updateCouseSucess(course);

        //act
        const newState = courseReducer(initialState, action);
        const updatedCourse = newState.find(a => a.id == course.id);
        const untouchedCourse = newState.find(a => a.id == 'A');

        //assert
        expect(updatedCourse.title).toBe('new title');
        expect(untouchedCourse.title).toBe('A');
        expect(newState.length).toBe(3);

    });
});