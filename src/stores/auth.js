import {defineStore} from "pinia";

export const useAuthSore = defineStore('auth', () => {

    function isAuthenticated () {
        const token = localStorage.getItem('AUTH_TOKEN');

        if (!token) {
            return false;
        }


        const tokenData = JSON.parse(atob(token.split('.')[1]));

        const expirationDate = new Date(tokenData.exp * 1000);
        const currentDate = new Date();
        if (expirationDate <= currentDate) {
            localStorage.removeItem('AUTH_TOKEN');
            return false;
        }

        return true;
    }

    return {
        isAuthenticated
    }
});