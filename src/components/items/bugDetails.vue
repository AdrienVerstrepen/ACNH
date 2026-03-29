<script setup>
import { onMounted, ref } from 'vue';

const props = defineProps({
    details: Object
})

</script>

<template>
    <pre>
        {{ details }}
    </pre>
    <p>
        Numéro : {{ props.details.number }}
    </p>
    <p>
        Locisation : {{ props.details.location }}
    </p>
    <p>
        Météo : {{ props.details.weather }}
    </p>
    <p>
        rarity : {{ props.details.rarity }}
    </p>
    <p>
        catchphrases : {{ props.details.catchphrases }}
    </p>
</template>

<style scoped>
</style>