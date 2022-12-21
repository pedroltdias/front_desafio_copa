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
				<form @submit.prevent class="box">
					<h3 class="is-size-3">Adicionar Novo Time</h3>
					<div class="field">
						<label for="teamName" class="label label-text">Nome do Time</label>
						<div class="control">
							<input id="teamName" v-model="name" type="text" class="input"
								placeholder="Nome do time..." />
						</div>
					</div>
					<button class="button" type="submit">Salvar</button>
				</form>
			</div>
			<button class="modal-close is-large" @click="toggleModal" aria-label="close"></button>
		</div>

		<div class="team-list">
			<TeamBoxComp />
		</div>

	</div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import TeamBoxComp from './TeamBoxComp.vue';
import ITeam from '@/interfaces/ITeam'

export default defineComponent({
	name: "TeamsComp",
	emits: ['modalWasClicked', 'savingTeam'],
	data() {
		return {
			showModal: false,
			name: '',
			teams: [] as ITeam[]
		}
	},
	components: {
		TeamBoxComp,
	},
	methods: {
		toggleModal() {
			this.showModal = !this.showModal
			this.$emit('modalWasClicked')
		},
		getAllTeams(){
			const teams = 
		}
	},
})

</script>

<style>
.label-text {
	color: #fff;
}
</style>