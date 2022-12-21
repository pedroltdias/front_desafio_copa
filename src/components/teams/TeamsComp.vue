<template>
	<div class="container">
		<div class="is-flex is-justify-content-space-between is-align-items-center">
			<h2 class="is-size-2">Times</h2>
			<button class="button" @click="toggleModal">
				Adicionar
			</button>
		</div>
		<div class="modal" :class="{ 'is-active': showModal }">
			<div class="modal-background"></div>
			<div class="modal-content">
				<form @submit.prevent="createTeam" class="box">
					<h3 class="is-size-3">Adicionar Novo Time</h3>
					<div class="field">
						<label for="teamName" class="label label-text">Nome do Time</label>
						<div class="control">
							<input id="teamName" v-model="team.name" type="text" class="input"
								placeholder="Nome do time..." />
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
	name: "TeamsComp",
	emits: ['whenSavingTime'],
	data() {
		return {
			showModal: false,
			team: {
				name: ''
			}
		}
	},
	methods: {
		toggleModal() {
			this.showModal = !this.showModal
		},
		saveNewTeam() {
			this.$emit('whenSavingTime', {
				team: this.team
			})
			this.toggleModal()
		},
		async createTeam() {
			console.log('oi1')
			try {
				console.log('oi2')
				console.log(this.team)
				await http.post('/teams/', this.team)
			} catch (error) {
				console.log('oi3')

				console.log(error)
			}
			this.toggleModal()
		}
	},
})

</script>

<style>
.label-text {
	color: #fff;
}
</style>