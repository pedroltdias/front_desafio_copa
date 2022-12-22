<template>
	<div class="container">
		<MatchesComp />
		<MatchesBoxComp v-for="(match, index) in matches" :key="index" :match="match" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MatchesComp from '@/components/matches/MatchesComp.vue';
import IMatches from '@/interfaces/IMatches';
import MatchesBoxComp from '@/components/matches/MatchesBoxComp.vue';
import http from '@/http';


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
		async getAllMatches() {
			try {
				const res = await http.get("/matches")
				console.log(res.data)
				this.matches = res.data
			} catch (error) {
				console.error()
			}
		},
	},
	created() {
		this.getAllMatches()
	}
})

</script>