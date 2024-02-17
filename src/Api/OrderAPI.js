import api from "../lib/axios.js";

export default {
    getOrderByDateOrId (data) {
        return api.post('/orders-date', data);
    }
}