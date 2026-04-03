<script setup lang="ts">
  
  function getColor(color: string | undefined) {
    switch (color) {
      case 'primary':
        return 'cursor-pointer bg-violet-500 hover:bg-violet-700 text-white';
      case 'secondary':
        return 'cursor-pointer hover:bg-white/5 hover:text-gray-200 text-white';
      default:
        return 'cursor-pointer bg-violet-500 hover:bg-violet-700 text-white';
    }

  }

  interface Props {
    label?: string,
    icon?: string,
    color?: string
  }
  defineProps<Props>()

</script>

<template>
  <button v-bind="$attrs" :class="getColor(color)" class="flex items-center gap-2 font-bold py-2 px-5 rounded">
    <span v-if="icon" class="material-symbols-outlined">{{ icon }}</span>
    {{ label }}
    <slot />
  </button>
</template>