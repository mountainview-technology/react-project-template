//output the state and action dispathed to console
function consoleMiddleware({getState, dispatch}){
    return function(next){
        return function(action){
            console.log(getState(), action);
            return next(action);
        }
    }
}

export default consoleMiddleware;