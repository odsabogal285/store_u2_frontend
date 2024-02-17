<script setup>
  defineProps({
    item: Object
  })

</script>

<template>
  <div>
    <p>
      <span class="text-gray-500 font-black">{{item.product.name}} </span>
    </p>
    <p class="text-blue-500 font-black">
      - Cantidad pedida:
      <span class="text-gray-500 font-black">
      {{item.quantity}} / Stock: <span class="text-gray-500 font-black">{{item.product.stock}}</span>
    </span>
    </p>
  </div>
</template>
