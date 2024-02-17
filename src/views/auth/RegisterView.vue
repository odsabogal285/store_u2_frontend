<script setup>
  import {inject} from "vue";
  import AuthApi from "../../Api/AuthApi.js";
  import {reset} from "@formkit/vue";
  import router from "../../router/index.js";

  const toast = inject('toast');

  const handleSubmit = async (formData) => {
    try {
      const {data, status} = await AuthApi.register(formData);

      if (status === 200){
        toast.open({
          message: 'Usuario creado correctamente',
          type: 'success'
        });
        reset('registerForm');
        setTimeout(() => {
          router.push({name: 'login'})
        }, 5000);
      }
    } catch (error) {
      console.log(error);
      if(error.response.status === 406 && Array.isArray(error.response.data.error)) {
        error.response.data.error.forEach(item => {
          toast.open({
            message: item,
            type: 'error'
          });
        });
      } else {
        toast.open({
          message: error.response.data.error,
          type: 'error'
        });
      }
    }
  }

</script>

<template>
  <h1 class="text-6xl font-extrabold text-white text-center mt-10"> Crea una cuenta </h1>
  <p class="text-2xl text-white text-center my-5">Crea una cuenta en AppSalon</p>
  <FormKit
      id="registerForm"
      type="form"
      :actions="false"
      incomplete-message="No se pudo enviar, revisa las notificaciones"
      @submit="handleSubmit"
  >
    <FormKit
        type="text"
        label="Nombre"
        name="name"
        placeholder="Tu nombre"
        validation="required|length:3"
        :validation-messages="{
          required: 'El nombre es obligatorio',
          length: 'El nombre es muy corto'
        }"
    />
    <FormKit
        type="email"
        label="Email"
        name="email"
        placeholder="Email de registro"
        validation="required|email"
        :validation-messages="{
          required: 'El email es obligatorio',
          email: 'Email no valido'
        }"
    />

    <FormKit
        type="password"
        label="Password"
        name="password"
        placeholder="Password de usuario - Min 6 Caracteres"
        validation="required|length:6"
        :validation-messages="{
          required: 'El password es obligatorio',
          length: 'El password debe contener al menos 6 caracteres'
        }"
    />

    <FormKit
        type="password"
        label="Repetir Password"
        name="password_confirm"
        placeholder="Repite el password"
        validation="required|confirm"
        :validation-messages="{
          required: 'Repetir password es obligatorio',
          confirm: 'Los passwords no son iguales'
        }"
    />

    <FormKit type="submit"> Crear Cuenta </FormKit>
  </FormKit>
</template>
