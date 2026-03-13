<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>


<template>
    <nav class="navbar">
    <router-link to="/" class="navlink">{{ t('nav.home') }}</router-link>
    <router-link to="/fishes" class="navlink">{{ t('nav.fishes') }}</router-link>
    <router-link to="/bugs" class="navlink"> {{ t('nav.bugs') }}</router-link>
    <router-link to="/fossils" class="navlink"> {{ t('nav.fossils') }} </router-link>
    <router-link to="/gyroids" class="navlink">{{ t('nav.gyroids') }}</router-link>
    <router-link to="/arts" class="navlink">{{ t('nav.arts') }}</router-link>
    <router-link to="/items" class="navlink">{{ t('nav.items') }}</router-link>

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