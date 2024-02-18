<script setup>
  import {computed} from "vue";

  const props = defineProps({
    item: Object
  });

  const itemMissing = computed(() => {
    return props.item.quantity - props.item.product.stock;
  });

</script>

<template>
  <div>
    <p>
      <span class="text-gray-500 font-black">{{item.product.name}} <i v-if="itemMissing > 0"  class="fas fa-exclamation-triangle" style="color: orange;"></i></span>
    </p>
    <p class="text-blue-500 font-black">
      - Cantidad pedida que puede ser alistada:
      <span class="text-gray-500 font-black">
        {{item.quantity}}
      </span>
    </p>
    <p class="text-blue-500 font-black">
      - En inventario hay:
      <span class="text-gray-500 font-black">
         <span class="text-gray-500 font-black">{{item.product.stock}}</span>

      </span>
      <ul v-if="itemMissing > 0" class="list-disc ml-4">
        <p class="text-gray-500 font-black">Se debe solicitar {{itemMissing}} unidades de producto a los siguientes proveedores:</p>
        <li v-for="supplier in item.product.suppliers">
          {{supplier.name}}
          <ul>
            <li class="text-gray-500 font-black">
              {{ supplier.mobile }}
            </li>
            <li class="text-gray-500 font-black">
              {{ supplier.email }}
            </li>
          </ul>
        </li>
      </ul>
    </p>
  </div>
</template>
