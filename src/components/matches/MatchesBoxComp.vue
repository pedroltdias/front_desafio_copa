<template>
	<section class="box is-flex is-justify-content-space-between">
		<div class="is-flex is-align-items-center">
			<img class="image is-rounded is-align-items-center is-32x32 mr-2" src="../../assets/logo.png"
				alt="Bandeira do Time">
			<h3>{{ match.home_team_name }}</h3>
		</div>
		<img class="image is-rounded is-align-items-center is-32x32" src="../../assets/logo.png" alt="Bandeira do Time">
		<div class="is-flex is-align-items-center">
			<h3>{{ match.away_team_name }}</h3>
			<img class="image is-rounded is-align-items-center is-32x32 ml-2" src="../../assets/logo.png"
				alt="Bandeira do Time">
		</div>
	</section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import IMatches from '@/interfaces/IMatches'

export default defineComponent({
	name: "MatchesBoxComp",
	props: {
		match: {
			type: Object as PropType<IMatches>,
			required: true
		}
	}
})

</script>