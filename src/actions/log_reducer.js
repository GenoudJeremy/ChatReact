let nextMessageID = 0;
export const Login = ( username) => ({
    type: 'LOG_IN',
    username: username,
    id: nextMessageID++
});
