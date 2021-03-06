import expect from 'expect';
import * as courseActions from './courseActions';
import * as types from './actionTypes';

describe('Course Actions', () => {
    describe('createCouseSucess', () => {
        it('should create a CREATE_COURSES_SUCCESS action', () => {
            //arrange
            const course = { id: 'clean-code', title: 'Clean Code' };
            const expectedAction = {
                type: types.CREATE_COURSES_SUCCESS,
                course
            };

            //act
            const action = courseActions.createCouseSucess(course);

            //assert
            expect(action).toEqual(expectedAction);
        });
    });
});