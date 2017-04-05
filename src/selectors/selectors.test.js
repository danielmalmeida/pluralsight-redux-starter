import expect from 'expect';
import { authorsFormattedForDropdown } from './selectors';

describe('Authors selectors', () => {
    describe('authorsFormattedForDropdown', () => {
        it('should return author formatted data for dropdown', () => {
            const authors = [
                { id: 'john-doe', firstName: 'john', lastName: 'doe' },
                { id: 'mike-who', firstName: 'mike', lastName: 'who' }
            ];

            const expected = [
                { value: 'john-doe', text: 'john doe' },
                { value: 'mike-who', text: 'mike who' }
            ];

            expect(authorsFormattedForDropdown(authors)).toEqual(expected);
        });
    });
});