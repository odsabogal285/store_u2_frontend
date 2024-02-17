import {defineStore} from "pinia";
import {ref, onMounted, watch, computed} from "vue";
import OrderAPI from "../Api/OrderAPI.js";
import {converDate} from "../helpers/dates.js";

export const useOrderStore = defineStore('orders', () =>{

    const orders = ref({});
    const dateValue = ref('');

    watch(dateValue, async () => {
        try {
            const {data} = await OrderAPI.getOrderByDate({
                date:  converDate(dateValue.value)
            });
            orders.value = data.data.orders

        } catch (error) {
            console.log(error)
        }
    })


    return {
        orders,
        dateValue
    }
});