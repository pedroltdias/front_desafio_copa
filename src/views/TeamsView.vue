<template>
	<TeamsComp />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TeamsComp from '../components/TeamsComp.vue';

export default defineComponent({
	name: 'TeamsView',
	components: {
		TeamsComp
	}
});
</script>

<style>

</style>
