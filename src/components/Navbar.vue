<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

import { endpoints } from '@/utils/endpoints';

const cleanedEndpoints = endpoints.map(endpoint => {
    return endpoint.split("/")[0]
})
</script>

<template>
    <nav class="navbar">
        <router-link to="/" class="navlink">{{ t('nav.home') }}</router-link>

        <router-link v-for="endpoint in cleanedEndpoints" :to="'/' + endpoint" class="navlink">{{ t('nav.' + endpoint) }}</router-link>
    
        <router-link to="/items" class="navlink">{{ t('nav.items') }}</router-link>
        <router-link to="/wishlist" class="navlink">{{ t('nav.wishlist') }}</router-link>

        <select v-model="$i18n.locale" class="lang-switcher navlink">
        <option value="fr">FR</option>
        <option value="en">EN</option>
        </select>
    </nav>
</template>

<style>
    .lang-switcher {
        margin-left: 15px;
        cursor: pointer;
    }
    
    .navbar {
        display:flex;
        flex-direction: row;
        gap: 10px;
        justify-content: space-evenly;
    }

    .navlink {
        margin: 10px;
        padding: 7px;
        background-color: #FFEEA0;
        border-radius: 10px;
        text-decoration: none;
        color: var(--card-text-color);
        box-shadow: 0 10px 20px -5px oklch(from currentcolor 0.4 0.05 h / 0.15);
        transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        display: inline-block;
    }

    .navlink:hover {
        transform: scale(1.05) translateY(-2px);
        box-shadow: 0 15px 25px -5px oklch(from currentcolor 0.4 0.05 h / 0.2);
        /* filter: brightness(1.02); */
    }
</style>