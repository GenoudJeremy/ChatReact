const log = (state = {username:""}, action) => {
    switch (action.type){
        case('LOG_IN'):
            return (
                {
                    username: action.username,
                })
            ;
        case('LOG_OUT'):
            return (
                {
                    username: action.username,
                })
            ;
        default:
            return state
    }
};
export default log
