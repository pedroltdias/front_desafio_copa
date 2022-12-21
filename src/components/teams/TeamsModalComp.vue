<template>
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
				<button class="button is-primary" @click="toggleModal">Salvar</button>
			</form>
		</div>
		<button class="modal-close is-large" @click="toggleModal" aria-label="close"></button>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: "ModalComp",
	emits: ['modalWasClicked'],
	data() {
		return {
			showModal: false
		}
	},
	methods: {
		toggleModal(){
			this.$emit('modalWasClicked')
		}
	}

})

</script>