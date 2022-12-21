<template>
	<div class="container">
		<div class="is-flex is-justify-content-space-between is-align-items-center">
			<h2 class="is-size-2">Times</h2>
			<button class="button" @click="toggleModal">
				<font-awesome-icon icon="faCirclePlus" />
				Adicionar
			</button>
		</div>
		<!-- Extrair esse codigo para o componente AppModal -->
		<div class="modal" :class="{ 'is-active': showModal }">
		<div class="modal-background"></div>
		<div class="modal-content">
			<form action="" class="box">
				<h3 class="is-size-3">Adicionar Novo Time</h3>
				<div class="field">
					<label class="label label-text">Nome do Time</label>
					<div class="control">
						<input type="text" class="input" placeholder="Nome do time...">
					</div>
				</div>
				<button class="button" @click="toggleModal">Salvar</button>
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
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons"


export default defineComponent({
	name: "TeamsComp",
	emits: ['modalWasClicked'],
	data(){
		return {
			showModal: false,
			icons: {
				faCirclePlus
			}
		}
	},
	components: {
		TeamBoxComp,
	},
	methods: {
		toggleModal() {
			this.showModal = !this.showModal 
			this.$emit('modalWasClicked')
		}
	}
})

</script>

<style>
.label-text{
	color: #fff;
}
</style>