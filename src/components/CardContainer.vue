<script setup>
</script>
<template>
    <div class="card">
        <slot></slot>
    </div>
</template>
<style scoped>
    /* .card {
        border-radius: 45px;
        background-color: var(--card-bg-color);
        height:100%;
        display:grid;
        grid-template-rows: 1fr auto;
        transform-origin: center;
        transition:
          transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
          box-shadow 0.3s ease;
    }

    .card:hover{
        transform: scale(1.05);
        box-shadow: 0 16px 32px rgba(0, 0, 0, 0.15);
    } */
     .card {
        /* 1. Forme et Dimensions */
        aspect-ratio: 1 / 1.1; /* Un format légèrement vertical, très AC */
        border-radius: 40% / 35%; /* Crée un squircle organique et asymétrique */
        padding: 20px;
        
        /* 2. Couleurs et Bordures */
        background-color: var(--card-bg-color);
        border: 4px solid oklch(from var(--card-bg-color) calc(l - 0.05) c h);
        
        /* 3. Structure */
        height: 40%;
        display: grid;
        grid-template-rows: 1fr auto;
        gap: 10px;
        
        /* 4. L'Ombre AC (ta syntaxe oklch adaptée) */
        box-shadow: 0 12px 24px -8px oklch(from currentcolor 0.4 0.03 h / 0.12);
        
        /* 5. Animation */
        transform-origin: center;
        transition:
          transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1),
          box-shadow 0.4s ease,
          border-color 0.3s ease;
    }

    .card:hover {
        transform: scale(1.06) rotateZ(1deg); /* Un léger tilt pour le côté vivant */
        /* L'ombre s'étire quand la carte "s'élève" */
        box-shadow: 0 25px 40px -12px oklch(from currentcolor 0.3 0.05 h / 0.18);
        border-color: oklch(from var(--card-bg-color) calc(l - 0.1) c h);
    }

    /* Optionnel : Empêcher le contenu de déborder du squircle */
    :slotted(*) {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
</style>