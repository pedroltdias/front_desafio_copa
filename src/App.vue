<template>
	<main class="modo-escuro">
		<AppNav />
		<Teams />
	</main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppNav from './components/AppNav.vue';
import Teams from './components/Teams.vue';

export default defineComponent({
	name: 'App',
	components: {
		AppNav,
		Teams
	}
});
</script>

<style>
main {
	-bg-primario: #fff;
	--texto-primario: #000;
}

main.modo-escuro {
	--bg-primario: #2b2d42;
	--texto-primario: #ddd;
}
</style>
