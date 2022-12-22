<template>
	<div class="container">
		<div class="is-flex is-justify-content-space-between is-align-items-center">
			<h2 class="is-size-2">Partidas</h2>
			<button class="button" @click="toggleModal">Nova Partida</button>
		</div>
		<div class="modal" :class="{ 'is-active': showModal }">
			<div class="modal-background"></div>
			<div class="modal-content">
				<form @submit="raffle" class="box">
					<h3 class="is-size-3">Sortear nova partida</h3>
					<div class="field">
						<label for="teamName" class="label label-text">Data da Partida</label>
						<div class="control">
							<input id="teamName" v-model="match.date" type="date" class="input"
								placeholder="Data da Partida..." />
						</div>
					</div>
					<div class="field">
						<label for="teamName" class="label label-text">Estádio</label>
						<div class="control">
							<input id="teamName" v-model="match.stadium" type="text" class="input"
								placeholder="Estádio..." />
						</div>
					</div>
					<button class="button" type="submit">Salvar e Sortear</button>
				</form>
			</div>
			<button class="modal-close is-large" @click="toggleModal" aria-label="close"></button>
		</div>
	</div>
</template>

<script lang="ts">

import http from '@/http';
import ITeam from '@/interfaces/ITeam';
import { defineComponent } from 'vue';

export default defineComponent({
	name: "MatchesComp",
	data() {
		return {
			teams: [] as ITeam[],
			showModal: false,
			match: {
				date: '',
				stadium: '',
				home_team_id: 0,
				away_team_id: 0,
			}
		}
	},
	methods: {
		toggleModal() {
			this.showModal = !this.showModal
		},
		raffle(){
			let homeTeam = Math.floor(Math.random() * this.teams.length)
			let awayTeam = Math.floor(Math.random() * this.teams.length)

			while (homeTeam === awayTeam){
				awayTeam = Math.floor(Math.random() * this.teams.length)
			}

			console.log(this.teams[homeTeam].id)
			console.log(this.teams[awayTeam].id)

			let idHomeTeam  = this.teams[homeTeam].id
			let idAwayTeam  = this.teams[awayTeam].id


			this.match.home_team_id = idHomeTeam.valueOf()
			this.match.away_team_id = idAwayTeam.valueOf()

			this.createMatch()
		},
		async getAllTeams() {
			try {
				const res = await http.get("/teams")
				console.log(res.data)
				this.teams = res.data
			} catch (error) {
				console.error()
			}
		},
		async createMatch() {
			try {
				console.log(this.match)
				await http.post('/matches/', this.match)
			} catch (error) {
				console.log(error)
			}
			location.reload()
		}
	},
	created() {
		this.getAllTeams()
	}
})


</script>
