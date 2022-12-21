<template>
	<div class="container">
		<MatchesComp @when-drew-teams="saveMatch"/>
		<MatchesBoxComp v-for="(match, index) in matches" :key="index" :match="match"/>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MatchesComp from '@/components/matches/MatchesComp.vue';
import IMatches from '@/interfaces/IMatches';
import MatchesBoxComp from '@/components/matches/MatchesBoxComp.vue';


export default defineComponent({
	name: "MatchesView",
	components: {
    MatchesComp,
    MatchesBoxComp
},
	data() {
		return {
			matches: [] as IMatches[]
		}
	},
	methods: {
		saveMatch(match: IMatches) {
			this.matches.push(match)
		}
	}
})

</script>