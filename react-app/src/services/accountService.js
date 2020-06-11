import { BehaviorSubject } from 'rxjs';

import { httpClient, history } from '../utils';

const userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')));
const baseUrl = `${process.env.REACT_APP_API_URL}/accounts`;

export const accountService = {
    login,
    logout,
    register,
    verifyEmail,
    forgotPassword,
    validateResetToken,
    resetPassword,
    getAll,
    getById,
    create,
    update,
    delete: _delete,
    user: userSubject.asObservable(),
    get userValue () { return userSubject.value }
};

function login(email, password) {
    return httpClient.post(`${baseUrl}/authenticate`, { email, password })
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user));
            userSubject.next(user);
            return user;
        });
}

function logout() {
    localStorage.removeItem('user');
    userSubject.next(null);
    // history.push('/account/login');
}

function register(params) {
    return httpClient.post(`${baseUrl}/register`, params);
}

function verifyEmail(token) {
    return httpClient.post(`${baseUrl}/verify-email`, { token });
}

function forgotPassword(email) {
    return httpClient.post(`${baseUrl}/forgot-password`, { email });
}

function validateResetToken(token) {
    return httpClient.post(`${baseUrl}/validate-reset-token`, { token });
}

function resetPassword({ token, password, confirmPassword }) {
    return httpClient.post(`${baseUrl}/reset-password`, { token, password, confirmPassword });
}


function getAll() {
    return httpClient.get(baseUrl);
}

function getById(id) {
    return httpClient.get(`${baseUrl}/${id}`);
}

function create(params) {
    return httpClient.post(baseUrl, params);
}

function update(id, params) {
    return httpClient.put(`${baseUrl}/${id}`, params)
        .then(user => {
            // update stored user if the logged in user updated their own record
            if (user.id === userSubject.value.id) {
                // update local storage
                user = { ...userSubject.value, ...user };
                localStorage.setItem('user', JSON.stringify(user));

                // publish updated user to subscribers
                userSubject.next(user);
            }
            return user;
        });
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(id) {
    return httpClient.delete(`${baseUrl}/${id}`)
        .then(x => {
            // auto logout if the logged in user deleted their own record
            if (id === userSubject.value.id) {
                logout();
            }
            return x;
        });
}