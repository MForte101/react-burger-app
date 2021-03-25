import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';

describe('auth render', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/'
        });
    });

    it('should store the token upon login', () => {
        expect(reducer({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/', 
        }, {type: actionTypes.AUTH_SUCCESS,
        idToken: 'a-token',
        userId: 'a-user'})).toEqual({
            token: 'a-token',
            userId: 'a-user',
            error: null,
            loading: false,
            authRedirectPath: '/'
        })
    })
})