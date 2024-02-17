import api from '../lib/axios'

export default {
    login (data) {
        return api.post('/login', data);
    },
    register (data) {
        return api.post('/register', data);
    },
    me (data) {
        return api.get('/me');
    },
    logout () {
        return api.post('/logout')
    }
}