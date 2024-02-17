<script setup>
  import OrderItem from "./OrderItem.vue";

  defineProps({
    order: {
      type: Object
    }
  })
</script>

<template>
  <div class="block text-blue-500 bg-white p-5 space-y-4 rounded-lg">
    <p class="text-blue-500 font-black">
      ID: <span class="text-gray-500">{{order.id}}</span>
    </p>
    <p class="text-blue-500 font-black">
      Subtotal: <span class="text-gray-500">{{order.subtotal}}</span>
    </p>
    <div class="text-blue-500  font-black">
      Prioridad: <span class="text-gray-500">{{order.priority}}</span>
    </div>
    <p class="text-lg font-black">Items:  </p>
    <OrderItem
        v-for="product in order.items"
        :key="product.id"
        :item="product"
        class="text-gray-500 font-black"
    />
    <button
        class="p-3 text-gray-200 uppercase text-xs font-black rounded-lg bg-blue-700"
    >
      Ver orden
    </button>
  </div>
</template>