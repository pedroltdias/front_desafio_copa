<template>
	<section class="box is-flex is-align-items-center">
		<img class="image is-rounded is-32x32 mr-2" src="../../assets/logo.png" alt="Bandeira do Time">
		<h3>{{ team.name }}</h3>
	</section>
</template>

<script lang="ts">
import ITeam from '@/interfaces/ITeam';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
	name: "TeamBoxComp",
	props: {
		team: {
			type: Object as PropType<ITeam>,
			required: true
		}
	}
})

</script>