<template>
	<main>
		<NavComp />
		<router-view></router-view>
	</main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavComp from './components/NavComp.vue';

export default defineComponent({
	name: 'App',
	components: {
		NavComp
	}
});
</script>

<style>

</style>
