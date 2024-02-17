<script setup>
  import Order from "../../components/Order.vue";
  import {ref} from "vue";
  import {useOrderStore} from "../../stores/orders.js";

  const orders = useOrderStore();

</script>

<template>
  <h2 class="text-4xl font-extrabold text-white mt-10">Búsqueda de Orden por ID</h2>
  <p class="text-white text-lg mt-5"> A continuación podrás buscar uan orden por su ID </p>

  <div class="space-y-2 mt-5">
    <div class="lg:flex gap-5 items-start">
      <div class="w-full lg:w-96 flex">
        <FormKit
            id="searchFormID"
            type="form"
            :actions="false"
            incomplete-message="Valida las notificaciones"
            @submit="orders.getOrdersForID"
        >
          <FormKit
              type="text"
              label="ID:"
              name="order_id"
              placeholder="Orden ID"
              validation="required"
              :validation-messages="{
          required: 'El ID es obligatorio'
        }"
          />
          <FormKit type="submit" class="mt-2"> Buscar </FormKit>
        </FormKit>
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

</template>