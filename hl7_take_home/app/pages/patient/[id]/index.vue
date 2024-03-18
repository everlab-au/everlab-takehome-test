<script setup>

const  props = useRoute()
</script>
<template>


<h1>
    user page
    {{  props.params.id }}
</h1>
</template>