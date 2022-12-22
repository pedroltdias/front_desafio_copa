<template>
	<div class="container">
		<div class="is-flex is-justify-content-space-between is-align-items-center">
			<h2 class="is-size-2">Jogadores</h2>
			<button class="button" @click="toggleModal">Adicionar</button>
		</div>
		<div class="modal" :class="{ 'is-active': showModal }">
			<div class="modal-background"></div>
			<div class="modal-content">
				<form @submit="createPlayer" class="box">
					<h3 class="is-size-3">Adicionar Novo Jogador</h3>
					<div class="field">
						<label for="playerName" class="label label-text">Nome do Jogador</label>
						<div class="control">
							<input id="playerName" v-model="player.name" type="text" class="input"
								placeholder="Nome do Jogador..." />
						</div>
					</div>
					<div class="field">
						<label for="playerAge" class="label label-text">Idade do Jogador</label>
						<div class="control">
							<input id="playerAge" v-model="player.age" type="number" class="input"
								placeholder="Idade do Jogador..." />
						</div>
					</div>
					<div class="field">
						<label for="playerPosition" class="label label-text">Posição do Jogador</label>
						<div class="control">
							<input id="playerPosition" v-model="player.position" type="text" class="input"
								placeholder="Posição do Jogador..." />
						</div>
					</div>
					<div class="field">
						<label for="playerTeam" class="label label-text">Time do Jogador</label>
						<div class="control">
							<input id="playerTeam" v-model="player.team_id" type="number" class="input"
								placeholder="Time do Jogador..." />
						</div>
					</div>
					<button class="button" type="submit">Salvar</button>
				</form>
			</div>
			<button class="modal-close is-large" @click="toggleModal" aria-label="close"></button>
		</div>
	</div>
</template>

<script lang="ts">
import http from '@/http';
import { defineComponent } from 'vue';

export default defineComponent({
	name: "PlayersComp",
	emits: ['whenSavingPlayer'],
	data(){
		return {
			showModal: false,
			player: {
				name: '',
				position: '',
				age: '',
				team_id: ''
			}
		}
	},
	methods: {
		toggleModal() {
			this.showModal = !this.showModal
		},
		async createPlayer() {
			try {
				console.log(this.player)
				await http.post('/players/', this.player)
			} catch (error) {
				console.log(error)
			}
			location.reload()
		}
	}
})

</script>
