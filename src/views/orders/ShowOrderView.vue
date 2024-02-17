<script setup>
  import {useOrderStore} from "../../stores/orders.js";
  import OrderItemProviders from "../../components/OrderItemProviders.vue";

  const store = useOrderStore();
</script>

<template>
  <h2 class="text-4xl font-extrabold text-white mt-10">Detalles de la Orden</h2>
  <p class="text-white text-lg mt-5"> Esta orden debe ser entregada el día {{ store.order.deliver }} </p>

  <div class="w-full bg-white flex rounded-lg">
    <div class="block text-blue-500 bg-white p-5 space-y-4 rounded-lg">
      <p class="text-blue-500 font-black">
        ID: <span class="text-gray-500">{{store.order.id}}</span>
      </p>
      <p class="text-blue-500 font-black">
        Subtotal: <span class="text-gray-500">{{store.order.subtotal}}</span>
      </p>
      <div class="text-blue-500  font-black">
        Prioridad: <span class="text-gray-500">{{store.order.priority}}</span>
      </div>
      <p class="text-lg font-black">Items:  </p>

      <ul class="list-disc ml-4">
        <li v-for="item in store.order.items">
          <OrderItemProviders
              :key="item.id"
              :item="item"
              class="text-gray-500 font-black"
          />
        </li>
      </ul>
      <br>
    </div>
  </div>
</template>
