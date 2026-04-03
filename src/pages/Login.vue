<script setup lang="ts">
import { ref } from 'vue';
import Button from '../components/Button.vue';
import Input from '../components/Input.vue';
import Header from '../shared/Header.vue';
import { useAuthStore } from '../stores/auth';
import { signIn } from '../services/api'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')
const loading = ref(false)
const auth = useAuthStore()


async function handleLogin() {
  loading.value = true

  try {
    const data = await signIn({
      user: email.value,
      password: password.value,
    })

    auth.setToken(data.access_token)
    router.push('/dashboard')
  } catch (err) {
    console.error(err)
  } finally {
    loading.value = false
  }
}
</script>

<template>
    <div class="h-screen">
        <Header></Header>
        <div class="bg-violet-500 h-full flex items-center justify-center text-2xl">
            <form @submit.prevent="handleLogin" class="flex flex-col gap-4">
                <h2 class="font-bold text-white">Login</h2>
                <Input v-model="email" class="placeholder:text-sm" placeholder="Email" id="email" name="email" required></Input>
                <Input v-model="password" class="placeholder:text-sm" placeholder="Password" id="password" name="password" type="password" required></Input>
                <Button class="bg-violet-600 justify-center" :label="loading ? 'Entrando...' : 'Entrar'" />
            </form>
        </div>
    </div>

</template>