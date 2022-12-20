<template>
	<div id="aTalDaModal" class="modal">
		<div class="modal-background"></div>
		<div class="modal-content">
			Oi
		</div>
		<button class="modal-close is-large" aria-label="close"></button>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: "AppModal",
	data() {
		return {
			isModalOpen: false
		}
	},
	methods: {
		openAndCloseModal() {
			this.isModalOpen = !this.isModalOpen
			this.$emit("aoAbrirOuFecharModal", this.isModalOpen)
		}
	}

})

</script>