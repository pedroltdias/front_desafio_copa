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
html{
	background-color: #15151E;
}
main {
	background-color: #15151E;
}

h2 {
	color: #fff;
}

.box{
	background-color: #2B2F40;
	color: #fff;
}

.button{
	background-color: #f5760f;
	border-color: #f5760f;
	color: #fff
}
</style>
