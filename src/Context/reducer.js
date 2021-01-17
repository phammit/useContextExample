import React, { useReducer } from 'react';
//import { createFalse } from 'typescript';

let user = localStorage.getItem('currentUser')
    ? JSON.parse(localStorage.getItem('currentUser')).user
    :'';
let token = localStorage.getItem('currentUser')
    ? JSON.parse(localStorage.getItem('currentUser')).auth_token
    : '';

export const initialState = {
    userDetails: '' || user,
    token: '' || token,
    loading: false,
    errorMessage: null
};

export const AuthReducer = (initalState, action) => {
    switch (action.type) {
        case "REQUEST_LOGIN":
            return {
                ...initialState,
                loading: true
            };
        case "LOGIN_SUCCESS":
            return {
                ...initalState,
                user: action.payload.user,
                token: action.payload.auth_token,
                loading: false
            };
        case "LOGOUT":
            return {
                ...initalState,
                user: "",
                token: "",
            };
        case "LOGIN_ERROR":
            return {
                ...initialState,
                loading: false,
                errorMessage: action.error
            };

        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};