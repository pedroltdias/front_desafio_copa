<template>
	<section class="box is-flex is-align-items-center">
		<img class="image is-32x32 mr-4" src="../../assets/placeholder.png" alt="Bandeira do Time">
		<h3 class="is-size-4">{{ team.name }}</h3>
	</section>
</template>

<script lang="ts">
import ITeam from '@/interfaces/ITeam';
import { defineComponent, PropType } from 'vue';
import { hasFlag } from "country-flag-icons";

export default defineComponent({
	name: "TeamBoxComp",
	props: {
		team: {
			type: Object as PropType<ITeam>,
			required: true
		}
	},
})

</script>