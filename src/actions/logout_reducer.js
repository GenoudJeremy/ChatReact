let nextMessageID = 0;
export const Logout = ( username) => ({
    type: 'LOG_OUT',
    username,
    id: nextMessageID++
});
