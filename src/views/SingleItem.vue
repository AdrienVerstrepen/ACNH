<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getOneItem } from '@/api/itemApiEndpoint';
import { standardize } from '@/utils/standardize';
import { useI18n } from 'vue-i18n';
import BugDetails from '@/components/items/bugDetails.vue';
import FishDetails from '@/components/items/fishDetails.vue';
import ArtDetails from '@/components/items/artDetails.vue';
import GyroidDetails from '@/components/items/GyroidDetails.vue';
import SeaCreatureDetails from '@/components/items/seaCreatureDetails.vue';
import { useWishlistStore } from '@/stores/wishlistStore';

const { t } = useI18n()

const route = useRoute();

const endpoint = ref("")

const item = ref({})

const loading = ref(true)

onMounted(async () => {
    if (route.path.split("/")[1] == "fossils") {
        endpoint.value = route.path.split("/")[1] + "/individuals"
    } else {
        route.path.split("/")[1]
    }
    const name = route.path.split('/')[2]
    const data = await getOneItem(endpoint.value, name)
    item.value = standardize(data)
    loading.value = false
})

const detailComponents = {
    bugs: BugDetails,
    fish: FishDetails,
    art: ArtDetails,
    gyroids: GyroidDetails,
    seaCreature: SeaCreatureDetails,
}

const store = useWishlistStore()

</script>

<template>
    <div v-if="loading">
        <div class="content">{{ t("sentences.loading") }}</div>
    </div>
    <div v-else>
        <div class="content">
            <div class="baseInfo">
                <img :src="item.image" class="image">
                <span><strong> {{ t(endpoint + "." + item.name)}} </strong></span>
            </div>
            <div class="price">
                Prix : {{ item.sell }} <div class="money-bag"></div>
            </div>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <component :is="detailComponents[endpoint]" v-if="detailComponents[endpoint]" :details="item.details"></component>
            <button @click="store.toggleWishlist(element.name, element.type, element.image)">{{ store.isInWishlist ? "Retirer des favs" : "ajouter aux fav"}}</button>
        </div>
    </div>
</template>

<style scoped>
    .content {
        margin-top: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .baseInfo {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 10px;
    }

    .price {
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
    }

    .money-bag {
        background-image: var(--money-icon); 
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        display: inline-block;
        width: 32px;
        height: 32px;
        vertical-align: middle;
        margin-left: 5px;
    }
</style>
