const baseURL = process.env.REACT_APP_API;

const urls = {
    auth: {
        login: '/auth',
        refresh: '/auth/refresh',
        me: '/auth/me',
    },
    users: '/users',
    cars: '/cars'
}

export {baseURL, urls}