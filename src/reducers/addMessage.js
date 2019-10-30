
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
    if (action.type === 'ADD_MESSAGE'){
        return [
            ...state,
            {
                id: action.id,
                message: action.message,
                auteur: action.auteur,
            }
        ];

    }else
        return state
}
export default messages
