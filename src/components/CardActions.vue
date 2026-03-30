<script setup>
import { useWishlistStore } from '@/stores/wishlistStore';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

const store = useWishlistStore()

const props = defineProps({
    name: String,
    endpoint: String,
    image: String
})

const { t } = useI18n()

const router = useRouter()

const getItemDetail = (itemType, itemName) => {
	router.push({
		name: itemType.split('/')[0] + '-detail',
		params: { name: itemName },
	})
}

const wishlistButtonText = (name) => {
  	return t('wishlist.' + store.isInWishlist(name))
}

</script>

<template>
    <div class="card-actions">
        <button @click="store.toggleWishlist(props.name, props.endpoint, props.image)" class="btn-action btn-wishlist">
            <span class="emoji">✨</span>
            <span class="text">{{ wishlistButtonText(props.name) }}</span>
            <span class="emoji">✨</span>
        </button>
        <button @click="getItemDetail(props.endpoint, props.name)" class="btn-action btn-info">
            <span class="emoji">🙀</span>
            <span class="text">{{ t('items.infos') }}</span>
            <span class="emoji">🙀</span>
        </button>
    </div>
</template>

<style scoped>

.card-actions {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 0 15px 20px 15px; /* On ajoute du padding sur les côtés et en bas */
}

.btn-action {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 10px 15px;      /* Un peu moins de padding vertical */
    border-radius: 50px;
    font-weight: 700;
    font-size: 0.9rem;       /* On réduit légèrement la taille du texte */
    cursor: pointer;
    border: none;
    width: 100%;             /* Pour qu'ils fassent la même largeur */
    box-sizing: border-box;  /* Important pour que le padding ne dépasse pas */
    white-space: nowrap;     /* Empêche le texte de revenir à la ligne */
}
/* Bouton Wishlist (Couleur douce) */
.btn-wishlist {
    background-color: #fdf6e3; /* Beige crème */
    color: #8b5e3c;            /* Marron chaud */
    border: 2px solid #e2d1b3;
}

/* Bouton Info (Un peu plus contrasté) */
.btn-info {
    background-color: #e3f2fd; /* Bleu très clair */
    color: #4a90e2;            /* Bleu doux */
    border: 2px solid #bcdffb;
}

/* Effet au survol */
.btn-action:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 0 rgba(0, 0, 0, 0.05);
    filter: brightness(1.02);
}

/* Effet "clic" (s'enfonce) */
.btn-action:active {
    transform: translateY(3px);
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
}

.emoji {
    font-size: 1.1rem;
    flex-shrink: 0;          /* Empêche l'emoji de s'écraser */
}

/* Le texte au milieu */
.text {
    flex-grow: 1;            /* Prend l'espace restant */
    text-align: center;
}
</style>