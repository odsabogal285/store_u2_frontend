import api from "../lib/axios.js";

export default {
    getOrderByDateOrId (data) {
        return api.post('/orders-date', data);
    },
    getOrderById (id) {
        return api.get(`/orders/${id}/show`);
    }
}