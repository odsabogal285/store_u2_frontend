<script setup>
  import {useUserStore} from "../../stores/user.js";
  import {useRoute} from "vue-router";
  import {useOrderStore} from "../../stores/orders.js";

  const user = useUserStore();
  const route = useRoute();
  const orders = useOrderStore();

</script>

<template>
  <div class="flex justify-between">
    <h1 class="text-2xl lg:text-6xl font-black text-white">Store U2</h1>
    <div class="flex flex-col space-y-5">
      <div class="flex gap-2 items-center justify-end">
        <p class="text-white text-right">Hola: {{ user.getUserName }}</p>
        <button
            type="button"
            class="bg-red-600 hover:bg-red-700 p-2 text-white uppercase text-xs font-extrabold rounded-lg "
            @click="user.logout()"
        >
          Cerrar Sesión
        </button>
      </div>
      <nav class="flex gap-2 items-center justify-end">
        <RouterLink
            class="p-3 text-gray-200 uppercase text-xs font-black rounded-lg bg-blue-700"
            :class="route.name === 'my-orders' ? 'bg-blue-700' : 'bg-gray-800' "
            :to="{name: 'my-orders'}"
            @click="orders.resetOrders"
        >
          Consultar por fecha
        </RouterLink>
        <RouterLink
            :to="{name: 'search-order-id'}"
            class="p-3 text-gray-200 uppercase text-xs font-black rounded-lg bg-blue-700"
            :class="route.name === 'search-order-id' ? 'bg-blue-700' : 'bg-gray-800'"
            @click="orders.resetOrders"
        >
          Consultar por ID
        </RouterLink>
      </nav>
    </div>
  </div>
  <main>
    <RouterView/>
  </main>
</template>