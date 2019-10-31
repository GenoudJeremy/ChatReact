
/*const messages = (state = [], action) => {
    switch (action.type) {
        case('ADD_MESSAGE'):
            return [
                ...state,
                {
                    id: action.id,
                    message: action.message,
                    auteur: action.auteur,
                }
            ];
        case('LOAD_MESSAGES_PENDING'):
            return [
                ...state,{pending: true}
            ]
        case('LOAD_MESSAGES_SUCCESS'):
            return [
                ...state,{
                id: action.id,
                message: action.messages.message,
                auteur: action.messages.username,
                pending: false}
            ]
        case('LOAD_MESSAGES_ERROR'):
            return [
                ...state,{
                    id: action.id,
                    error: action.error}
            ]
        default:
            return state
    }
};*/
const messages = (state = [], action) => {
    switch(action.type){
        case 'ADD_MESSAGE':
            return [
                ...state,
                {
                    id: action.id,
                    message: action.message,
                    username: action.username,
                }
            ];
        case 'SEND_MESSAGE':
            return [
                ...state,
                {
                    id: action.id,
                    message: action.message,
                    username: action.username,
                }
            ];
        case 'DELETE_MESSAGE':
            return state.filter((data, id) => id !== action.id)
        case 'UPDATE_MESSAGE':
        default:
            return state
    }
};
export default messages
