<template>
	<div class="container">
		<div class="is-flex is-justify-content-space-between is-align-items-center">
			<h2 class="is-size-2">Times</h2>
			<button class="button" @click="toggleModal">Adicionar</button>
		</div>
		<!-- Extrair esse codigo para o componente AppModal -->
		<div class="modal" :class="{ 'is-active': showModal }">
			<div class="modal-background"></div>
			<div class="modal-content">
				<form action="" class="box">
					<h3 class="is-size-3">Adicionar Novo Time</h3>
					<div class="field">
						<label class="label">Nome do Time</label>
						<div class="control">
							<input type="text" class="input" placeholder="Nome do time...">
						</div>
					</div>
					<button class="button is-primary">Salvar</button>
				</form>
			</div>
			<button class="modal-close is-large" @click="toggleModal" aria-label="close"></button>
		</div>
		<!-- Até aqui -->
		<TeamBoxComp />
		<TeamBoxComp />
		<TeamBoxComp />
		<TeamBoxComp />
		<TeamBoxComp />
		<TeamBoxComp />
	</div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import TeamBoxComp from './TeamBoxComp.vue';
// import AppModal from './AppModal.vue';

export default defineComponent({
	name: "TeamsComp",
	components: {
		TeamBoxComp,
		// AppModal
	},
	data() {
		return {
			showModal: false
		}
	},
	methods: {
		toggleModal() {
			this.showModal = !this.showModal
		}
	}
})


</script>