import {ref, onMounted, computed} from "vue";
import {defineStore} from "pinia";
import {useRouter} from "vue-router";
import AuthAPI from "../Api/AuthApi.js";

export const useUserStore = defineStore('user', () => {

    const router = useRouter();
    const user = ref({});

    onMounted(async () => {
        try {
            const { data } = await AuthAPI.me();
            user.value = data.data.user;
        } catch (error) {
            console.log(error)
        }
    });


    const getUserName = computed(() =>  user.value?.name ? user.value?.name : '' );


    async function logout () {
        try {
            const { data } = await AuthAPI.logout();
            localStorage.removeItem('AUTH_TOKEN');
            user.value = {};
            router.push({name: 'login'});
        } catch (error) {
            console.log(error)
        }
    }

    return {
        user,
        getUserName,
        logout
    }
})