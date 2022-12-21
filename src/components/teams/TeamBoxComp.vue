<template>
	<section class="box is-flex is-align-items-center">
		<img class="image is-rounded is-32x32 mr-2" src="../../assets/logo.png" alt="Bandeira do Time">
		<h3>{{ teamName }}</h3>
	</section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: "TeamBoxComp",
	props: {
		teamName: {
			type: String,
			default: "Nome do Time"
		}
	}
})

</script>