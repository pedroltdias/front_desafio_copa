<template>
	<div class="container">
		<div class="is-flex is-justify-content-space-between is-align-items-center">
			<h2 class="is-size-2">Partidas</h2>
			<button class="button" @click="raffle">Sortear</button>
		</div>
	</div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
	name: "MatchesComp",
	emits: ['whenDrewTeams'],
	data() {
		return {
			teams: ["Time 1", "Time 2", "Time 3", "Time 4"],
			homeTeam: '',
			awayTeam: ''
		}
	},
	methods: {
		raffle(){
			let homeTeam = Math.floor(Math.random() * this.teams.length)
			let awayTeam = Math.floor(Math.random() * this.teams.length)

			while (homeTeam === awayTeam){
				awayTeam = Math.floor(Math.random() * this.teams.length)
			}

			this.homeTeam = this.teams[homeTeam]
			this.awayTeam = this.teams[awayTeam]

			this.saveNewMatch()
		},
		saveNewMatch (){
			this.$emit('whenDrewTeams', {
				home_team_name: this.homeTeam,
				away_team_name: this.awayTeam
			})
			this.homeTeam = ''
			this.awayTeam = ''
		}
	}
})


</script>
