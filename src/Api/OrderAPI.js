import api from "../lib/axios.js";

export default {
    getOrderByDate (data) {
        return api.post('/orders-date', data);
    }
}