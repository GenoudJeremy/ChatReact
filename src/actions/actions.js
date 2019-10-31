let nextMessageID = 0;
export const addMessage = ( username,message) => ({
    type: 'ADD_MESSAGE',
    message,
    username,
    id: nextMessageID++
});
export const deleteMessage = ( id ) => ({
    type: 'DELETE_MESSAGE',
    id: id
})
