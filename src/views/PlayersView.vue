<template>
	<div class="container">
		<div class="is-flex is-justify-content-space-between is-align-items-center">
			<h2 class="is-size-2">Jogadores</h2>
			<button class="button">Adicionar</button>
		</div>
	</div>
	<PlayersComp/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PlayersComp from '@/components/players/PlayersComp.vue';

export default defineComponent({
	name: "PlayersView",
	components: {
		PlayersComp
	}
})

</script>