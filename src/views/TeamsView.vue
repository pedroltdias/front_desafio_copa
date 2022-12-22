<template>
	<div class="container">
		<TeamsComp />
		<TeamBoxComp v-for="(team, index) in teams" :key="index" :team="team" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TeamsComp from '@/components/teams/TeamsComp.vue';
import TeamBoxComp from '@/components/teams/TeamBoxComp.vue';
import ITeam from '@/interfaces/ITeam';
import http from '@/http'

export default defineComponent({
	name: 'TeamsView',
	components: {
		TeamsComp,
		TeamBoxComp
	},
	data() {
		return {
			teams: [] as ITeam[]
		}
	},
	methods: {
		async getAllTeams() {
			try {
				const res = await http.get("/teams")
				console.log(res.data)
				this.teams = res.data
			} catch (error) {
				console.error()
			}
		},
	},
	created() {
		this.getAllTeams()
	}
});
</script>

<style>

</style>
