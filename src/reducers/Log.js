const log = (state = [], action) => {
    switch (action.type){
        case('LOG_IN'):
            return [
                ...state,
                {
                    username: action.username,
                }
            ];
        case('LOG_OUT'):
            return [
                ...state,
                {
                    username: action.username,
                }
            ];
        default:
            return state
    }
};
export default log
