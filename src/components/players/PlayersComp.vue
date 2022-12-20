<template>
	<div class="container">
		<PlayersCardComp />
		<PlayersCardComp />
		<PlayersCardComp />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PlayersCardComp from "./PlayersCardComp.vue"

export default defineComponent({
	name: "PlayersComp",
	components: {
		PlayersCardComp
	}
})

</script>
