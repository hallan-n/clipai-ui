<script setup lang="ts">
const emit = defineEmits(['update:modelValue'])

defineProps<{
  modelValue: string
}>()
</script>
<template>
  <input
    :value="modelValue"
    @input="e => emit('update:modelValue', (e.target as HTMLInputElement).value)"
    v-bind="$attrs"
    class="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500 bg-violet-300"
  />
</template>