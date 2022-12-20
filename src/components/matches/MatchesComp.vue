<template>
	<div class="container">
		<MatchesBoxComp />
		<MatchesBoxComp />
		<MatchesBoxComp />
	</div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import MatchesBoxComp from './MatchesBoxComp.vue';

export default defineComponent({
	name: "MatchesComp",
	components: {
		MatchesBoxComp
	}
})


</script>
