import { applyMiddleware, createStore } from 'redux';
import axios from 'axios';//xhr request
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

const initialState = {
    fetching: false,
    fetched: false,
    users: [],
    error: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_USERS_PENDING':
            return Object.assign(state, { fetching: true });
        case 'FETCH_USERS_REJECTED':
            return Object.assign(state, { fetching: false, error: action.payload });
        case 'FETCH_USERS_FULFILLED':
            return Object.assign(state, {
                fetching: false,
                fetched: true,
                users: action.payload.data
            });
    }
	return state;
}

const middleware = applyMiddleware(promise(), logger());
const store = createStore(reducer, middleware);

//Using redux promise middleware
store.dispatch({
    type: 'FETCH_USERS',
    payload: axios.get('http://rest.learncode.academy/api/wstern/users')
})

/*
//Using Thunk and async
store.dispatch((dispatch) => {
    dispatch({ type: 'FETCH_USERS_START' });
    axios.get('http://rest.learncode.academy/api/wstern/users')
        .then((response) => {
            dispatch({ type: 'RECEIVE_USERS', payload: response.data });
        })
        .catch((err) => {
            dispatch({ type: 'FETCH_USERS_ERROR', payload: err });
        })
    //do somthing async

});
*/
