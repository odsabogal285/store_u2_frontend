import {defineStore} from "pinia";
import {ref, onMounted, watch, computed} from "vue";
import OrderAPI from "../Api/OrderAPI.js";
import {converDate} from "../helpers/dates.js";

export const useOrderStore = defineStore('orders', () =>{

    const orders = ref([]);
    const order = ref([]);
    const dateValue = ref('');

    watch(dateValue, async () => {
        try {
            if(dateValue.value === ''){
                return
            }
            const {data} = await OrderAPI.getOrderByDateOrId({
                date:  converDate(dateValue.value)
            });
            orders.value = data.data.orders
        } catch (error) {
            console.log(error)
        }
    });

    function resetOrders () {
        orders.value = [];
        dateValue.value = '';
    }

    function setOrder (fromOrder) {
        order.value = fromOrder;
    }

    async function getOrdersForID (formData) {
        try {

            const {data} = await OrderAPI.getOrderByDateOrId({
                order_id:  formData.order_id
            });

            orders.value = data.data.orders

        } catch (error) {
            console.log(error)
        }
    }


    return {
        orders,
        dateValue,
        order,
        resetOrders,
        getOrdersForID,
        setOrder
    }
});