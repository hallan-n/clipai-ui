<script setup lang="ts">
import { ref } from 'vue';
import Button from '../components/Button.vue';
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'

const router = useRouter()
const auth = useAuthStore()
const isMenuOpen = ref(false);
const isProfileOpen = ref(false);

function toggleMenu(): void {
    isMenuOpen.value = !isMenuOpen.value;
}

function toggleProfile(): void {
    isProfileOpen.value = !isProfileOpen.value;
}

function logOut(): void {
    auth.logout()
    router.push('/')
}
</script>

<template>
    <header class="bg-violet-600">
        <nav class="mx-auto container flex items-center justify-between max-w-4xl w-full p-4">
            <ul class="hidden md:flex">
                <li>
                    <router-link to="/">
                        <Button color="secondary">Home</Button>
                    </router-link>
                </li>
                <li v-if="!auth.isAuthenticated">
                    <router-link to="/login">
                        <Button color="secondary">Login</Button>
                    </router-link>
                </li>
                <li v-if="auth.isAuthenticated">
                    <router-link to="/dashboard">
                        <Button color="secondary">Dashboard</Button>
                    </router-link>
                </li>
            </ul>
            <div class="flex md:hidden">
                <Button icon="menu" @click="toggleMenu"></Button>
                <div class="absolute top-14 rounded-lg bg-violet-800" v-if="isMenuOpen">
                    <ul class="relative p-1">
                        <li>
                            <router-link to="/">
                                <Button color="secondary">Home</Button>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/login">
                                <Button color="secondary">Login</Button>
                            </router-link>
                        </li>
                        <li v-if="auth.isAuthenticated">
                            <router-link to="/dashboard">
                                <Button color="secondary">Dashboard</Button>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="flex cursor-pointer" @click="toggleProfile">
                <div class="w-8 h-8 bg-amber-600 rounded-full"></div>
                <div class="absolute top-14 right-4 rounded-lg bg-violet-800" v-if="isProfileOpen">
                    <ul class="relative p-1">
                        <li>
                            <Button color="secondary" @click="logOut">Sair</Button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>