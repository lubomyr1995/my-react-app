import {apiService} from "./api.service";
import {tokens, urls} from "../constants";

const authService = {
    login: (userCredential) => apiService.post(urls.auth.login, userCredential),
    refresh: async function (refresh) {
        const response = await apiService.post(urls.auth.refresh, {refresh})
        if (response.status === 200) {
            this.setTokens(response.data)
        }
    },
    me: () => apiService.get(urls.auth.me),

    setTokens: ({access, refresh}) => {
        localStorage.setItem(tokens.accessToken, access)
        localStorage.setItem(tokens.refreshToken, refresh)
    },
    getAccessToken: () => localStorage.getItem(tokens.accessToken),
    getRefreshToken: () => localStorage.getItem(tokens.refreshToken),
    deleteTokens: () => {
        localStorage.removeItem(tokens.accessToken)
        localStorage.removeItem(tokens.refreshToken)
    },
    isAuthenticated: () => !!localStorage.getItem(tokens.accessToken)
};

export {authService};