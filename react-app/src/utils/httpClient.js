import {accountService} from '../services';


export const httpClient = {
    get,
    post,
    put,
    delete: _delete
};


async function get(url) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader(url)
    };
    const response = await fetch(url, requestOptions);
    return handleResponse(response);
}

async function post(url, body) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...authHeader(url) },
        body: JSON.stringify(body)
    };
    const response = await fetch(url, requestOptions);
    return handleResponse(response);
}

async function put(url, body) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', ...authHeader(url) },
        body: JSON.stringify(body)
    };
    const response = await fetch(url, requestOptions);
    return handleResponse(response);    
}

async function _delete(url) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader(url)
    };
    const response = await fetch(url, requestOptions);
    return handleResponse(response);
}


var handleResponse = (response)=>{
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        
        if (!response.ok) {
            if ([401, 403].includes(response.status)) {
                accountService.logout();
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}

function authHeader(url){
    const user = accountService.userValue;
    const isLoggedIn = user && user.token;
    const isApiUrl = url.startsWith(process.env.REACT_APP_API_URL);
    if (isLoggedIn && isApiUrl) {
        return { Authorization: `Bearer ${user.token}` };
    } else {
        return {};
    }
}
