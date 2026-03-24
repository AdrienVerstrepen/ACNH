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

        <select v-model="$i18n.locale" class="lang-switcher">
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
        background-color: #f6e58d;
    }

    .navbar .navlink:first-child {
        margin-right: auto;
    }

    .navlink {
        padding: 1em 1.5em;
    }
</style>