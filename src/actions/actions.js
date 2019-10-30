let nextMessageID = 0;
export const addMessage = ( auteur,message) => ({
    type: 'ADD_MESSAGE',
    message,
    auteur,
    id: nextMessageID++
});
