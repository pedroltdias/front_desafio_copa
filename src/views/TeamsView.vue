<template>
	<div class="container">
		<TeamsComp @when-saving-time="saveTeam" />
		<TeamBoxComp v-for="(team, index) in teams" :key="index" :team="team" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TeamsComp from '@/components/teams/TeamsComp.vue';
import TeamBoxComp from '@/components/teams/TeamBoxComp.vue';
import ITeam from '@/interfaces/ITeam';

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
		saveTeam(team: ITeam) {
			this.teams.push(team)
		}
	}
});
</script>

<style>

</style>
