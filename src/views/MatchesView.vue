<template>
	<div class="container">

		<div class="is-flex is-justify-content-space-between is-align-items-center">
			<h2 class="is-size-2">Partidas</h2>
			<button class="button">Sortear Partida</button>
		</div>
		<MatchesComp />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MatchesComp from '@/components/matches/MatchesComp.vue';

export default defineComponent({
	name: "MatchesView",
	components: {
		MatchesComp
	}
})

</script>