<script setup>
  import {useOrderStore} from "../../stores/orders.js";
  import {onMounted, ref} from "vue";
  import OrderAPI from "../../Api/OrderAPI.js";
  import {useRoute} from "vue-router";

  const route = useRoute();
  const store = useOrderStore();

  const {id} = route.params;

  onMounted(async () => {
    try {
      const {data} = await OrderAPI.getOrderById(id);
      store.setOrder(data.data.order);
    } catch (error){
      console.log(error)
    }
  });
</script>

<template>
  <div class="space-y-5">
    <RouterView/>
  </div>
</template>