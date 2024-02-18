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

      <table class="w-full">
        <thead class="bg-gray-50">
        <tr>
          <th
              scope="col"
              class="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
          >
            Nombre
          </th>
          <th
              scope="col"
              class="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
          >
            Cantidad pedida
          </th>
          <th
              scope="col"
              class="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase"
          >
            En inventario hay
          </th>
          <th
              scope="col"
              class="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase"
          >
            Proveedores
          </th>
        </tr>
        </thead>
          <tbody class="divide-y divide-gray-200">
            <tr v-for="item in store.order.items">
              <td
                  class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap"
              >
                {{ item.product.name }}  <i v-if="(item.quantity > item.product.stock)"  class="fas fa-exclamation-triangle" style="color: orange;"></i>
              </td>
              <td
                  class="px-6 py-4 text-sm font-bold text-center whitespace-nowrap"
              >
                {{item.quantity}}
              </td>
              <td
                  class="px-6 py-4 text-sm font-bold text-center whitespace-nowrap"
              >
                {{item.product.stock}}
              </td>
              <td
                  class="px-6 py-4 text-sm font-bold text-right whitespace-nowrap"
                  v-if="(item.quantity > item.product.stock)"
              >
                <ul class="">
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
              </td>
            </tr>
          </tbody>
      </table>
      <br>
    </div>
  </div>
</template>
