<script setup>
  import {ref} from "vue";
  import {useOrderStore} from "../../stores/orders.js";
  import Order from "../../components/Order.vue";

  const orders = useOrderStore();

 import VueTailwindDatepicker from 'vue-tailwind-datepicker'

 const formatter = ref({
   date: 'DD/MM/YYYY',
   month: 'MMM'
 });

</script>

<template>
  <div>
    <h2 class="text-4xl font-extrabold text-white mt-10">Órdenes</h2>
    <p class="text-white text-lg mt-5"> A continuación podrás ver todas las órdenes por fecha </p>

    <div class="space-y-8 mt-5">
      <h3 class="text-3xl font-extrabold text-white"> Fecha</h3>
      <div class="lg:flex gap-5 items-start">
        <div class="w-full lg:w-96 bg-white flex justify-center rounded-lg">
          <VueTailwindDatepicker
              i18n="es"
              as-single
              no-input
              disable-in-range
              :formatter="formatter"
              v-model="orders.dateValue"
          />
        </div>
        <div class="flex-1 grid grid-cols-2 xl:grid-cols-2 gap-5 mt-10 lg:mt-0">
          <Order
              v-for="order in orders.orders"
              :key="order.id"
              :order="order"
          />
        </div>
      </div>
    </div>
  </div>
</template>
