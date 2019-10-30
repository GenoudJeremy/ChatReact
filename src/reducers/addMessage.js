const messages = (state = [], action) => {
    if (action.type === 'ADD_MESSAGE') {
        return [
            ...state,
            {
                id: action.id,
                message: action.message,
                auteur: action.auteur
            }
        ];
    } else {
        return state
    }
};
export default messages
